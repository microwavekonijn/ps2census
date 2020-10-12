import { singleCharacterByIdQuery } from '../collections/singleCharacterById';
import { characterQuery } from '../collections/character';
import { characterNameQuery } from '../collections/characterName';
import { charactersAchievementQuery } from '../collections/charactersAchievement';
import { charactersCurrencyQuery } from '../collections/charactersCurrency';
import { charactersDirectiveQuery } from '../collections/charactersDirective';
import { charactersDirectiveObjectiveQuery } from '../collections/charactersDirectiveObjective';
import { charactersDirectiveTierQuery } from '../collections/charactersDirectiveTier';
import { charactersDirectiveTreeQuery } from '../collections/charactersDirectiveTree';
import { charactersSkillQuery } from '../collections/charactersSkill';
import { charactersStatQuery } from '../collections/charactersStat';
import { charactersStatByFactionQuery } from '../collections/charactersStatByFaction';
import { charactersStatHistoryQuery } from '../collections/charactersStatHistory';
import { charactersWeaponStatQuery } from '../collections/charactersWeaponStat';
import { charactersWeaponStatByFactionQuery } from '../collections/charactersWeaponStatByFaction';
import { worldStatHistoryQuery } from '../collections/worldStatHistory';
import { charactersItemQuery } from '../collections/charactersItem';
import { abilityQuery } from '../collections/ability';
import { abilityTypeQuery } from '../collections/abilityType';
import { achievementQuery } from '../collections/achievement';
import { armorFacingQuery } from '../collections/armorFacing';
import { armorInfoQuery } from '../collections/armorInfo';
import { currencyQuery } from '../collections/currency';
import { directiveQuery } from '../collections/directive';
import { directiveTierQuery } from '../collections/directiveTier';
import { directiveTreeQuery } from '../collections/directiveTree';
import { directiveTreeCategoryQuery } from '../collections/directiveTreeCategory';
import { effectQuery } from '../collections/effect';
import { effectTypeQuery } from '../collections/effectType';
import { empireScoresQuery } from '../collections/empireScores';
import { experienceQuery } from '../collections/experience';
import { experienceRankQuery } from '../collections/experienceRank';
import { facilityLinkQuery } from '../collections/facilityLink';
import { facilityTypeQuery } from '../collections/facilityType';
import { factionQuery } from '../collections/faction';
import { fireGroupQuery } from '../collections/fireGroup';
import { fireGroupToFireModeQuery } from '../collections/fireGroupToFireMode';
import { fireModeQuery } from '../collections/fireMode';
import { fireMode2Query } from '../collections/fireMode2';
import { fireModeToProjectileQuery } from '../collections/fireModeToProjectile';
import { fireModeTypeQuery } from '../collections/fireModeType';
import { imageQuery } from '../collections/image';
import { imageSetQuery } from '../collections/imageSet';
import { imageSetDefaultQuery } from '../collections/imageSetDefault';
import { itemQuery } from '../collections/item';
import { itemAttachmentQuery } from '../collections/itemAttachment';
import { itemCategoryQuery } from '../collections/itemCategory';
import { itemProfileQuery } from '../collections/itemProfile';
import { itemToWeaponQuery } from '../collections/itemToWeapon';
import { itemTypeQuery } from '../collections/itemType';
import { loadoutQuery } from '../collections/loadout';
import { mapHexQuery } from '../collections/mapHex';
import { mapRegionQuery } from '../collections/mapRegion';
import { marketingBundleQuery } from '../collections/marketingBundle';
import { marketingBundleItemQuery } from '../collections/marketingBundleItem';
import { marketingBundleWith1ItemQuery } from '../collections/marketingBundleWith1Item';
import { metagameEventQuery } from '../collections/metagameEvent';
import { metagameEventStateQuery } from '../collections/metagameEventState';
import { objectiveQuery } from '../collections/objective';
import { objectiveSetToObjectiveQuery } from '../collections/objectiveSetToObjective';
import { objectiveTypeQuery } from '../collections/objectiveType';
import { playerStateQuery } from '../collections/playerState';
import { playerStateGroupQuery } from '../collections/playerStateGroup';
import { playerStateGroup2Query } from '../collections/playerStateGroup2';
import { profileQuery } from '../collections/profile';
import { profile2Query } from '../collections/profile2';
import { profileArmorMapQuery } from '../collections/profileArmorMap';
import { profileResistMapQuery } from '../collections/profileResistMap';
import { projectileQuery } from '../collections/projectile';
import { projectileFlightTypeQuery } from '../collections/projectileFlightType';
import { regionQuery } from '../collections/region';
import { resistInfoQuery } from '../collections/resistInfo';
import { resistTypeQuery } from '../collections/resistType';
import { resourceTypeQuery } from '../collections/resourceType';
import { rewardQuery } from '../collections/reward';
import { rewardGroupToRewardQuery } from '../collections/rewardGroupToReward';
import { rewardSetToRewardGroupQuery } from '../collections/rewardSetToRewardGroup';
import { rewardTypeQuery } from '../collections/rewardType';
import { skillQuery } from '../collections/skill';
import { skillCategoryQuery } from '../collections/skillCategory';
import { skillLineQuery } from '../collections/skillLine';
import { skillSetQuery } from '../collections/skillSet';
import { targetTypeQuery } from '../collections/targetType';
import { titleQuery } from '../collections/title';
import { vehicleQuery } from '../collections/vehicle';
import { vehicleAttachmentQuery } from '../collections/vehicleAttachment';
import { vehicleFactionQuery } from '../collections/vehicleFaction';
import { vehicleSkillSetQuery } from '../collections/vehicleSkillSet';
import { weaponQuery } from '../collections/weapon';
import { weaponAmmoSlotQuery } from '../collections/weaponAmmoSlot';
import { weaponDatasheetQuery } from '../collections/weaponDatasheet';
import { weaponToAttachmentQuery } from '../collections/weaponToAttachment';
import { weaponToFireGroupQuery } from '../collections/weaponToFireGroup';
import { zoneQuery } from '../collections/zone';
import { zoneEffectQuery } from '../collections/zoneEffect';
import { zoneEffectTypeQuery } from '../collections/zoneEffectType';
import { charactersWorldQuery } from '../collections/charactersWorld';
import { worldQuery } from '../collections/world';
import { outfitQuery } from '../collections/outfit';
import { outfitMemberQuery } from '../collections/outfitMember';
import { outfitMemberExtendedQuery } from '../collections/outfitMemberExtended';
import { outfitRankQuery } from '../collections/outfitRank';
import { charactersOnlineStatusQuery } from '../collections/charactersOnlineStatus';
import { mapQuery } from '../collections/map';
import { charactersFriendQuery } from '../collections/charactersFriend';
import { leaderboardQuery } from '../collections/leaderboard';
import { charactersLeaderboardQuery } from '../collections/charactersLeaderboard';
import { charactersEventGroupedQuery } from '../collections/charactersEventGrouped';
import { charactersEventQuery } from '../collections/charactersEvent';
import { eventQuery } from '../collections/event';
import { worldEventQuery } from '../collections/worldEvent';

