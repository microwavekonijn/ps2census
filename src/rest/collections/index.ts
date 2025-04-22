import { Ability } from './Ability';
import { AbilityType } from './AbilityType';
import { ArmorInfo } from './ArmorInfo';
import { Character } from './Character';
import { CharacterName } from './CharacterName';
import { CharactersAchievement } from './CharactersAchievement';
import { Achievement } from './Achievement';
import { CharactersCurrency } from './CharactersCurrency';
import { ArmorFacing } from './ArmorFacing';
import { CharactersDirectiveTree } from './CharactersDirectiveTree';
import { CharactersEvent } from './CharactersEvent';
import { CharactersFriend } from './CharactersFriend';
import { CharactersItem } from './CharactersItem';
import { CharactersLeaderboard } from './CharactersLeaderboard';
import { CharactersEventGrouped } from './CharactersEventGrouped';
import { CharactersOnlineStatus } from './CharactersOnlineStatus';
import { CharactersSkill } from './CharactersSkill';
import { CharactersStat } from './CharactersStat';
import { CharactersStatByFaction } from './CharactersStatByFaction';
import { CharactersDirective } from './CharactersDirective';
import { CharactersWeaponStat } from './CharactersWeaponStat';
import { CharactersWeaponStatByFaction } from './CharactersWeaponStatByFaction';
import { Currency } from './Currency';
import { Directive } from './Directive';
import { DirectiveTier } from './DirectiveTier';
import { DirectiveTreeCategory } from './DirectiveTreeCategory';
import { CharactersWorld } from './CharactersWorld';
import { DirectiveTree } from './DirectiveTree';
import { Effect } from './Effect';
import { EffectType } from './EffectType';
import { Event } from './Event';
import { EmpireScores } from './EmpireScores';
import { Experience } from './Experience';
import { FacilityLink } from './FacilityLink';
import { FacilityType } from './FacilityType';
import { Fish } from './Fish';
import { CharactersDirectiveObjective } from './CharactersDirectiveObjective';
import { FireGroup } from './FireGroup';
import { CharactersDirectiveTier } from './CharactersDirectiveTier';
import { FireMode2 } from './FireMode2';
import { FireModeToProjectile } from './FireModeToProjectile';
import { CharactersStatHistory } from './CharactersStatHistory';
import { FireMode } from './FireMode';
import { Image } from './Image';
import { ImageSet } from './ImageSet';
import { ImageSetDefault } from './ImageSetDefault';
import { FireModeType } from './FireModeType';
import { ItemCategory } from './ItemCategory';
import { Item } from './Item';
import { ItemProfile } from './ItemProfile';
import { ItemAttachment } from './ItemAttachment';
import { ItemToWeapon } from './ItemToWeapon';
import { Map } from './Map';
import { MapHex } from './MapHex';
import { MapRegion } from './MapRegion';
import { MarketingBundle } from './MarketingBundle';
import { MarketingBundleItem } from './MarketingBundleItem';
import { ItemType } from './ItemType';
import { MarketingBundleWith1Item } from './MarketingBundleWith1Item';
import { MetagameEvent } from './MetagameEvent';
import { Loadout } from './Loadout';
import { Leaderboard } from './Leaderboard';
import { Objective } from './Objective';
import { ObjectiveSetToObjective } from './ObjectiveSetToObjective';
import { OutfitMember } from './OutfitMember';
import { ObjectiveType } from './ObjectiveType';
import { Outfit } from './Outfit';
import { OutfitRank } from './OutfitRank';
import { PlayerState } from './PlayerState';
import { MetagameEventState } from './MetagameEventState';
import { OutfitMemberExtended } from './OutfitMemberExtended';
import { Profile2 } from './Profile2';
import { ProfileArmorMap } from './ProfileArmorMap';
import { ProfileResistMap } from './ProfileResistMap';
import { Projectile } from './Projectile';
import { ProjectileFlightType } from './ProjectileFlightType';
import { Region } from './Region';
import { ResistInfo } from './ResistInfo';
import { Profile } from './Profile';
import { PlayerStateGroup } from './PlayerStateGroup';
import { ResistType } from './ResistType';
import { ResourceType } from './ResourceType';
import { Reward } from './Reward';
import { RewardType } from './RewardType';
import { RewardGroupToReward } from './RewardGroupToReward';
import { PlayerStateGroup2 } from './PlayerStateGroup2';
import { Skill } from './Skill';
import { SkillCategory } from './SkillCategory';
import { SkillLine } from './SkillLine';
import { RewardSetToRewardGroup } from './RewardSetToRewardGroup';
import { SkillSet } from './SkillSet';
import { Title } from './Title';
import { Vehicle } from './Vehicle';
import { VehicleAttachment } from './VehicleAttachment';
import { VehicleFaction } from './VehicleFaction';
import { VehicleSkillSet } from './VehicleSkillSet';
import { Weapon } from './Weapon';
import { WeaponAmmoSlot } from './WeaponAmmoSlot';
import { ExperienceRank } from './ExperienceRank';
import { SingleCharacterById } from './SingleCharacterById';
import { WeaponToAttachment } from './WeaponToAttachment';
import { WeaponDatasheet } from './WeaponDatasheet';
import { WorldEvent } from './WorldEvent';
import { World } from './World';
import { Zone } from './Zone';
import { TargetType } from './TargetType';
import { ZoneEffectType } from './ZoneEffectType';
import { Faction } from './Faction';
import { ZoneEffect } from './ZoneEffect';
import { WorldStatHistory } from './WorldStatHistory';
import { FireGroupToFireMode } from './FireGroupToFireMode';
import { WeaponToFireGroup } from './WeaponToFireGroup';

