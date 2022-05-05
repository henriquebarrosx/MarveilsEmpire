import { SpellSchema } from "@interfaces/spell";

export function orderSpellsByAlphabeticOrder(spells: SpellSchema[]): SpellSchema[] {
  return spells.sort((firstArg, secondArg) => {
    if (firstArg.name.toLowerCase() < secondArg.name.toLowerCase()) return -1;
    if (firstArg.name.toLowerCase() > secondArg.name.toLowerCase()) return 1;
    return 0;
  });
}