export function useErrorsHandlers() {
  async function notAuthorized(error: any): Promise<void> {
    if (error?.response?.status == 401) {
      // Do something...
    }
  }

  function noInternetConnection(error: any): void {
    const noInternetConnection = error.response;

    if (noInternetConnection) {
      // Do something...
    }
  }

  function internalServerError(error: any): void {
    if (error?.response?.status === 500) {
      // Do something...
    }
  }

  return { notAuthorized, noInternetConnection, internalServerError }
}