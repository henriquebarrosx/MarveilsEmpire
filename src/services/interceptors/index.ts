import { useResponseInterceptor } from './response';

export function useInterceptor() {
  const onResponse = useResponseInterceptor();
  return { onResponse }
}