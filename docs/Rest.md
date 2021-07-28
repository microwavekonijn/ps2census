# Rest API

The rest API is exposed a `rest` from the entryfile.
It is fully typed including the responses and handles the oddities of the Census Rest API.

## Usage

Every collection has a base request object for instance the character collections can be accessed with `rest.character`(note that ps2census uses camel case for it's naming of the collections instead of snake case).
The base request object can be extended with commands(e.g. `rest.join` or `rest.hide`).
To execute the request generate a get or count method using the `rest.getFactory` or `rest.countFactory` respectively.
The new methods allow you to query the data, that will be returned as a promise.

Note that that everything is typed which makes it really usefull to catch mistakes and see what data is returned.

## Commands

#### `rest.caseSensitive(request, sensitive = false)`
Whether the query should be case sensitive.

#### `rest.distinct(request, field)`
Returns an array of distinct values of a field.

#### `rest.exactMatchFirst(request, exactMatchFirst = true)`
When using search modifiers exact matches are moved to the first position in the array.

#### `rest.has(request, field)`
Filter by pressence of a field.

#### `rest.hide(request, fields)`
Remove fields from the results. Accepts an array of strings.

#### `rest.includeNull(request, field)`
Exposes a field even though it might be empty in the results.

#### `rest.join(request, joins)`
Joins another collection into the results. Accepts an array of:
```ts
{
  type: collection,
  on?: string,
  to?: string,
  list?: boolean, // default false
  inject_at?: string,
  terms?: {}, // GetQuery the join
  outer?: boolean, // default true, true outer join, false inner join
  show?: string[], // Which fields to include in the result
  hide?: string[], // Which fields to exclude from the result
}
```

To use extend a join with a join use a tuple where the second item is an array like above, like `[join, extended_joins]`.

#### `rest.lang(request, lang)`
Set a language. Currently accepts en, de, fr, es, it, tr.

#### `rest.limit(request, limit)`
Set a maximum limit on the amount of items returned.

#### `rest.limitPerDB(request, limit)`
Set a maximum limit on the amount of items returned per database.
This command is mainly for the character collection as it is distributed across multiple databases.

#### `rest.resovle(request, resolve)`
Collections come with joins that can easily be added using a keyword. Resolve accepts an array of strings.

#### `rest.retry(request, boolean = false)`
Whether to retry when a request fails.

#### `rest.show(request, fields)`
Only accepts specified fields in the result. Accepts an array of strings.

#### `rest.sort(request, fields)`
How to sort the results.
Accepts an array of either fieldname or a tuple of a fieldname followed by the direction(either `1` or `-1`).

#### `rest.start(request, start)`
Skips the specified amount of rows. Be aware of the character collections, see `rest.limitPerDB`.

#### `rest.timing(request, timing = true)`
Wheter to time the query. Note the results are ingored until support is added.

#### `rest.tree(request, tree)`
Groups the items by field. Accepts:
```ts
{
  field: string,
  list?: boolean, // defaults to false
  prefix?: string,
  start?: string,
}
```
