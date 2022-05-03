import {AxiosResponse} from 'axios';

import { API } from "@services/axios";
import { SpellSchema } from '@interfaces/spell';

interface Response {
  spells: SpellSchema[];
}

export async function fetchBySpells(): Promise<AxiosResponse<Response>> {
  return API.get('/spells');
}