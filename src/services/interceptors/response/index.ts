import { AxiosResponse, AxiosError } from 'axios';
import { useErrorsHandlers } from './errorHandler';

export function useResponseInterceptor() {
  const { notAuthorized, internalServerError, noInternetConnection } = useErrorsHandlers();

  async function onSuccess(response: AxiosResponse<any>): Promise<any> {
    return Promise.resolve(response);
  };

  function onError(error: AxiosError): Promise<AxiosError> {
    notAuthorized(error);
    internalServerError(error);
    noInternetConnection(error);

    return Promise.reject(error);
  };

  return { onSuccess, onError }
}