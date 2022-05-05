import { IconType } from 'react-icons';
import { IoMdFlash } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';

import {
  MdSecurity,
  MdOutlineHelp,
  MdOutlineWhatshot,
  MdOutlineDirectionsRun,
} from 'react-icons/md';

export interface IconBox {
  color: string;
  icon: IconType;
  background: string;
}

export const iconsBox = [
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