# PS2 Census Client

[![npm version](https://badge.fury.io/js/ps2census.svg)](https://www.npmjs.com/package/ps2census)
[![David DM Badge](https://david-dm.org/microwavekonijn/ps2census.svg)](https://david-dm.org/microwavekonijn/ps2census)

## About

The PS2 Census Client is a tool to simplify the interaction with the Planetside 2 Census API. Note that it is still in
a Alpha state and that things might change in the future.

## Requirements

- Node.js v12+;
- DBG Census API Service ID.

## Installation

```
npm install ps2census
```

For better performance it is recommended to install `bufferutil` and `utf-8-validate`, though this is optional. The
`--save-optional` flag can be used to install them as optionalDependencies.

## Getting started

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

## Documentation

To be added.

## Contribution

Please make sure not to create duplicate issues. When making a PR make sure to check if eslint doesn't report any
problems.

## Disclaimer

The PS2 Census Client comes with no warranties. This software is as is and usage is at the developer/users own
discretion.
