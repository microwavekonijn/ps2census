export type RewardSetToRewardGroup = {
  collection: 'reward_set_to_reward_group';
  format: { reward_set_id: string; reward_group_id: string };
  paths: 'reward_set_id' | 'reward_group_id';
  partialPaths: 'reward_set_id' | 'reward_group_id';
  conditions: { reward_group_id?: string; reward_set_id?: string };
};
