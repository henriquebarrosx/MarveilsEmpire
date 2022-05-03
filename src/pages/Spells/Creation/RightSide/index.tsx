import { ChangeEvent } from "react";

interface Props {
  spellName: string;
  onSpellNameChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

export function FormView({ spellName, onSpellNameChange }: Props): JSX.Element {
  return (
    <div className="w-1/2 flex flex-col justify-center">
      <h1 className="text-white font-bold text-3xl uppercase">
        Nova magia
      </h1>

      <div className="flex flex-col max-w-[90%] mt-10 mb-7">
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

      <div className="w-3/4">
        <span className="uppercase text-[#929293] text-xs leading-4">
          Criar novas magias requer grandes responsabilidades. lembre-se que as magias podem ser utilizadas para bem e para o mal.
        </span>
      </div>
    </div>
  )
}