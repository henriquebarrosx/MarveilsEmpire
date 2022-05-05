import { ListViewContent } from './Content';
import { LoadingIndicator } from './LoadingIndicator';

interface Props {
  isLoading: boolean;
  isVisible: boolean;
}

export function ListView({ isVisible, isLoading }: Props): JSX.Element | null {
  if (isLoading) {
    return <LoadingIndicator />
  }

  if (isVisible) {
    return (
      <div className="text-center flex flex-col items-center justify-center mt-24">
        <h1 className="font-bold text-white text-2xl uppercase my-6">
          Enciclopédia de magias
        </h1>

        <ListViewContent />
      </div>
    )
  }

  return null;
}