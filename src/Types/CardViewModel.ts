import type { I18nInterface } from "./I18nTypes"

export interface CardInterface {
    Info: CardInfoInterface,
    Uniques: CardUniquesInterface
}

export interface CardInfoInterface {
    Name: I18nInterface,
    Lore: I18nInterface,
    Stats: CardStatsInterface,
    Active1: CardActiveInterface,
    Active2: CardActiveInterface,
    Passives: CardPassiveInterface []
}

export interface CardUniquesInterface {
    Opener: string,
    BorderID: number
}

export interface CardStatsInterface {
    Life: number,
    Defense: number,
    DamageReduction: number,
    Velocity: number,
    Attack: number,
    CriticalChance: number,

    Evasion: number,
    CriticalDamage: number,
    FaccionDamage: number 
}

export interface CardActiveInterface extends CardHabilityInterface{
    Cost: I18nInterface,
}

export interface CardPassiveInterface extends CardHabilityInterface {
    ConditionDescription: string
}

export interface CardHabilityDescriptionInterface {
    Description: I18nInterface
    TechnicalDescription: I18nInterface
}

interface CardHabilityInterface {
    Name: I18nInterface
    HabilityDescription: CardHabilityDescriptionInterface
}