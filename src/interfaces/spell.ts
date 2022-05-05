export interface SpellSchema {
  id: string;
  name: string;
  version: string;
  type: SpellTypes;
  createdAt: string;
}

export type SpellTypes = 'support' | 'attack' | 'debuff' | 'defensive' | 'mobility' | 'lost';