import { formatDate } from "@utils/date";
import { SpellTypes } from "@interfaces/spell";
import { spellDescription } from "@utils/spell";

interface Props {
  spellName: string;
  creationTime: string;
  spellType: SpellTypes;
}

export function RightSide({ spellName, creationTime, spellType }: Props): JSX.Element {
  function getSpellTypeText(): string {
    if (spellType) {
      const foundSpellType = spellDescription.find((spell) => spell.type === spellType);
      return foundSpellType?.label ?? getLostSpell();
    }

    return 'Carregando tipo de magia...'
  }

  function getLostSpell(): string {
    return spellDescription.find((spell) => spell.type === 'lost')?.label!;
  }

  function getFormattedDate(): string {
    return creationTime ? formatDate(creationTime, 'DD/MM/YYYY') : '---';
  }

  return (
    <div className="md:w-1/2 w-full md:pl-8 flex flex-col justify-center sm:mt-6 max-w-[320px] md:max-w-[unset] self-center">
      <h1 className="text-white font-bold text-3xl uppercase text-center md:text-left">
        Sobre a magia
      </h1>

      <div className="flex flex-col md:max-w-[90%] w-full  mt-10 mb-7">
        <label className="uppercase text-[#929293] text-xs mb-4">
          Nome da magia:
        </label>

        <div className="w-full flex items-center rounded-md h-12 bg-[#202024] px-4 caret-white text-white placeholder:uppercase text-sm capitalize">
          {spellName}
        </div>
      </div>

      <div className="md:w-3/4 w-full flex flex-col gap-2">
        <span className="uppercase text-[#929293] text-xs leading-4">
          Criado em: {getFormattedDate()}
        </span>

        <span className="uppercase text-[#929293] text-xs leading-4">
          {getSpellTypeText()}
        </span>
      </div>
    </div>
  )
}