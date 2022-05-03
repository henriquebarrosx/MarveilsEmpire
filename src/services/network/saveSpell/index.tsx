import { API } from "@services/axios";
import { SpellTypes } from "@interfaces/spell";

interface Params {
  name: string;
  type: SpellTypes;
}

export async function createSpell(params: Params) {
  return API.post('/spells', params);
}