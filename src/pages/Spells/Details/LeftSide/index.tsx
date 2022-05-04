import { SpellTypeOption } from "./SpellTypeOption";

export function LeftSide(): JSX.Element {
  return (
    <div className="flex flex-col md:w-1/2 items-center md:justify-start sm:w-full mt-16 md:mt-0">
      <div className="w-3/4 mb-6 flex justify-center md:justify-start">
        <span className="uppercase text-[#929293] text-xs leading-4">
          Tipo da magia
        </span>
      </div>

      <div className="flex">
        <SpellTypeOption type="support" label="Suporte" shouldHaveSpaceOnTheRight />
        <SpellTypeOption type="attack" label="Ataque" shouldHaveSpaceOnTheRight />
        <SpellTypeOption type="debuff"label="Debuff" />
      </div>

      <div className="flex">
        <SpellTypeOption type="defensive"label="Defensiva"shouldHaveSpaceOnTheRight />
        <SpellTypeOption type="mobility"label="Mobilidade"shouldHaveSpaceOnTheRight />
        <SpellTypeOption type="lost" label="Perdida" />
      </div>
    </div>
  )
}