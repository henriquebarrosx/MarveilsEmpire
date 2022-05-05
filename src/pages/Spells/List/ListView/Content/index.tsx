import { Spell } from '../Spell';
import { useSpell } from '@store/Spell';

export function ListViewContent(): JSX.Element {
  const { spells } = useSpell();

  return (
    <div className='flex flex-wrap justify-center'>
      {spells.map((spell) => <Spell {...spell} key={spell.id} />)}
    </div>
  )
}
