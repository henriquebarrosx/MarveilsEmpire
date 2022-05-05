import { API } from "@services/axios";
import { SpellTypes } from "@interfaces/spell";

interface Params {
  id: string;
  name: string;
  version: string;
  type: SpellTypes;
}

export async function updateSpell(params: Params) {
  return API.put('/spells', params);
}