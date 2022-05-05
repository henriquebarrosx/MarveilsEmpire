import { memo } from 'react';
import { IconType } from 'react-icons';

import { SpellTypes } from '@interfaces/spell';
import { IconBox, iconsBox } from '@utils/iconsBox';

interface Props {
  type: SpellTypes;
}

function SpellTypeIconBoxComponent({ type }: Props): JSX.Element {
  function getIconBox(): IconBox {
    const foundIcon: IconBox | undefined = iconsBox.find((iconBox) => {
      return iconBox.type === type;
    });

    return foundIcon ?? getLostSpell();
  }

  function getLostSpell(): IconBox {
    return iconsBox.find((iconBox) => iconBox.type === 'lost')!;
  }

  const RenderedIcon: IconType = getIconBox().icon;
  const backgroundColor: string = getIconBox().background;

  return (
    <div style={{ backgroundColor }} className={'rounded-lg min-w-[64px] min-h-[64px]  w-14 h-14 flex justify-center items-center'}>
      <RenderedIcon size={36} color={getIconBox().color} />
    </div>
  )
}

export const SpellTypeIconBox = memo(SpellTypeIconBoxComponent)