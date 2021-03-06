import { memo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { useSpell } from '@store/Spell';
import { spellDescription } from '@utils/spell';
import { SpellSchema } from '@interfaces/spell';
import { IAction, Popover } from '@components/Popover';
import { SpellTypeIconBox } from '@components/SpellTypeIconBox';
import { useOutsideClickListener } from '@utils/outsideClickListener';

function SpellComponent(spell: SpellSchema): JSX.Element {
  const { id, name, type } = spell;

  const containerAreaRef = useRef(null);
  const { setSelectedSpell, shouldDisplayUpdateSpellModal, shouldDisplayRemoveSpellModal } = useSpell();

  useOutsideClickListener(containerAreaRef, hidePopover);

  const navigate = useNavigate();
  const formattedSpellName = `"${name}"`

  const [isPopoverDisplayed, shouldDisplayPopover] = useState(false);

  function getSpellTypeText(): string {
    const foundSpellType = spellDescription.find((spell) => spell.type === type);
    return foundSpellType?.label ?? getLostSpell();
  }

  function getLostSpell(): string {
    return spellDescription.find((spell) => spell.type === 'lost')?.label!;
  }

  function redirectToDetailsPage(): void {
    navigate(`/spells/${id}`);
  }

  function displayPopover(): void {
    shouldDisplayPopover(true);
  }

  function hidePopover(): void {
    shouldDisplayPopover(false);
  }

  function updateCurrentSpell(): void {
    shouldDisplayUpdateSpellModal(true);
    setSelectedSpell(spell);
    hidePopover();
  }

  function removeCurrentSpell(): void {
    shouldDisplayRemoveSpellModal(true);
    setSelectedSpell(spell);
    hidePopover();
  }

  function getPopoverActions(): IAction[] {
    return [
      {
        label: 'Atualizar',
        onClick: updateCurrentSpell,
        toolTipMessage: 'Atualizar Magia'
      },
      {
        label: 'Remover',
        onClick: removeCurrentSpell,
        toolTipMessage: 'Remover Magia',
      },
    ]
  }

  return (
    <div ref={containerAreaRef} title="Visualizar detalhes da magia" className='relative flex w-[348px] px-3 h-[104px] mx-5 my-5 bg-[#242424] box-shadow-md shadow-[#6C63FF] rounded-md justify-between items-center cursor-pointer duration-200 ease-linear'>
      <div onClick={redirectToDetailsPage} className="flex w-[90%]">
        <div className='flex items-center w-[90%]'>
          <SpellTypeIconBox type={type} />

          <div className='flex flex-col items-start ml-4 w-[65%] text-left'>
            <h2 className='font-bold text-white text-sm uppercase ellipses w-full'>
              {formattedSpellName}
            </h2>

            <span className='text-[#929293] text-xs mt-1'>
              {getSpellTypeText()}
            </span>
          </div>
        </div>
      </div>

      <div className='flex h-16 items-end z-20'>
        <button onClick={displayPopover} className="z-10 absolute top-5 w-6 h-6 rounded-full hover:bg-[#6C63FF] flex items-center justify-center duration-200 ease-linear">
          <BsThreeDotsVertical size={18} className="text-white" />
        </button>

        <button onClick={redirectToDetailsPage}>
          <MdKeyboardArrowRight size={21} color={'#FFFFFF'} />
        </button>
      </div>

      <Popover
        isVisible={isPopoverDisplayed}
        actions={getPopoverActions()}
      />
    </div>
  )
}

export const Spell = memo(SpellComponent);