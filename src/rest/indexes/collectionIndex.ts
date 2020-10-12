import { singleCharacterByIdFormat } from '../collections/singleCharacterById';
import { characterFormat } from '../collections/character';
import { characterNameFormat } from '../collections/characterName';
import { charactersAchievementFormat } from '../collections/charactersAchievement';
import { charactersCurrencyFormat } from '../collections/charactersCurrency';
import { charactersDirectiveFormat } from '../collections/charactersDirective';
import { charactersDirectiveObjectiveFormat } from '../collections/charactersDirectiveObjective';
import { charactersDirectiveTierFormat } from '../collections/charactersDirectiveTier';
import { charactersDirectiveTreeFormat } from '../collections/charactersDirectiveTree';
import { charactersSkillFormat } from '../collections/charactersSkill';
import { charactersStatFormat } from '../collections/charactersStat';
import { charactersStatByFactionFormat } from '../collections/charactersStatByFaction';
import { charactersStatHistoryFormat } from '../collections/charactersStatHistory';
import { charactersWeaponStatFormat } from '../collections/charactersWeaponStat';
import { charactersWeaponStatByFactionFormat } from '../collections/charactersWeaponStatByFaction';
import { worldStatHistoryFormat } from '../collections/worldStatHistory';
import { charactersItemFormat } from '../collections/charactersItem';
import { abilityFormat } from '../collections/ability';
import { abilityTypeFormat } from '../collections/abilityType';
import { achievementFormat } from '../collections/achievement';
import { armorFacingFormat } from '../collections/armorFacing';
import { armorInfoFormat } from '../collections/armorInfo';
import { currencyFormat } from '../collections/currency';
import { directiveFormat } from '../collections/directive';
import { directiveTierFormat } from '../collections/directiveTier';
import { directiveTreeFormat } from '../collections/directiveTree';
import { directiveTreeCategoryFormat } from '../collections/directiveTreeCategory';
import { effectFormat } from '../collections/effect';
import { effectTypeFormat } from '../collections/effectType';
import { empireScoresFormat } from '../collections/empireScores';
import { experienceFormat } from '../collections/experience';
import { experienceRankFormat } from '../collections/experienceRank';
import { facilityLinkFormat } from '../collections/facilityLink';
import { facilityTypeFormat } from '../collections/facilityType';
import { factionFormat } from '../collections/faction';
import { fireGroupFormat } from '../collections/fireGroup';
import { fireGroupToFireModeFormat } from '../collections/fireGroupToFireMode';
import { fireModeFormat } from '../collections/fireMode';
import { fireMode2Format } from '../collections/fireMode2';
import { fireModeToProjectileFormat } from '../collections/fireModeToProjectile';
import { fireModeTypeFormat } from '../collections/fireModeType';
import { imageFormat } from '../collections/image';
import { imageSetFormat } from '../collections/imageSet';
import { imageSetDefaultFormat } from '../collections/imageSetDefault';
import { itemFormat } from '../collections/item';
import { itemAttachmentFormat } from '../collections/itemAttachment';
import { itemCategoryFormat } from '../collections/itemCategory';
import { itemProfileFormat } from '../collections/itemProfile';
import { itemToWeaponFormat } from '../collections/itemToWeapon';
import { itemTypeFormat } from '../collections/itemType';
import { loadoutFormat } from '../collections/loadout';
import { mapHexFormat } from '../collections/mapHex';
import { mapRegionFormat } from '../collections/mapRegion';
import { marketingBundleFormat } from '../collections/marketingBundle';
import { marketingBundleItemFormat } from '../collections/marketingBundleItem';
import { marketingBundleWith1ItemFormat } from '../collections/marketingBundleWith1Item';
import { metagameEventFormat } from '../collections/metagameEvent';
import { metagameEventStateFormat } from '../collections/metagameEventState';
import { objectiveFormat } from '../collections/objective';
import { objectiveSetToObjectiveFormat } from '../collections/objectiveSetToObjective';
import { objectiveTypeFormat } from '../collections/objectiveType';
import { playerStateFormat } from '../collections/playerState';
import { playerStateGroupFormat } from '../collections/playerStateGroup';
import { playerStateGroup2Format } from '../collections/playerStateGroup2';
import { profileFormat } from '../collections/profile';
import { profile2Format } from '../collections/profile2';
import { profileArmorMapFormat } from '../collections/profileArmorMap';
import { profileResistMapFormat } from '../collections/profileResistMap';
import { projectileFormat } from '../collections/projectile';
import { projectileFlightTypeFormat } from '../collections/projectileFlightType';
import { regionFormat } from '../collections/region';
import { resistInfoFormat } from '../collections/resistInfo';
import { resistTypeFormat } from '../collections/resistType';
import { resourceTypeFormat } from '../collections/resourceType';
import { rewardFormat } from '../collections/reward';
import { rewardGroupToRewardFormat } from '../collections/rewardGroupToReward';
import { rewardSetToRewardGroupFormat } from '../collections/rewardSetToRewardGroup';
import { rewardTypeFormat } from '../collections/rewardType';
import { skillFormat } from '../collections/skill';
import { skillCategoryFormat } from '../collections/skillCategory';
import { skillLineFormat } from '../collections/skillLine';
import { skillSetFormat } from '../collections/skillSet';
import { targetTypeFormat } from '../collections/targetType';
import { titleFormat } from '../collections/title';
import { vehicleFormat } from '../collections/vehicle';
import { vehicleAttachmentFormat } from '../collections/vehicleAttachment';
import { vehicleFactionFormat } from '../collections/vehicleFaction';
import { vehicleSkillSetFormat } from '../collections/vehicleSkillSet';
import { weaponFormat } from '../collections/weapon';
import { weaponAmmoSlotFormat } from '../collections/weaponAmmoSlot';
import { weaponDatasheetFormat } from '../collections/weaponDatasheet';
import { weaponToAttachmentFormat } from '../collections/weaponToAttachment';
import { weaponToFireGroupFormat } from '../collections/weaponToFireGroup';
import { zoneFormat } from '../collections/zone';
import { zoneEffectFormat } from '../collections/zoneEffect';
import { zoneEffectTypeFormat } from '../collections/zoneEffectType';
import { charactersWorldFormat } from '../collections/charactersWorld';
import { worldFormat } from '../collections/world';
import { outfitFormat } from '../collections/outfit';
import { outfitMemberFormat } from '../collections/outfitMember';
import { outfitMemberExtendedFormat } from '../collections/outfitMemberExtended';
import { outfitRankFormat } from '../collections/outfitRank';
import { charactersOnlineStatusFormat } from '../collections/charactersOnlineStatus';
import { mapFormat } from '../collections/map';
import { charactersFriendFormat } from '../collections/charactersFriend';
import { leaderboardFormat } from '../collections/leaderboard';
import { charactersLeaderboardFormat } from '../collections/charactersLeaderboard';
import { charactersEventGroupedFormat } from '../collections/charactersEventGrouped';
import { charactersEventFormat } from '../collections/charactersEvent';
import { eventFormat } from '../collections/event';
import { worldEventFormat } from '../collections/worldEvent';

