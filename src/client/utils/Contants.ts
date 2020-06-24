export enum State {
    IDLE,
    CONNECTING,
    NEARLY,
    RECONNECTING,
    READY,
    DISCONNECTED
}

export enum ClientEvents {
    CLIENT_READY = 'ready',
    CLIENT_DISCONNECTED = 'disconnected',
    CLIENT_RECONNECTING = 'reconnecting',
    ERROR = 'error',
    WARN = 'warn',
    DEBUG = 'debug',
    PS2_EVENT = 'event',
    PS2_DUPLICATE = 'duplicate',
    PS2_SUBSCRIBED = 'subscribed',
    PS2_ACHIEVEMENT = 'AchievementEarned',
    PS2_RANKUP = 'BattleRankUp',
    PS2_DEATH = 'Death',
    PS2_EXPERIENCE = 'GainExperience',
    PS2_ITEM = 'ItemAdded',
    PS2_CAPTURE = 'PlayerFacilityCapture',
    PS2_DEFEND = 'PlayerFacilityDefend',
    PS2_LOGIN = 'PlayerLogin',
    PS2_LOGOUT = 'PlayerLogout',
    PS2_SKILL = 'SkillAdded',
    PS2_VEHICLE_DESTROYED = 'VehicleDestroy',
    PS2_CONTINENT = 'ContinentLock',
    PS2_CONTROL = 'FacilityControl',
    PS2_META_EVENT = 'MetagameEvent',
}