export type Collections =
  | Ability
  | AbilityType
  | ArmorInfo
  | Character
  | CharacterName
  | CharactersAchievement
  | Achievement
  | CharactersCurrency
  | ArmorFacing
  | CharactersDirectiveTree
  | CharactersEvent
  | CharactersFriend
  | CharactersItem
  | CharactersLeaderboard
  | CharactersEventGrouped
  | CharactersOnlineStatus
  | CharactersSkill
  | CharactersStat
  | CharactersStatByFaction
  | CharactersDirective
  | CharactersWeaponStat
  | CharactersWeaponStatByFaction
  | Currency
  | Directive
  | DirectiveTier
  | DirectiveTreeCategory
  | CharactersWorld
  | DirectiveTree
  | Effect
  | EffectType
  | Event
  | EmpireScores
  | Experience
  | FacilityLink
  | FacilityType
  | Fish
  | CharactersDirectiveObjective
  | FireGroup
  | CharactersDirectiveTier
  | FireMode2
  | FireModeToProjectile
  | CharactersStatHistory
  | FireMode
  | Image
  | ImageSet
  | ImageSetDefault
  | FireModeType
  | ItemCategory
  | Item
  | ItemProfile
  | ItemAttachment
  | ItemToWeapon
  | Map
  | MapHex
  | MapRegion
  | MarketingBundle
  | MarketingBundleItem
  | ItemType
  | MarketingBundleWith1Item
  | MetagameEvent
  | Loadout
  | Leaderboard
  | Objective
  | ObjectiveSetToObjective
  | OutfitMember
  | ObjectiveType
  | Outfit
  | OutfitRank
  | PlayerState
  | MetagameEventState
  | OutfitMemberExtended
  | Profile2
  | ProfileArmorMap
  | ProfileResistMap
  | Projectile
  | ProjectileFlightType
  | Region
  | ResistInfo
  | Profile
  | PlayerStateGroup
  | ResistType
  | ResourceType
  | Reward
  | RewardType
  | RewardGroupToReward
  | PlayerStateGroup2
  | Skill
  | SkillCategory
  | SkillLine
  | RewardSetToRewardGroup
  | SkillSet
  | Title
  | Vehicle
  | VehicleAttachment
  | VehicleFaction
  | VehicleSkillSet
  | Weapon
  | WeaponAmmoSlot
  | ExperienceRank
  | SingleCharacterById
  | WeaponToAttachment
  | WeaponDatasheet
  | WorldEvent
  | World
  | Zone
  | TargetType
  | ZoneEffectType
  | Faction
  | ZoneEffect
  | WorldStatHistory
  | FireGroupToFireMode
  | WeaponToFireGroup;
