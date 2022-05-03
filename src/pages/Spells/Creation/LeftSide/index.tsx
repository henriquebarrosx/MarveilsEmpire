import { SpellTypeOption } from "./SpellTypeOption";

export function SpellType(): JSX.Element {
  return (
    <div className="flex flex-col w-1/2 justify-start">
      <div className="w-3/4 mb-6">
        <span className="uppercase text-[#929293] text-xs leading-4">
          Selecione o tipo da magia
        </span>
      </div>

      <div className="flex">
        <SpellTypeOption type="support" label="Suporte" shouldHaveSpaceOnTheRight />
        <SpellTypeOption type="attack" label="Ataque" shouldHaveSpaceOnTheRight />
        <SpellTypeOption type="debuff"label="Debuff"shouldHaveSpaceOnTheRight />
      </div>

      <div className="flex">
        <SpellTypeOption type="defensive"label="Defensiva"shouldHaveSpaceOnTheRight />
        <SpellTypeOption type="mobility"label="Mobilidade"shouldHaveSpaceOnTheRight />
        <SpellTypeOption type="lost" label="Perdida" shouldHaveSpaceOnTheRight />
      </div>
    </div>
  )
}