export type collectionIndex = {
    single_character_by_id: singleCharacterByIdFormat,
    character: characterFormat,
    character_name: characterNameFormat,
    characters_achievement: charactersAchievementFormat,
    characters_currency: charactersCurrencyFormat,
    characters_directive: charactersDirectiveFormat,
    characters_directive_objective: charactersDirectiveObjectiveFormat,
    characters_directive_tier: charactersDirectiveTierFormat,
    characters_directive_tree: charactersDirectiveTreeFormat,
    characters_skill: charactersSkillFormat,
    characters_stat: charactersStatFormat,
    characters_stat_by_faction: charactersStatByFactionFormat,
    characters_stat_history: charactersStatHistoryFormat,
    characters_weapon_stat: charactersWeaponStatFormat,
    characters_weapon_stat_by_faction: charactersWeaponStatByFactionFormat,
    world_stat_history: worldStatHistoryFormat,
    characters_item: charactersItemFormat,
    ability: abilityFormat,
    ability_type: abilityTypeFormat,
    achievement: achievementFormat,
    armor_facing: armorFacingFormat,
    armor_info: armorInfoFormat,
    currency: currencyFormat,
    directive: directiveFormat,
    directive_tier: directiveTierFormat,
    directive_tree: directiveTreeFormat,
    directive_tree_category: directiveTreeCategoryFormat,
    effect: effectFormat,
    effect_type: effectTypeFormat,
    empire_scores: empireScoresFormat,
    experience: experienceFormat,
    experience_rank: experienceRankFormat,
    facility_link: facilityLinkFormat,
    facility_type: facilityTypeFormat,
    faction: factionFormat,
    fire_group: fireGroupFormat,
    fire_group_to_fire_mode: fireGroupToFireModeFormat,
    fire_mode: fireModeFormat,
    fire_mode_2: fireMode2Format,
    fire_mode_to_projectile: fireModeToProjectileFormat,
    fire_mode_type: fireModeTypeFormat,
    image: imageFormat,
    image_set: imageSetFormat,
    image_set_default: imageSetDefaultFormat,
    item: itemFormat,
    item_attachment: itemAttachmentFormat,
    item_category: itemCategoryFormat,
    item_profile: itemProfileFormat,
    item_to_weapon: itemToWeaponFormat,
    item_type: itemTypeFormat,
    loadout: loadoutFormat,
    map_hex: mapHexFormat,
    map_region: mapRegionFormat,
    marketing_bundle: marketingBundleFormat,
    marketing_bundle_item: marketingBundleItemFormat,
    marketing_bundle_with_1_item: marketingBundleWith1ItemFormat,
    metagame_event: metagameEventFormat,
    metagame_event_state: metagameEventStateFormat,
    objective: objectiveFormat,
    objective_set_to_objective: objectiveSetToObjectiveFormat,
    objective_type: objectiveTypeFormat,
    player_state: playerStateFormat,
    player_state_group: playerStateGroupFormat,
    player_state_group_2: playerStateGroup2Format,
    profile: profileFormat,
    profile_2: profile2Format,
    profile_armor_map: profileArmorMapFormat,
    profile_resist_map: profileResistMapFormat,
    projectile: projectileFormat,
    projectile_flight_type: projectileFlightTypeFormat,
    region: regionFormat,
    resist_info: resistInfoFormat,
    resist_type: resistTypeFormat,
    resource_type: resourceTypeFormat,
    reward: rewardFormat,
    reward_group_to_reward: rewardGroupToRewardFormat,
    reward_set_to_reward_group: rewardSetToRewardGroupFormat,
    reward_type: rewardTypeFormat,
    skill: skillFormat,
    skill_category: skillCategoryFormat,
    skill_line: skillLineFormat,
    skill_set: skillSetFormat,
    target_type: targetTypeFormat,
    title: titleFormat,
    vehicle: vehicleFormat,
    vehicle_attachment: vehicleAttachmentFormat,
    vehicle_faction: vehicleFactionFormat,
    vehicle_skill_set: vehicleSkillSetFormat,
    weapon: weaponFormat,
    weapon_ammo_slot: weaponAmmoSlotFormat,
    weapon_datasheet: weaponDatasheetFormat,
    weapon_to_attachment: weaponToAttachmentFormat,
    weapon_to_fire_group: weaponToFireGroupFormat,
    zone: zoneFormat,
    zone_effect: zoneEffectFormat,
    zone_effect_type: zoneEffectTypeFormat,
    characters_world: charactersWorldFormat,
    world: worldFormat,
    outfit: outfitFormat,
    outfit_member: outfitMemberFormat,
    outfit_member_extended: outfitMemberExtendedFormat,
    outfit_rank: outfitRankFormat,
    characters_online_status: charactersOnlineStatusFormat,
    map: mapFormat,
    characters_friend: charactersFriendFormat,
    leaderboard: leaderboardFormat,
    characters_leaderboard: charactersLeaderboardFormat,
    characters_event_grouped: charactersEventGroupedFormat,
    characters_event: charactersEventFormat,
    event: eventFormat,
    world_event: worldEventFormat,
};
