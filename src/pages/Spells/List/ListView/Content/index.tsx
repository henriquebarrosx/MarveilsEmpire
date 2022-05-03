import { Spell } from '../Spell';
import { SpellSchema } from '@interfaces/spell';

interface Props {
  spells: SpellSchema[];
}

export function ListViewContent({ spells }: Props): JSX.Element {
  return (
    <div className='flex flex-wrap justify-center'>
      {spells.map((spell) => <Spell {...spell} />)}
    </div>
  )
}
