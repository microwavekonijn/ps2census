import { typeData as singleCharacterById } from '../collections/singleCharacterById';
import { typeData as character } from '../collections/character';
import { typeData as characterName } from '../collections/characterName';
import { typeData as charactersAchievement } from '../collections/charactersAchievement';
import { typeData as charactersCurrency } from '../collections/charactersCurrency';
import { typeData as charactersDirective } from '../collections/charactersDirective';
import { typeData as charactersDirectiveObjective } from '../collections/charactersDirectiveObjective';
import { typeData as charactersDirectiveTier } from '../collections/charactersDirectiveTier';
import { typeData as charactersDirectiveTree } from '../collections/charactersDirectiveTree';
import { typeData as charactersSkill } from '../collections/charactersSkill';
import { typeData as charactersStat } from '../collections/charactersStat';
import { typeData as charactersStatByFaction } from '../collections/charactersStatByFaction';
import { typeData as charactersStatHistory } from '../collections/charactersStatHistory';
import { typeData as charactersWeaponStat } from '../collections/charactersWeaponStat';
import { typeData as charactersWeaponStatByFaction } from '../collections/charactersWeaponStatByFaction';
import { typeData as worldStatHistory } from '../collections/worldStatHistory';
import { typeData as charactersItem } from '../collections/charactersItem';
import { typeData as ability } from '../collections/ability';
import { typeData as abilityType } from '../collections/abilityType';
import { typeData as achievement } from '../collections/achievement';
import { typeData as armorFacing } from '../collections/armorFacing';
import { typeData as armorInfo } from '../collections/armorInfo';
import { typeData as currency } from '../collections/currency';
import { typeData as directive } from '../collections/directive';
import { typeData as directiveTier } from '../collections/directiveTier';
import { typeData as directiveTree } from '../collections/directiveTree';
import { typeData as directiveTreeCategory } from '../collections/directiveTreeCategory';
import { typeData as effect } from '../collections/effect';
import { typeData as effectType } from '../collections/effectType';
import { typeData as empireScores } from '../collections/empireScores';
import { typeData as experience } from '../collections/experience';
import { typeData as experienceRank } from '../collections/experienceRank';
import { typeData as facilityLink } from '../collections/facilityLink';
import { typeData as facilityType } from '../collections/facilityType';
import { typeData as faction } from '../collections/faction';
import { typeData as fireGroup } from '../collections/fireGroup';
import { typeData as fireGroupToFireMode } from '../collections/fireGroupToFireMode';
import { typeData as fireMode } from '../collections/fireMode';
import { typeData as fireMode2 } from '../collections/fireMode2';
import { typeData as fireModeToProjectile } from '../collections/fireModeToProjectile';
import { typeData as fireModeType } from '../collections/fireModeType';
import { typeData as image } from '../collections/image';
import { typeData as imageSet } from '../collections/imageSet';
import { typeData as imageSetDefault } from '../collections/imageSetDefault';
import { typeData as item } from '../collections/item';
import { typeData as itemAttachment } from '../collections/itemAttachment';
import { typeData as itemCategory } from '../collections/itemCategory';
import { typeData as itemProfile } from '../collections/itemProfile';
import { typeData as itemToWeapon } from '../collections/itemToWeapon';
import { typeData as itemType } from '../collections/itemType';
import { typeData as loadout } from '../collections/loadout';
import { typeData as mapHex } from '../collections/mapHex';
import { typeData as mapRegion } from '../collections/mapRegion';
import { typeData as marketingBundle } from '../collections/marketingBundle';
import { typeData as marketingBundleItem } from '../collections/marketingBundleItem';
import { typeData as marketingBundleWith1Item } from '../collections/marketingBundleWith1Item';
import { typeData as metagameEvent } from '../collections/metagameEvent';
import { typeData as metagameEventState } from '../collections/metagameEventState';
import { typeData as objective } from '../collections/objective';
import { typeData as objectiveSetToObjective } from '../collections/objectiveSetToObjective';
import { typeData as objectiveType } from '../collections/objectiveType';
import { typeData as playerState } from '../collections/playerState';
import { typeData as playerStateGroup } from '../collections/playerStateGroup';
import { typeData as playerStateGroup2 } from '../collections/playerStateGroup2';
import { typeData as profile } from '../collections/profile';
import { typeData as profile2 } from '../collections/profile2';
import { typeData as profileArmorMap } from '../collections/profileArmorMap';
import { typeData as profileResistMap } from '../collections/profileResistMap';
import { typeData as projectile } from '../collections/projectile';
import { typeData as projectileFlightType } from '../collections/projectileFlightType';
import { typeData as region } from '../collections/region';
import { typeData as resistInfo } from '../collections/resistInfo';
import { typeData as resistType } from '../collections/resistType';
import { typeData as resourceType } from '../collections/resourceType';
import { typeData as reward } from '../collections/reward';
import { typeData as rewardGroupToReward } from '../collections/rewardGroupToReward';
import { typeData as rewardSetToRewardGroup } from '../collections/rewardSetToRewardGroup';
import { typeData as rewardType } from '../collections/rewardType';
import { typeData as skill } from '../collections/skill';
import { typeData as skillCategory } from '../collections/skillCategory';
import { typeData as skillLine } from '../collections/skillLine';
import { typeData as skillSet } from '../collections/skillSet';
import { typeData as targetType } from '../collections/targetType';
import { typeData as title } from '../collections/title';
import { typeData as vehicle } from '../collections/vehicle';
import { typeData as vehicleAttachment } from '../collections/vehicleAttachment';
import { typeData as vehicleFaction } from '../collections/vehicleFaction';
import { typeData as vehicleSkillSet } from '../collections/vehicleSkillSet';
import { typeData as weapon } from '../collections/weapon';
import { typeData as weaponAmmoSlot } from '../collections/weaponAmmoSlot';
import { typeData as weaponDatasheet } from '../collections/weaponDatasheet';
import { typeData as weaponToAttachment } from '../collections/weaponToAttachment';
import { typeData as weaponToFireGroup } from '../collections/weaponToFireGroup';
import { typeData as zone } from '../collections/zone';
import { typeData as zoneEffect } from '../collections/zoneEffect';
import { typeData as zoneEffectType } from '../collections/zoneEffectType';
import { typeData as charactersWorld } from '../collections/charactersWorld';
import { typeData as world } from '../collections/world';
import { typeData as outfit } from '../collections/outfit';
import { typeData as outfitMember } from '../collections/outfitMember';
import { typeData as outfitMemberExtended } from '../collections/outfitMemberExtended';
import { typeData as outfitRank } from '../collections/outfitRank';
import { typeData as charactersOnlineStatus } from '../collections/charactersOnlineStatus';
import { typeData as map } from '../collections/map';
import { typeData as charactersFriend } from '../collections/charactersFriend';
import { typeData as leaderboard } from '../collections/leaderboard';
import { typeData as charactersLeaderboard } from '../collections/charactersLeaderboard';
import { typeData as charactersEventGrouped } from '../collections/charactersEventGrouped';
import { typeData as charactersEvent } from '../collections/charactersEvent';
import { typeData as event } from '../collections/event';
import { typeData as worldEvent } from '../collections/worldEvent';

export default collectionIndex;

type collectionIndex = {
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
