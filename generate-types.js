const {readdirSync} = require('fs');

const CI_DIR = `${__dirname}/census-index/collections`;
const TYPE_DIR = `${__dirname}/src/rest/collections`;

function camelCase(str) {
    return str.replace(/_([a-z0-9])/g, c => c.slice(1).toUpperCase());
}

function buildFormat(format) {
    return Object.keys(format)
        .map(k => {
            const v = format[k];

            if (Array.isArray(v))
                return `"${k}": {\n${buildFormat(v[0])}\n}[]`;

            if (typeof v != 'string')
                return `"${k}": {\n${buildFormat(v)}\n}`;

            return `"${k}": "string"`;
        }).join(',\n');
}

readdirSync(CI_DIR).forEach(file => {
    try {
        const index = require(`${CI_DIR}/${file}`);

        const {collection, format, conditions, resolve, commands} = index;
        const count = typeof index.count == 'boolean' ? index.count : true;


        if (!collection || !format || !conditions)
            throw new Error(`Missing properties on ${file}`);

        const ccc = camelCase(collection);

        let type = `export interface ${ccc} {\n`;

        type += `collection: '${collection}';\n\n`;

        type += `format: {\n\n`;
        type += buildFormat(format);
        type += `\n};\n`;

        type += `conditions: {\n`;
        type += Object.keys(conditions).map(k => {
            let str = `'${k.replace('?', '')}'`;
            if (k.endsWith('?')) str += `?`;
            str += `: "string"`;

            return str;
        }).join(',\n');
        type += `\n};\n`;

        if (resolve) {
            type += `\nresolve: {\n`;
            Object.keys(resolve).map(k => {

            }).join(',\n');
            type += `\n};\n`;
        }

        type += '}';

    } catch (e) {
        console.error(`Unable to generate type for ${file}: ${e}`);
    }
});
