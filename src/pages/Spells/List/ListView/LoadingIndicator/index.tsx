import { memo } from 'react';

function LoadingIndicatorComponent(): JSX.Element {
  return (
    <div className='flex items-center justify-center text-center h-full'>
      <h1 className='text-white text-lg'>Buscando magias...</h1>
    </div>
  )
}

export const LoadingIndicator = memo(LoadingIndicatorComponent);