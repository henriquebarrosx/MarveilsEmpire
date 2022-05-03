import { SpellSchema } from '@interfaces/spell';

import { ListViewContent } from './Content';
import { LoadingIndicator } from './LoadingIndicator';

interface Props {
  isLoading: boolean;
  isVisible: boolean;
  spells: SpellSchema[];
}

export function ListView({ spells, isVisible, isLoading }: Props): JSX.Element | null {
  if (isLoading) {
    return <LoadingIndicator />
  }

  if (isVisible) {
    return (
      <div className="text-center flex flex-col items-center justify-center mt-24">
        <h1 className="font-bold text-white text-2xl uppercase my-6">
          Enciclopédia de magias
        </h1>

        <ListViewContent spells={spells} />
      </div>
    )
  }

  return null;
}