# PS2 Census Client

[![npm version](https://badge.fury.io/js/ps2census.svg)](https://www.npmjs.com/package/ps2census)
[![David DM Badge](https://david-dm.org/microwavekonijn/ps2census.svg)](https://david-dm.org/microwavekonijn/ps2census)

## About

The PS2 Census Client is a tool to simplify the interaction with the Planetside 2 Census API.

## Requirements

- Node.js v12+;
- DBG Census API Service ID(required for the Event Stream).

## Installation

```
npm install ps2census
```

For better performance it is recommended to install `bufferutil` and `utf-8-validate`, though this is optional. The
`--save-optional` flag can be used to install them as optionalDependencies.

## Getting started

### Event Stream

```js
const { Client } = require('ps2census');

const subscriptions = [{
    worlds: ['10'],
    eventNames: ['MetagameEvent']
}];

const client = new Client('ServiceID', {
        streamManagerConfig: {
            subscriptions
        },
    });

client.on('ps2Event', (event) => {
    // Handle the event, for more information see http://census.daybreakgames.com/#websocket-details
});
// or
client.on('facilityControl', (event) => {}); // Note that the event always starts with a lower case letter

client.on('subscribed', (subscription) => {}); // Notification of a subscription made by the event stream
client.on('duplicate', (event) => {}); // When a duplicate event has been received
client.on('ready', () => {}); // Client is ready
client.on('reconnecting', () => {}); // Client is reconnecting
client.on('disconnected', () => {}); // Client got disconnected
client.on('error', (error) => {}); // Error
client.on('warn', (error) => {}); // Error, when receiving a corrupt message

client.watch();

// To terminate the client
client.destroy();
```

### Rest API

The Rest API is based on functional programming, which helps with functions like tree shaking(Webpack).
This implementation can thus easily be minified and is perfect for browser based applications.

```js
const { rest } from 'ps2census';

const get = rest.getFactory('ps2ps4eu', 'serviceId');

// Get character and resolve items
get(
  rest.resolve(
    rest.exactMatchFirst(
      rest.character
    )
    ['item']  
  ),
  {
    'name.first_lower': '^microwave'
  }
)
```

Note: First argument of any command function is the request object.
There are also type guards that help with making sure in typescript that the chaining and commands are allowed.
If you encounter bugs or problems report them in the Census Rest API thread on GitHub.

## Documentation

Check `/docs`.

## Contribution

Please make sure not to create duplicate issues. When making a PR make sure to check if eslint doesn't report any
problems.

## Disclaimer

The PS2 Census Client comes with no warranties. This software is as is and usage is at the developer/users own
discretion.
