import { SpellTypes } from "@interfaces/spell";
import { useSpell } from "@store/SpellCreation";
import { SpellTypeIconBox } from "@components/SpellTypeIconBox";

interface Props {
  label: string;
  type: SpellTypes;
  shouldHaveSpaceOnTheRight?: boolean;
}

export function SpellTypeOption(props: Props): JSX.Element {
  const { selectedOption, setSelectedOption } = useSpell();

  const { label, type, shouldHaveSpaceOnTheRight } = props;
  const rightSpace = shouldHaveSpaceOnTheRight ? 36 : 0;

  function getOpacity(): number {
    const isSelected: boolean = selectedOption === type;
    return isSelected ? 1 : 0.2;
  }

  function markAsSelected(): void {
    setSelectedOption(type);
  }

  return (
    <button onClick={markAsSelected} style={{ opacity: getOpacity(), marginRight: rightSpace }} title="Selecionar tipo de magia" className="flex flex-col w-16 cursor-pointer justify-center items-center my-2 duration-200 ease-in">
      <SpellTypeIconBox type={type} />
      
      <span className="text-white text-center mt-2">
        {label}
      </span>
    </button>
  )
}