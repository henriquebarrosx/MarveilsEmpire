import { Spell } from './Spell';
import { useSpell } from '@store/Spell';
import { LoadingIndicator } from '@components/LoadingIndicator';

interface Props {
  isLoading: boolean;
  isVisible: boolean;
}

export function ListView({ isVisible, isLoading }: Props): JSX.Element | null {
  const { spells } = useSpell();

  if (isLoading) {
    return <LoadingIndicator isVisible />
  }

  if (isVisible) {
    return (
      <div className="text-center flex flex-col items-center justify-center mt-24">
        <h1 className="font-bold text-white text-2xl uppercase my-6">
          Enciclopédia de magias
        </h1>

        <div className='flex flex-wrap justify-center'>
          {spells.map((spell) => <Spell {...spell} key={spell.id} />)}
        </div>
      </div>
    )
  }

  return null;
}