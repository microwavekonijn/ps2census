import { DefaultCollection } from '../types/collection';
import { characterCurrency } from '../formats/characterCurrency';

export interface CharactersCurrency extends DefaultCollection {
    collection: 'characters_currency';

    format: characterCurrency;

    conditions: Partial<{
        character_id: string,
        currency_id: string,
        currency_name: string,
        prestige_currency: string,
        quantity: string
    }>;
}
