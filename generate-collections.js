const { readdir, writeFile } = require('fs/promises');
const { join } = require('path');

const COLLECTIONS_INPUT = join(__dirname, '/census-index/collections');
const COLLECTIONS_OUTPUT = join(__dirname, '/src/rest/collections');

void run();

async function run() {
  const files = await readdir(COLLECTIONS_INPUT);

  const collections = [];

  await Promise.all(
    files.map(async file => {
      const { collection, conditions, format, resolve } = require(
        join(COLLECTIONS_INPUT, file),
      );

      const typeName = collection.replaceAll(/(?:^|_)([a-z0-9])/g, (_, s) =>
        s.toUpperCase(),
      );

      const partialPaths = getPaths(format, (key, paths) => {
        if (!paths) return [key];
        return [key, ...paths.map(path => `${key}.${path}`)];
      });

      const paths = getPaths(format, (key, paths) => {
        if (!paths) return [key];
        return paths.map(path => `${key}.${path}`);
      });

      let collectionType = '';

      // Start type
      collectionType += `export type ${typeName} = {`;

      // Collection name
      collectionType += `collection: '${collection}',`;

      // Format
      collectionType += `format: ${buildFormat(format)},`;

      // Paths
      collectionType += `paths: ${paths.map(path => `'${path}'`).join(' | ')},`;

      // Partial paths
      collectionType += `partialPaths: ${partialPaths
        .map(path => `'${path}'`)
        .join(' | ')},`;

      // Conditions
      collectionType += `conditions: {${Object.entries(conditions)
        .map(
          ([key, cond]) =>
            `${formatKey(key)}: ${
              Array.isArray(cond) ? cond.map(c => `'${c}'`).join(' | ') : cond
            }`,
        )
        .join(',')}},`;

      // Resolve
      if (resolve)
        collectionType += `resolve: ${Object.keys(resolve)
          .map(key => `'${key}'`)
          .join(' | ')},`;

      // Close type
      collectionType += `};\n`;

      const path = join(COLLECTIONS_OUTPUT, `${typeName}.ts`);

      await writeFile(path, collectionType);

      collections.push(typeName);

      console.log(`${file} => ${typeName}`);
    }),
  );

  let index = '';

  // Import all collections
  index += collections
    .map(typeName => `import {${typeName}} from './${typeName}';`)
    .join('\n');

  index += '\n\n';

  // Create collections type

  index += `export type Collections = ${collections.join(' | ')};`;

  await writeFile(join(COLLECTIONS_OUTPUT, 'index.ts'), index);
}

function formatKey(key) {
  if (key.endsWith('?')) return `'${key.slice(0, -1)}'?`;

  return `'${key}'`;
}

function buildFormat(format) {
  if (typeof format == 'string') return 'string';

  if (Array.isArray(format)) return `${buildFormat(format[0])}[]`;

  return `{${Object.entries(format)
    .map(([k, v]) => `'${k}': ${buildFormat(v)}`)
    .join(',')}}`;
}

function getPaths(something, reducer) {
  if (typeof something == 'string') return null;

  if (Array.isArray(something)) return getPaths(something[0], reducer);

  return Object.entries(something)
    .map(([key, something]) => reducer(key, getPaths(something, reducer)))
    .flat();
}
