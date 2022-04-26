# Testing

## Faking Events

You are able to emit fake events in order to test your application without requiring to wait for Census to emit such an event. Below is an example of how to trigger a `MetagameEvent` (an Alert):

```js
// This example assumes you have already initialised the CensusClient
// See the README.md Event stream example on how to initialise the `client`

// A fake MetagameEvent occurring on Miller for the continent Indar
const event = new MetagameEvent(client, {
  event_name: 'MetagameEvent',
  experience_bonus: '25.000000',
  faction_nc: '6.274510',
  faction_tr: '19.607843',
  faction_vs: '9.803922',
  instance_id: '12358',
  metagame_event_id: '190',
  metagame_event_state: '137',
  metagame_event_state_name: 'started',
  timestamp: '123456789',
  world_id: '10',
  zone_id: '2',
});

client.emit(Events.PS2_EVENT, event);
// or
client.emit(Events.PS2_META_EVENT, event);
```

Note: Events are emitted separately by the client. This means that `Events.PS2_META_EVENT` will not be emitted as `Events.PS2_EVENT` and vice versa. You can always emit both.
