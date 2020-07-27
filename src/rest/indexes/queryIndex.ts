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
    singleCharacterById: singleCharacterById,
    character: character,
    characterName: characterName,
    charactersAchievement: charactersAchievement,
    charactersCurrency: charactersCurrency,
    charactersDirective: charactersDirective,
    charactersDirectiveObjective: charactersDirectiveObjective,
    charactersDirectiveTier: charactersDirectiveTier,
    charactersDirectiveTree: charactersDirectiveTree,
    charactersSkill: charactersSkill,
    charactersStat: charactersStat,
    charactersStatByFaction: charactersStatByFaction,
    charactersStatHistory: charactersStatHistory,
    charactersWeaponStat: charactersWeaponStat,
    charactersWeaponStatByFaction: charactersWeaponStatByFaction,
    worldStatHistory: worldStatHistory,
    charactersItem: charactersItem,
    ability: ability,
    abilityType: abilityType,
    achievement: achievement,
    armorFacing: armorFacing,
    armorInfo: armorInfo,
    currency: currency,
    directive: directive,
    directiveTier: directiveTier,
    directiveTree: directiveTree,
    directiveTreeCategory: directiveTreeCategory,
    effect: effect,
    effectType: effectType,
    empireScores: empireScores,
    experience: experience,
    experienceRank: experienceRank,
    facilityLink: facilityLink,
    facilityType: facilityType,
    faction: faction,
    fireGroup: fireGroup,
    fireGroupToFireMode: fireGroupToFireMode,
    fireMode: fireMode,
    fireMode2: fireMode2,
    fireModeToProjectile: fireModeToProjectile,
    fireModeType: fireModeType,
    image: image,
    imageSet: imageSet,
    imageSetDefault: imageSetDefault,
    item: item,
    itemAttachment: itemAttachment,
    itemCategory: itemCategory,
    itemProfile: itemProfile,
    itemToWeapon: itemToWeapon,
    itemType: itemType,
    loadout: loadout,
    mapHex: mapHex,
    mapRegion: mapRegion,
    marketingBundle: marketingBundle,
    marketingBundleItem: marketingBundleItem,
    marketingBundleWith1Item: marketingBundleWith1Item,
    metagameEvent: metagameEvent,
    metagameEventState: metagameEventState,
    objective: objective,
    objectiveSetToObjective: objectiveSetToObjective,
    objectiveType: objectiveType,
    playerState: playerState,
    playerStateGroup: playerStateGroup,
    playerStateGroup2: playerStateGroup2,
    profile: profile,
    profile2: profile2,
    profileArmorMap: profileArmorMap,
    profileResistMap: profileResistMap,
    projectile: projectile,
    projectileFlightType: projectileFlightType,
    region: region,
    resistInfo: resistInfo,
    resistType: resistType,
    resourceType: resourceType,
    reward: reward,
    rewardGroupToReward: rewardGroupToReward,
    rewardSetToRewardGroup: rewardSetToRewardGroup,
    rewardType: rewardType,
    skill: skill,
    skillCategory: skillCategory,
    skillLine: skillLine,
    skillSet: skillSet,
    targetType: targetType,
    title: title,
    vehicle: vehicle,
    vehicleAttachment: vehicleAttachment,
    vehicleFaction: vehicleFaction,
    vehicleSkillSet: vehicleSkillSet,
    weapon: weapon,
    weaponAmmoSlot: weaponAmmoSlot,
    weaponDatasheet: weaponDatasheet,
    weaponToAttachment: weaponToAttachment,
    weaponToFireGroup: weaponToFireGroup,
    zone: zone,
    zoneEffect: zoneEffect,
    zoneEffectType: zoneEffectType,
    charactersWorld: charactersWorld,
    world: world,
    outfit: outfit,
    outfitMember: outfitMember,
    outfitMemberExtended: outfitMemberExtended,
    outfitRank: outfitRank,
    charactersOnlineStatus: charactersOnlineStatus,
    map: map,
    charactersFriend: charactersFriend,
    leaderboard: leaderboard,
    charactersLeaderboard: charactersLeaderboard,
    charactersEventGrouped: charactersEventGrouped,
    charactersEvent: charactersEvent,
    event: event,
    worldEvent: worldEvent,
};
