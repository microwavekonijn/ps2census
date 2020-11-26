import { Ability } from '../collections/ability';
import { AbilityType } from '../collections/abilityType';
import { Achievement } from '../collections/achievement';
import { ArmorFacing } from '../collections/armorFacing';
import { ArmorInfo } from '../collections/armorInfo';
import { Character } from '../collections/character';
import { CharacterName } from '../collections/characterName';
import { CharactersAchievement } from '../collections/charactersAchievement';
import { CharactersCurrency } from '../collections/charactersCurrency';
import { CharactersDirective } from '../collections/charactersDirective';
import { CharactersDirectiveObjective } from '../collections/charactersDirectiveObjective';
import { CharactersDirectiveTier } from '../collections/charactersDirectiveTier';
import { CharactersDirectiveTree } from '../collections/charactersDirectiveTree';
import { CharactersEvent } from '../collections/charactersEvent';
import { CharactersEventGrouped } from '../collections/charactersEventGrouped';
import { CharactersFriend } from '../collections/charactersFriend';
import { CharactersItem } from '../collections/charactersItem';
import { CharactersLeaderboard } from '../collections/charactersLeaderboard';
import { CharactersSkill } from '../collections/charactersSkill';
import { CharactersOnlineStatus } from '../collections/charactersOnlineStatus';
import { CharactersStat } from '../collections/charactersStat';
import { CharactersStatByFaction } from '../collections/charactersStatByFaction';
import { CharactersStatHistory } from '../collections/charactersStatHistory';
import { CharactersWeaponStat } from '../collections/charactersWeaponStat';
import { CharactersWeaponStatByFaction } from '../collections/charactersWeaponStatByFaction';
import { CharactersWorld } from '../collections/charactersWorld';
import { Currency } from '../collections/currency';
import { Directive } from '../collections/directive';
import { DirectiveTier } from '../collections/directiveTier';
import { DirectiveTree } from '../collections/directiveTree';
import { DirectiveTreeCategory } from '../collections/directiveTreeCategory';
import { Effect } from '../collections/effect';
import { EffectType } from '../collections/effectType';
import { EmpireScores } from '../collections/empireScores';
import { Event } from '../collections/event';
import { Experience } from '../collections/experience';
import { ExperienceRank } from '../collections/experienceRank';
import { FireGroupToFireMode } from '../collections/fireGroupToFireMode';
import { FireGroup } from '../collections/fireGroup';
import { Faction } from '../collections/faction';
import { FacilityLink } from '../collections/facilityLink';
import { FacilityType } from '../collections/facilityType';
import { FireMode } from '../collections/fireMode';
import { FireMode2 } from '../collections/fireMode2';
import { FireModeToProjectile } from '../collections/fireModeToProjectile';
import { FireModeType } from '../collections/fireModeType';
import { Image } from '../collections/image';
import { ImageSet } from '../collections/imageSet';
import { ImageSetDefault } from '../collections/imageSetDefault';
import { Item } from '../collections/item';
import { ItemProfile } from '../collections/itemProfile';
import { ItemToWeapon } from '../collections/itemToWeapon';
import { ItemCategory } from '../collections/itemCategory';
import { ItemAttachment } from '../collections/itemAttachment';
import { ItemType } from '../collections/itemType';
import { Leaderboard } from '../collections/leaderboard';
import { Loadout } from '../collections/loadout';
import { Map } from '../collections/map';
import { MapHex } from '../collections/mapHex';
import { MapRegion } from '../collections/mapRegion';
import { MarketingBundle } from '../collections/marketingBundle';
import { MarketingBundleItem } from '../collections/marketingBundleItem';
import { MarketingBundleWith1Item } from '../collections/marketingBundleWith1Item';
import { MetagameEvent } from '../collections/metagameEvent';
import { MetagameEventState } from '../collections/metagameEventState';
import { Objective } from '../collections/objective';
import { ObjectiveSetToObjective } from '../collections/objectiveSetToObjective';
import { ObjectiveType } from '../collections/objectiveType';
import { Outfit } from '../collections/outfit';
import { OutfitMember } from '../collections/outfitMember';
import { OutfitMemberExtended } from '../collections/outfitMemberExtended';
import { OutfitRank } from '../collections/outfitRank';
import { PlayerState } from '../collections/playerState';
import { PlayerStateGroup } from '../collections/playerStateGroup';
import { PlayerStateGroup2 } from '../collections/playerStateGroup2';
import { Profile } from '../collections/profile';
import { Profile2 } from '../collections/profile2';
import { ProfileArmorMap } from '../collections/profileArmorMap';
import { ProfileResistMap } from '../collections/profileResistMap';
import { Projectile } from '../collections/projectile';
import { ProjectileFlightType } from '../collections/projectileFlightType';
import { Region } from '../collections/region';
import { ResistInfo } from '../collections/resistInfo';
import { ResistType } from '../collections/resistType';
import { ResourceType } from '../collections/resourceType';
import { Reward } from '../collections/reward';
import { RewardGroupToReward } from '../collections/rewardGroupToReward';
import { RewardSetToRewardGroup } from '../collections/rewardSetToRewardGroup';
import { RewardType } from '../collections/rewardType';
import { SingleCharacterById } from '../collections/singleCharacterById';
import { Skill } from '../collections/skill';
import { SkillCategory } from '../collections/skillCategory';
import { SkillLine } from '../collections/skillLine';
import { SkillSet } from '../collections/skillSet';
import { TargetType } from '../collections/targetType';
import { Title } from '../collections/title';
import { Vehicle } from '../collections/vehicle';
import { VehicleAttachment } from '../collections/vehicleAttachment';
import { VehicleFaction } from '../collections/vehicleFaction';
import { VehicleSkillSet } from '../collections/vehicleSkillSet';
import { Weapon } from '../collections/weapon';
import { WeaponAmmoSlot } from '../collections/weaponAmmoSlot';
import { WeaponDatasheet } from '../collections/weaponDatasheet';
import { WeaponToAttachment } from '../collections/weaponToAttachment';
import { WeaponToFireGroup } from '../collections/weaponToFireGroup';
import { World } from '../collections/world';
import { WorldEvent } from '../collections/worldEvent';
import { WorldStatHistory } from '../collections/worldStatHistory';
import { Zone } from '../collections/zone';
import { ZoneEffect } from '../collections/zoneEffect';
import { ZoneEffectType } from '../collections/zoneEffectType';