export type queryIndex = {
    single_character_by_id: singleCharacterByIdQuery,
    character: characterQuery,
    character_name: characterNameQuery,
    characters_achievement: charactersAchievementQuery,
    characters_currency: charactersCurrencyQuery,
    characters_directive: charactersDirectiveQuery,
    characters_directive_objective: charactersDirectiveObjectiveQuery,
    characters_directive_tier: charactersDirectiveTierQuery,
    characters_directive_tree: charactersDirectiveTreeQuery,
    characters_skill: charactersSkillQuery,
    characters_stat: charactersStatQuery,
    characters_stat_by_faction: charactersStatByFactionQuery,
    characters_stat_history: charactersStatHistoryQuery,
    characters_weapon_stat: charactersWeaponStatQuery,
    characters_weapon_stat_by_faction: charactersWeaponStatByFactionQuery,
    world_stat_history: worldStatHistoryQuery,
    characters_item: charactersItemQuery,
    ability: abilityQuery,
    ability_type: abilityTypeQuery,
    achievement: achievementQuery,
    armor_facing: armorFacingQuery,
    armor_info: armorInfoQuery,
    currency: currencyQuery,
    directive: directiveQuery,
    directive_tier: directiveTierQuery,
    directive_tree: directiveTreeQuery,
    directive_tree_category: directiveTreeCategoryQuery,
    effect: effectQuery,
    effect_type: effectTypeQuery,
    empire_scores: empireScoresQuery,
    experience: experienceQuery,
    experience_rank: experienceRankQuery,
    facility_link: facilityLinkQuery,
    facility_type: facilityTypeQuery,
    faction: factionQuery,
    fire_group: fireGroupQuery,
    fire_group_to_fire_mode: fireGroupToFireModeQuery,
    fire_mode: fireModeQuery,
    fire_mode_2: fireMode2Query,
    fire_mode_to_projectile: fireModeToProjectileQuery,
    fire_mode_type: fireModeTypeQuery,
    image: imageQuery,
    image_set: imageSetQuery,
    image_set_default: imageSetDefaultQuery,
    item: itemQuery,
    item_attachment: itemAttachmentQuery,
    item_category: itemCategoryQuery,
    item_profile: itemProfileQuery,
    item_to_weapon: itemToWeaponQuery,
    item_type: itemTypeQuery,
    loadout: loadoutQuery,
    map_hex: mapHexQuery,
    map_region: mapRegionQuery,
    marketing_bundle: marketingBundleQuery,
    marketing_bundle_item: marketingBundleItemQuery,
    marketing_bundle_with_1_item: marketingBundleWith1ItemQuery,
    metagame_event: metagameEventQuery,
    metagame_event_state: metagameEventStateQuery,
    objective: objectiveQuery,
    objective_set_to_objective: objectiveSetToObjectiveQuery,
    objective_type: objectiveTypeQuery,
    player_state: playerStateQuery,
    player_state_group: playerStateGroupQuery,
    player_state_group_2: playerStateGroup2Query,
    profile: profileQuery,
    profile_2: profile2Query,
    profile_armor_map: profileArmorMapQuery,
    profile_resist_map: profileResistMapQuery,
    projectile: projectileQuery,
    projectile_flight_type: projectileFlightTypeQuery,
    region: regionQuery,
    resist_info: resistInfoQuery,
    resist_type: resistTypeQuery,
    resource_type: resourceTypeQuery,
    reward: rewardQuery,
    reward_group_to_reward: rewardGroupToRewardQuery,
    reward_set_to_reward_group: rewardSetToRewardGroupQuery,
    reward_type: rewardTypeQuery,
    skill: skillQuery,
    skill_category: skillCategoryQuery,
    skill_line: skillLineQuery,
    skill_set: skillSetQuery,
    target_type: targetTypeQuery,
    title: titleQuery,
    vehicle: vehicleQuery,
    vehicle_attachment: vehicleAttachmentQuery,
    vehicle_faction: vehicleFactionQuery,
    vehicle_skill_set: vehicleSkillSetQuery,
    weapon: weaponQuery,
    weapon_ammo_slot: weaponAmmoSlotQuery,
    weapon_datasheet: weaponDatasheetQuery,
    weapon_to_attachment: weaponToAttachmentQuery,
    weapon_to_fire_group: weaponToFireGroupQuery,
    zone: zoneQuery,
    zone_effect: zoneEffectQuery,
    zone_effect_type: zoneEffectTypeQuery,
    characters_world: charactersWorldQuery,
    world: worldQuery,
    outfit: outfitQuery,
    outfit_member: outfitMemberQuery,
    outfit_member_extended: outfitMemberExtendedQuery,
    outfit_rank: outfitRankQuery,
    characters_online_status: charactersOnlineStatusQuery,
    map: mapQuery,
    characters_friend: charactersFriendQuery,
    leaderboard: leaderboardQuery,
    characters_leaderboard: charactersLeaderboardQuery,
    characters_event_grouped: charactersEventGroupedQuery,
    characters_event: charactersEventQuery,
    event: eventQuery,
    world_event: worldEventQuery,
};
