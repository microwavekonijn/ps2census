import { typeData as singleCharacterById } from './collections/singleCharacterById';
import { typeData as character } from './collections/character';
import { typeData as characterName } from './collections/characterName';
import { typeData as charactersAchievement } from './collections/charactersAchievement';
import { typeData as charactersCurrency } from './collections/charactersCurrency';
import { typeData as charactersDirective } from './collections/charactersDirective';
import { typeData as charactersDirectiveObjective } from './collections/charactersDirectiveObjective';
import { typeData as charactersDirectiveTier } from './collections/charactersDirectiveTier';
import { typeData as charactersDirectiveTree } from './collections/charactersDirectiveTree';
import { typeData as charactersSkill } from './collections/charactersSkill';
import { typeData as charactersStat } from './collections/charactersStat';
import { typeData as charactersStatByFaction } from './collections/charactersStatByFaction';
import { typeData as charactersStatHistory } from './collections/charactersStatHistory';
import { typeData as charactersWeaponStat } from './collections/charactersWeaponStat';
import { typeData as charactersWeaponStatByFaction } from './collections/charactersWeaponStatByFaction';
import { typeData as worldStatHistory } from './collections/worldStatHistory';
import { typeData as charactersItem } from './collections/charactersItem';
import { typeData as ability } from './collections/ability';
import { typeData as abilityType } from './collections/abilityType';
import { typeData as achievement } from './collections/achievement';
import { typeData as armorFacing } from './collections/armorFacing';
import { typeData as armorInfo } from './collections/armorInfo';
import { typeData as currency } from './collections/currency';
import { typeData as directive } from './collections/directive';
import { typeData as directiveTier } from './collections/directiveTier';
import { typeData as directiveTree } from './collections/directiveTree';
import { typeData as directiveTreeCategory } from './collections/directiveTreeCategory';
import { typeData as effect } from './collections/effect';
import { typeData as effectType } from './collections/effectType';
import { typeData as empireScores } from './collections/empireScores';
import { typeData as experience } from './collections/experience';
import { typeData as experienceRank } from './collections/experienceRank';
import { typeData as facilityLink } from './collections/facilityLink';
import { typeData as facilityType } from './collections/facilityType';
import { typeData as faction } from './collections/faction';
import { typeData as fireGroup } from './collections/fireGroup';
import { typeData as fireGroupToFireMode } from './collections/fireGroupToFireMode';
import { typeData as fireMode } from './collections/fireMode';
import { typeData as fireMode2 } from './collections/fireMode2';
import { typeData as fireModeToProjectile } from './collections/fireModeToProjectile';
import { typeData as fireModeType } from './collections/fireModeType';
import { typeData as image } from './collections/image';
import { typeData as imageSet } from './collections/imageSet';
import { typeData as imageSetDefault } from './collections/imageSetDefault';
import { typeData as item } from './collections/item';
import { typeData as itemAttachment } from './collections/itemAttachment';
import { typeData as itemCategory } from './collections/itemCategory';
import { typeData as itemProfile } from './collections/itemProfile';
import { typeData as itemToWeapon } from './collections/itemToWeapon';
import { typeData as itemType } from './collections/itemType';
import { typeData as loadout } from './collections/loadout';
import { typeData as mapHex } from './collections/mapHex';
import { typeData as mapRegion } from './collections/mapRegion';
import { typeData as marketingBundle } from './collections/marketingBundle';
import { typeData as marketingBundleItem } from './collections/marketingBundleItem';
import { typeData as marketingBundleWith1Item } from './collections/marketingBundleWith1Item';
import { typeData as metagameEvent } from './collections/metagameEvent';
import { typeData as metagameEventState } from './collections/metagameEventState';
import { typeData as objective } from './collections/objective';
import { typeData as objectiveSetToObjective } from './collections/objectiveSetToObjective';
import { typeData as objectiveType } from './collections/objectiveType';
import { typeData as playerState } from './collections/playerState';
import { typeData as playerStateGroup } from './collections/playerStateGroup';
import { typeData as playerStateGroup2 } from './collections/playerStateGroup2';
import { typeData as profile } from './collections/profile';
import { typeData as profile2 } from './collections/profile2';
import { typeData as profileArmorMap } from './collections/profileArmorMap';
import { typeData as profileResistMap } from './collections/profileResistMap';
import { typeData as projectile } from './collections/projectile';
import { typeData as projectileFlightType } from './collections/projectileFlightType';
import { typeData as region } from './collections/region';
import { typeData as resistInfo } from './collections/resistInfo';
import { typeData as resistType } from './collections/resistType';
import { typeData as resourceType } from './collections/resourceType';
import { typeData as reward } from './collections/reward';
import { typeData as rewardGroupToReward } from './collections/rewardGroupToReward';
import { typeData as rewardSetToRewardGroup } from './collections/rewardSetToRewardGroup';
import { typeData as rewardType } from './collections/rewardType';
import { typeData as skill } from './collections/skill';
import { typeData as skillCategory } from './collections/skillCategory';
import { typeData as skillLine } from './collections/skillLine';
import { typeData as skillSet } from './collections/skillSet';
import { typeData as targetType } from './collections/targetType';
import { typeData as title } from './collections/title';
import { typeData as vehicle } from './collections/vehicle';
import { typeData as vehicleAttachment } from './collections/vehicleAttachment';
import { typeData as vehicleFaction } from './collections/vehicleFaction';
import { typeData as vehicleSkillSet } from './collections/vehicleSkillSet';
import { typeData as weapon } from './collections/weapon';
import { typeData as weaponAmmoSlot } from './collections/weaponAmmoSlot';
import { typeData as weaponDatasheet } from './collections/weaponDatasheet';
import { typeData as weaponToAttachment } from './collections/weaponToAttachment';
import { typeData as weaponToFireGroup } from './collections/weaponToFireGroup';
import { typeData as zone } from './collections/zone';
import { typeData as zoneEffect } from './collections/zoneEffect';
import { typeData as zoneEffectType } from './collections/zoneEffectType';
import { typeData as charactersWorld } from './collections/charactersWorld';
import { typeData as world } from './collections/world';
import { typeData as outfit } from './collections/outfit';
import { typeData as outfitMember } from './collections/outfitMember';
import { typeData as outfitMemberExtended } from './collections/outfitMemberExtended';
import { typeData as outfitRank } from './collections/outfitRank';
import { typeData as charactersOnlineStatus } from './collections/charactersOnlineStatus';
import { typeData as map } from './collections/map';
import { typeData as charactersFriend } from './collections/charactersFriend';
import { typeData as leaderboard } from './collections/leaderboard';
import { typeData as charactersLeaderboard } from './collections/charactersLeaderboard';
import { typeData as charactersEventGrouped } from './collections/charactersEventGrouped';
import { typeData as charactersEvent } from './collections/charactersEvent';
import { typeData as event } from './collections/event';
import { typeData as worldEvent } from './collections/worldEvent';

export default typeIndex;

type typeIndex = {
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