export type Collections =
    | Ability
    | AbilityType
    | Achievement
    | ArmorFacing
    | ArmorInfo
    | Character
    | CharacterName
    | CharactersAchievement
    | CharactersCurrency
    | CharactersDirective
    | CharactersDirectiveObjective
    | CharactersDirectiveTier
    | CharactersDirectiveTree
    | CharactersEvent
    | CharactersEventGrouped
    | CharactersFriend
    | CharactersItem
    | CharactersLeaderboard
    | CharactersOnlineStatus
    | CharactersSkill
    | CharactersStat
    | CharactersStatByFaction
    | CharactersStatHistory
    | CharactersWeaponStat
    | CharactersWeaponStatByFaction
    | CharactersWorld
    | Currency
    | Directive
    | DirectiveTier
    | DirectiveTree
    | DirectiveTreeCategory
    | Effect
    | EffectType
    | EmpireScores
    | Event
    | Experience
    | ExperienceRank
    | FacilityLink
    | FacilityType
    | Faction
    | FireGroup
    | FireGroupToFireMode
    | FireMode
    | FireMode2
    | FireModeToProjectile
    | FireModeType
    | Image
    | ImageSet
    | ImageSetDefault
    | Item
    | ItemAttachment
    | ItemCategory
    | ItemProfile
    | ItemToWeapon
    | ItemType
    | Leaderboard
    | Loadout
    | Map
    | MapHex
    | MapRegion
    | MarketingBundle
    | MarketingBundleItem
    | MarketingBundleWith1Item
    | MetagameEvent
    | MetagameEventState
    | Objective
    | ObjectiveSetToObjective
    | ObjectiveType
    | Outfit
    | OutfitMember
    | OutfitMemberExtended
    | OutfitRank
    | PlayerState
    | PlayerStateGroup
    | PlayerStateGroup2
    | Profile
    | Profile2
    | ProfileArmorMap
    | ProfileResistMap
    | Projectile
    | ProjectileFlightType
    | Region
    | ResistInfo
    | ResistType
    | ResourceType
    | Reward
    | RewardGroupToReward
    | RewardSetToRewardGroup
    | RewardType
    | SingleCharacterById
    | Skill
    | SkillCategory
    | SkillLine
    | SkillSet
    | TargetType
    | Title
    | Vehicle
    | VehicleAttachment
    | VehicleFaction
    | VehicleSkillSet
    | Weapon
    | WeaponAmmoSlot
    | WeaponDatasheet
    | WeaponToAttachment
    | WeaponToFireGroup
    | World
    | WorldEvent
    | WorldStatHistory
    | Zone
    | ZoneEffect
    | ZoneEffectType;

export type CollectionsMap = {
    [K in Collections['collection']]: Extract<Collections, { collection: K }>
};
