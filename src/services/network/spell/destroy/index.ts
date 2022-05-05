import {AxiosResponse} from 'axios';
import { API } from "@services/axios";

interface Response {
  id: string;
  ok: boolean;
  rev: string;
}

export async function removeSpell(id: string): Promise<AxiosResponse<Response>> {
  return API.delete('/spells', { data: { id } });
}