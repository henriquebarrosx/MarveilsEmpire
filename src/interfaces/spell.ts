export interface SpellSchema {
  id: string;
  name: string;
  type: string;
  version: string;
  createdAt: string;
}

export type SpellTypes = 
  'support' 
  | 'attack' 
  | 'debuff' 
  | 'defensive' 
  | 'mobility' 
  | 'lost'
  | string;