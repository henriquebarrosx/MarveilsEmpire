import {AxiosResponse} from 'axios';

import { API } from "@services/axios";
import { SpellSchema } from '@interfaces/spell';

export async function fetchSpellDetails(id: string): Promise<AxiosResponse<SpellSchema>> {
  return API.post('/spells/findById', { id });
}

interface Response {
  spells: SpellSchema[];
}

export async function fetchBySpells(): Promise<AxiosResponse<Response>> {
  return API.get('/spells');
}