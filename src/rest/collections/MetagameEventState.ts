export type MetagameEventState = {
  collection: 'metagame_event_state';
  format: { metagame_event_state_id: string; name: string };
  paths: 'metagame_event_state_id' | 'name';
  partialPaths: 'metagame_event_state_id' | 'name';
  conditions: { metagame_event_state_id?: string; name?: string };
};
