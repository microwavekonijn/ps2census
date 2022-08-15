# PS2 Census Library

[![CI](https://github.com/microwavekonijn/ps2census/workflows/CI/badge.svg)](https://github.com/microwavekonijn/ps2census/actions)
[![npm version](https://badge.fury.io/js/ps2census.svg)](https://www.npmjs.com/package/ps2census)
[![Dependencies](https://badges.depfu.com/badges/3a82f9d026a51daf0decae84eafa7845/overview.svg)](https://depfu.com/github/microwavekonijn/ps2census?project_id=36268)
[![GitHub](https://img.shields.io/github/license/microwavekonijn/ps2census)](https://github.com/microwavekonijn/ps2census/blob/main/LICENSE)

## About

The PS2 Census library is here to simplify the interaction with the Planetside 2 Census API for Javascript and
Typescript projects.

## Requirements

### Event Stream

- Node.js v12+;
- DBG Census API Service ID.

### Rest API

- ES6;
- DBG Census API Service ID(optional, but recommended).

## Installation

```
npm install ps2census
```

For better performance it is recommended to install `bufferutil` and `utf-8-validate`, though this is optional. The
`--save-optional` flag can be used to install them as optionalDependencies.

## Getting started

### Event Stream

```js
const { CensusClient } = require('ps2census');

const subscriptions = {
  worlds: ['10'],
  eventNames: ['MetagameEvent'],
};

const client = new CensusClient('ServiceID', 'ps2', {
  streamManager: {
    subscription: subscriptions,
  },
});

client.on('ps2Event', event => {
  // Handle the event, for more information see http://census.daybreakgames.com/#websocket-details
});
// or
client.on('facilityControl', event => {}); // Note that the event always starts with a lower case letter

client.on('subscribed', subscription => {}); // Notification of a subscription made by the event stream
client.on('duplicate', event => {}); // When a duplicate event has been received
client.on('ready', () => {}); // Client is ready
client.on('reconnecting', () => {}); // Client is reconnecting
client.on('disconnected', () => {}); // Client got disconnected
client.on('error', error => {}); // Error
client.on('warn', error => {}); // Error, when receiving a corrupt message

client.watch();

// To terminate the client
client.destroy();
```

### Rest API

```js
const { Rest } = require('ps2census');

const client = new Rest.Client('ps2ps4eu', { serviceId: 'example' });

// Get character with items
client
  .getQueryBuilder('character')
  .resolve('item')
  .exactMatchFirst(true)
  .get({ 'name.first_lower': '^microwave' })
  .then(characters => {
    // Process the data
  });
```

## Documentation

- [Rest API](https://github.com/microwavekonijn/ps2census/tree/master/docs/Rest.md);
- [Testing Stream](https://github.com/microwavekonijn/ps2census/tree/master/docs/Testing.md).

## Contribution

Please make sure not to create duplicate issues. When making a PR make sure to check if eslint doesn't report any
problems.

## Disclaimer

The PS2 Census Library comes with no warranties. This software is as is and usage is at the developer/users own
discretion.
