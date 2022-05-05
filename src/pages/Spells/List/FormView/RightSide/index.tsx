import { ChangeEvent } from "react";

interface Props {
  spellName: string;
  onSpellNameChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

export function RightSide({ spellName, onSpellNameChange }: Props): JSX.Element {
  return (
    <div className="md:w-1/2 w-full md:pl-8 flex flex-col justify-center sm:mt-6 max-w-[320px] md:max-w-[unset] self-center">
      <h1 className="text-white font-bold text-3xl uppercase text-center md:text-left">
        Atualizar
      </h1>

      <div className="flex flex-col md:max-w-[90%] w-full mt-10 mb-7">
        <label className="uppercase text-[#929293] text-xs mb-4">
          Nome da magia:
        </label>

        <input
          autoFocus
          value={spellName}
          placeholder="Nome da magia"
          onChange={onSpellNameChange}
          className="w-full rounded-md h-12 bg-[#202024] px-4 caret-white text-white placeholder:text-[#929293] placeholder:uppercase text-sm capitalize focus:outline-none focus:border-[#6C63FF] focus:border-solid focus:border-[1px]"
        />
      </div>

      <div className="md:w-3/4 w-full self-center md:self-start">
        <span className="uppercase text-[#929293] text-xs leading-4">
          Lembre-se que as magias podem ser utilizadas para bem e para o mal.
        </span>
      </div>
    </div>
  )
}