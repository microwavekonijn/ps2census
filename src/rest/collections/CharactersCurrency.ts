export type CharactersCurrency = {
  collection: 'characters_currency';
  format: {
    character_id: string;
    currency_id: string;
    currency_name: string;
    quantity: string;
    prestige_currency: string;
  };
  paths:
    | 'character_id'
    | 'currency_id'
    | 'currency_name'
    | 'quantity'
    | 'prestige_currency';
  partialPaths:
    | 'character_id'
    | 'currency_id'
    | 'currency_name'
    | 'quantity'
    | 'prestige_currency';
  conditions: {
    character_id?: string;
    currency_id?: string;
    currency_name?: string;
    prestige_currency?: string;
    quantity?: string;
  };
};
