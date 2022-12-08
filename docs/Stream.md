# Stream client

Under the hood the `CensusClient` uses the `StreamClient`. This client can also be used by anyone wanting to connect to
the stream with less overhead. It is missing some functionality like:

- Auto reconnecting;
- De-duplication of events;
- Subscription manager;
- Command handler;
- Integration of the `RestClient`.

## Example usage

```js
const { StreamClient } = require('ps2census');

const client = new StreamClient('example', 'ps2');

client
  .on('ready', () => {
    client.send({
      service: 'event',
      action: 'subscribe',
      characters: ['all'],
      eventNames: ['Death'],
      worlds: ['10'],
      logicalAndCharactersWithWorlds: true,
    });
  })
  .on('message', message => {
    if (message.service != 'event' || message.type != 'serviceMessage') return;
    if ('event_name' in message.payload && message.payload.event_name == 'Death') {
      const death = message.payload;
      // Do something
    }
  })
  .on('close', () => {
    // Wait 5seconds then reconnect
    setTimeout(() => {
      client.connect();
    }, 5000)
  });

client.connect();
```
