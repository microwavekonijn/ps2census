import { query as singleCharacterById } from '../collections/singleCharacterById';
import { query as character } from '../collections/character';
import { query as characterName } from '../collections/characterName';
import { query as charactersAchievement } from '../collections/charactersAchievement';
import { query as charactersCurrency } from '../collections/charactersCurrency';
import { query as charactersDirective } from '../collections/charactersDirective';
import { query as charactersDirectiveObjective } from '../collections/charactersDirectiveObjective';
import { query as charactersDirectiveTier } from '../collections/charactersDirectiveTier';
import { query as charactersDirectiveTree } from '../collections/charactersDirectiveTree';
import { query as charactersSkill } from '../collections/charactersSkill';
import { query as charactersStat } from '../collections/charactersStat';
import { query as charactersStatByFaction } from '../collections/charactersStatByFaction';
import { query as charactersStatHistory } from '../collections/charactersStatHistory';
import { query as charactersWeaponStat } from '../collections/charactersWeaponStat';
import { query as charactersWeaponStatByFaction } from '../collections/charactersWeaponStatByFaction';
import { query as worldStatHistory } from '../collections/worldStatHistory';
import { query as charactersItem } from '../collections/charactersItem';
import { query as ability } from '../collections/ability';
import { query as abilityType } from '../collections/abilityType';
import { query as achievement } from '../collections/achievement';
import { query as armorFacing } from '../collections/armorFacing';
import { query as armorInfo } from '../collections/armorInfo';
import { query as currency } from '../collections/currency';
import { query as directive } from '../collections/directive';
import { query as directiveTier } from '../collections/directiveTier';
import { query as directiveTree } from '../collections/directiveTree';
import { query as directiveTreeCategory } from '../collections/directiveTreeCategory';
import { query as effect } from '../collections/effect';
import { query as effectType } from '../collections/effectType';
import { query as empireScores } from '../collections/empireScores';
import { query as experience } from '../collections/experience';
import { query as experienceRank } from '../collections/experienceRank';
import { query as facilityLink } from '../collections/facilityLink';
import { query as facilityType } from '../collections/facilityType';
import { query as faction } from '../collections/faction';
import { query as fireGroup } from '../collections/fireGroup';
import { query as fireGroupToFireMode } from '../collections/fireGroupToFireMode';
import { query as fireMode } from '../collections/fireMode';
import { query as fireMode2 } from '../collections/fireMode2';
import { query as fireModeToProjectile } from '../collections/fireModeToProjectile';
import { query as fireModeType } from '../collections/fireModeType';
import { query as image } from '../collections/image';
import { query as imageSet } from '../collections/imageSet';
import { query as imageSetDefault } from '../collections/imageSetDefault';
import { query as item } from '../collections/item';
import { query as itemAttachment } from '../collections/itemAttachment';
import { query as itemCategory } from '../collections/itemCategory';
import { query as itemProfile } from '../collections/itemProfile';
import { query as itemToWeapon } from '../collections/itemToWeapon';
import { query as itemType } from '../collections/itemType';
import { query as loadout } from '../collections/loadout';
import { query as mapHex } from '../collections/mapHex';
import { query as mapRegion } from '../collections/mapRegion';
import { query as marketingBundle } from '../collections/marketingBundle';
import { query as marketingBundleItem } from '../collections/marketingBundleItem';
import { query as marketingBundleWith1Item } from '../collections/marketingBundleWith1Item';
import { query as metagameEvent } from '../collections/metagameEvent';
import { query as metagameEventState } from '../collections/metagameEventState';
import { query as objective } from '../collections/objective';
import { query as objectiveSetToObjective } from '../collections/objectiveSetToObjective';
import { query as objectiveType } from '../collections/objectiveType';
import { query as playerState } from '../collections/playerState';
import { query as playerStateGroup } from '../collections/playerStateGroup';
import { query as playerStateGroup2 } from '../collections/playerStateGroup2';
import { query as profile } from '../collections/profile';
import { query as profile2 } from '../collections/profile2';
import { query as profileArmorMap } from '../collections/profileArmorMap';
import { query as profileResistMap } from '../collections/profileResistMap';
import { query as projectile } from '../collections/projectile';
import { query as projectileFlightType } from '../collections/projectileFlightType';
import { query as region } from '../collections/region';
import { query as resistInfo } from '../collections/resistInfo';
import { query as resistType } from '../collections/resistType';
import { query as resourceType } from '../collections/resourceType';
import { query as reward } from '../collections/reward';
import { query as rewardGroupToReward } from '../collections/rewardGroupToReward';
import { query as rewardSetToRewardGroup } from '../collections/rewardSetToRewardGroup';
import { query as rewardType } from '../collections/rewardType';
import { query as skill } from '../collections/skill';
import { query as skillCategory } from '../collections/skillCategory';
import { query as skillLine } from '../collections/skillLine';
import { query as skillSet } from '../collections/skillSet';
import { query as targetType } from '../collections/targetType';
import { query as title } from '../collections/title';
import { query as vehicle } from '../collections/vehicle';
import { query as vehicleAttachment } from '../collections/vehicleAttachment';
import { query as vehicleFaction } from '../collections/vehicleFaction';
import { query as vehicleSkillSet } from '../collections/vehicleSkillSet';
import { query as weapon } from '../collections/weapon';
import { query as weaponAmmoSlot } from '../collections/weaponAmmoSlot';
import { query as weaponDatasheet } from '../collections/weaponDatasheet';
import { query as weaponToAttachment } from '../collections/weaponToAttachment';
import { query as weaponToFireGroup } from '../collections/weaponToFireGroup';
import { query as zone } from '../collections/zone';
import { query as zoneEffect } from '../collections/zoneEffect';
import { query as zoneEffectType } from '../collections/zoneEffectType';
import { query as charactersWorld } from '../collections/charactersWorld';
import { query as world } from '../collections/world';
import { query as outfit } from '../collections/outfit';
import { query as outfitMember } from '../collections/outfitMember';
import { query as outfitMemberExtended } from '../collections/outfitMemberExtended';
import { query as outfitRank } from '../collections/outfitRank';
import { query as charactersOnlineStatus } from '../collections/charactersOnlineStatus';
import { query as map } from '../collections/map';
import { query as charactersFriend } from '../collections/charactersFriend';
import { query as leaderboard } from '../collections/leaderboard';
import { query as charactersLeaderboard } from '../collections/charactersLeaderboard';
import { query as charactersEventGrouped } from '../collections/charactersEventGrouped';
import { query as charactersEvent } from '../collections/charactersEvent';
import { query as event } from '../collections/event';
import { query as worldEvent } from '../collections/worldEvent';

