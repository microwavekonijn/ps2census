export interface characterItem  {
    character_id: string;
    item_id: string;
    account_level?: string;
    stack_count?: string;
    [prop: string]: unknown;
}
