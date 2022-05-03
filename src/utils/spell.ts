import { SpellTypes } from "../interfaces/spell"

interface SpellDescription {
  label: string;
  type: SpellTypes;
}

export const spellDescription: SpellDescription[] = [
  { type: 'lost', label: 'Magia perdida'},
  { type: 'support', label: 'Magia de suporte'},
  { type: 'attack', label: 'Magia de ataque'},
  { type: 'defensive', label: 'Magia de defesa'},
  { type: 'mobility', label: 'Magia de mobilidade'},
  { type: 'debuff', label: 'Magia de maldição'},
]