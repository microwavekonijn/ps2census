export type RewardGroupToReward = {
  collection: 'reward_group_to_reward';
  format: { reward_group_id: string; reward_id: string };
  paths: 'reward_group_id' | 'reward_id';
  partialPaths: 'reward_group_id' | 'reward_id';
  conditions: { reward_group_id?: string; reward_id?: string };
};
