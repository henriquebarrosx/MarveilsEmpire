import { IconType } from 'react-icons';
import { IoMdFlash } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';
import { MdOutlineWhatshot, MdSecurity, MdOutlineDirectionsRun, MdOutlineHelp } from 'react-icons/md';

import { SpellTypes } from '@interfaces/spell';

interface Props {
  type: SpellTypes;
}

export function SpellTypeIconBox({ type }: Props): JSX.Element {
  function getIconBox(): IconBox {
    const foundIcon: IconBox | undefined = iconsBox.find((iconBox) => {
      return iconBox.type === type;
    });

    return foundIcon ?? getLostSpell();
  }

  function getLostSpell(): IconBox {
    return iconsBox.find((iconBox) => iconBox.type === 'lost')!;
  }

  const RenderedIcon = getIconBox().icon;
  const backgroundColor: string = getIconBox().background;

  return (
    <div className={'rounded-lg min-w-[64px] min-h-[64px]  w-14 h-14 flex justify-center items-center'} style={{ backgroundColor }}>
      <RenderedIcon size={36} color={getIconBox().color} />
    </div>
  )
}

interface IconBox {
  color: string;
  icon: IconType;
  background: string;
}

const iconsBox = [
  {
    type: 'support',
    icon: AiFillHeart,
    color: '#C50D0D',
    background: '#FF9E9E',
  },
  {
    type: 'attack',
    icon: IoMdFlash,
    color: '#BCB508',
    background: '#FFFCB4',
  },
  {
    type: 'lost',
    color: '#424242',
    icon: MdOutlineHelp,
    background: '#F2F3F2',
  },
  {
    type: 'mobility',
    color: '#0A85A0',
    background: '#ACF0FF',
    icon: MdOutlineDirectionsRun,
  },
  {
    icon: MdSecurity,
    type: 'defensive',
    color: '#2AA515',
    background: '#B8FFAC',
  },
  {
    type: 'debuff',
    color: '#3E32F2',
    icon: MdOutlineWhatshot,
    background: '#B0A4FF',
  }
]