export default queryIndex;

type queryIndex = {
    single_character_by_id: singleCharacterById,
    character: character,
    character_name: characterName,
    characters_achievement: charactersAchievement,
    characters_currency: charactersCurrency,
    characters_directive: charactersDirective,
    characters_directive_objective: charactersDirectiveObjective,
    characters_directive_tier: charactersDirectiveTier,
    characters_directive_tree: charactersDirectiveTree,
    characters_skill: charactersSkill,
    characters_stat: charactersStat,
    characters_stat_by_faction: charactersStatByFaction,
    characters_stat_history: charactersStatHistory,
    characters_weapon_stat: charactersWeaponStat,
    characters_weapon_stat_by_faction: charactersWeaponStatByFaction,
    world_stat_history: worldStatHistory,
    characters_item: charactersItem,
    ability: ability,
    ability_type: abilityType,
    achievement: achievement,
    armor_facing: armorFacing,
    armor_info: armorInfo,
    currency: currency,
    directive: directive,
    directive_tier: directiveTier,
    directive_tree: directiveTree,
    directive_tree_category: directiveTreeCategory,
    effect: effect,
    effect_type: effectType,
    empire_scores: empireScores,
    experience: experience,
    experience_rank: experienceRank,
    facility_link: facilityLink,
    facility_type: facilityType,
    faction: faction,
    fire_group: fireGroup,
    fire_group_to_fire_mode: fireGroupToFireMode,
    fire_mode: fireMode,
    fire_mode_2: fireMode2,
    fire_mode_to_projectile: fireModeToProjectile,
    fire_mode_type: fireModeType,
    image: image,
    image_set: imageSet,
    image_set_default: imageSetDefault,
    item: item,
    item_attachment: itemAttachment,
    item_category: itemCategory,
    item_profile: itemProfile,
    item_to_weapon: itemToWeapon,
    item_type: itemType,
    loadout: loadout,
    map_hex: mapHex,
    map_region: mapRegion,
    marketing_bundle: marketingBundle,
    marketing_bundle_item: marketingBundleItem,
    marketing_bundle_with_1_item: marketingBundleWith1Item,
    metagame_event: metagameEvent,
    metagame_event_state: metagameEventState,
    objective: objective,
    objective_set_to_objective: objectiveSetToObjective,
    objective_type: objectiveType,
    player_state: playerState,
    player_state_group: playerStateGroup,
    player_state_group_2: playerStateGroup2,
    profile: profile,
    profile_2: profile2,
    profile_armor_map: profileArmorMap,
    profile_resist_map: profileResistMap,
    projectile: projectile,
    projectile_flight_type: projectileFlightType,
    region: region,
    resist_info: resistInfo,
    resist_type: resistType,
    resource_type: resourceType,
    reward: reward,
    reward_group_to_reward: rewardGroupToReward,
    reward_set_to_reward_group: rewardSetToRewardGroup,
    reward_type: rewardType,
    skill: skill,
    skill_category: skillCategory,
    skill_line: skillLine,
    skill_set: skillSet,
    target_type: targetType,
    title: title,
    vehicle: vehicle,
    vehicle_attachment: vehicleAttachment,
    vehicle_faction: vehicleFaction,
    vehicle_skill_set: vehicleSkillSet,
    weapon: weapon,
    weapon_ammo_slot: weaponAmmoSlot,
    weapon_datasheet: weaponDatasheet,
    weapon_to_attachment: weaponToAttachment,
    weapon_to_fire_group: weaponToFireGroup,
    zone: zone,
    zone_effect: zoneEffect,
    zone_effect_type: zoneEffectType,
    characters_world: charactersWorld,
    world: world,
    outfit: outfit,
    outfit_member: outfitMember,
    outfit_member_extended: outfitMemberExtended,
    outfit_rank: outfitRank,
    characters_online_status: charactersOnlineStatus,
    map: map,
    characters_friend: charactersFriend,
    leaderboard: leaderboard,
    characters_leaderboard: charactersLeaderboard,
    characters_event_grouped: charactersEventGrouped,
    characters_event: charactersEvent,
    event: event,
    world_event: worldEvent,
};
