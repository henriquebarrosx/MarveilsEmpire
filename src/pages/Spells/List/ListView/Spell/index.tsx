import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { spellTypes } from '@utils/spell';
import { SpellSchema } from '@interfaces/spell';
import { SpellTypeIconBox } from '@components/SpellTypeIconBox';

function SpellComponent({ id, name, type }: SpellSchema): JSX.Element {
  const navigate = useNavigate();
  const formattedSpellName = `"${name}"`

  function getSpellTypeText(): string {
    const foundSpellType = spellTypes.find((spell) => spell.type === 'type');
    return foundSpellType?.label ?? getLostSpell();
  }

  function getLostSpell(): string {
    return spellTypes.find((spell) => spell.type === 'lost')?.label!;
  }

  function redirectToDetailsPage(): void {
    navigate(`/spells/${id}`);
  }

  return (
    <button key={id} onClick={redirectToDetailsPage} title="Visualizar detalhes da magia" className='flex w-[348px] px-3 h-[104px] mx-5 my-5 bg-[#242424] box-shadow-md shadow-[#6C63FF] rounded-md justify-between items-center cursor-pointer hover:opacity-50 duration-200 ease-linear'>
      <div className='flex items-center'>
        <SpellTypeIconBox type={type} />

        <div className='flex flex-col items-start ml-4 mx-w-[93%] w-[70%] text-left'>
          <h2 className='font-bold text-white text-sm uppercase ellipses w-full'>
            {formattedSpellName}
          </h2>

          <span className='text-[#929293] text-xs mt-1'>
            {getSpellTypeText()}
          </span>
        </div>
      </div>

      <div className='flex flex-col h-16 justify-between'>
        <button onClick={redirectToDetailsPage}>
          <BsThreeDotsVertical size={21} color={'#FFFFFF'} />
        </button>

        <button onClick={redirectToDetailsPage}>
          <MdKeyboardArrowRight size={21} color={'#FFFFFF'} />
        </button>
      </div>
    </button>
  )
}

export const Spell = memo(SpellComponent);