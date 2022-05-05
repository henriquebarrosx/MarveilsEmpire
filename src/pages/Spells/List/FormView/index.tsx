import { ChangeEvent, useEffect, useState } from "react";

import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import { useSpell } from "@store/Spell";
import { SpellTypes } from "@interfaces/spell";
import { SubmitButton } from "@components/SubmitButton";
import { updateSpell } from "@services/network/spell/update";
import { LoadingIndicator } from "@components/LoadingIndicator";

export function UpdateSpellFormView(): JSX.Element {
  const {
    spell,
    getSpellList,
    selectedOption,
    setSelectedSpell,
    setSelectedOption,
    shouldDisplayUpdateSpellModal,
  } = useSpell();

  const [spellName, setSpellName] = useState<string>(spell?.name ?? '');
  const [isSubmitting, shouldDisplaySubmissionFeedback] = useState(false);

  function onSpellNameChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    setSpellName(event.target.value)
  }

  function getSubmitButtonLabel(): string {
    return isSubmitting ? "Atualizando..." : "Atualizar";
  }

  async function updateCurrentSpell(): Promise<void> {
    try {
      shouldDisplaySubmissionFeedback(true);

      await updateSpell({
        id: spell?.id!,
        name: spellName,
        type: selectedOption!,
        version: spell?.version!,
      });

      await getSpellList();
      setSelectedSpell(undefined);
      shouldDisplayUpdateSpellModal(false);
    }

    finally {
      shouldDisplaySubmissionFeedback(false);
    }
  }

  function getSpellType(spellType: SpellTypes): SpellTypes {
    const spellTypes = ['support', 'attack', 'debuff', 'defensive', 'mobility', 'lost'];
    const commonSpellType = spellTypes.includes(spellType);

    return commonSpellType ? spellType : 'lost';
  }

  function cancelUpdatingSpell(): void {
    setSelectedSpell(undefined);
    shouldDisplayUpdateSpellModal(false);
  }

  useEffect(() => {
    setSelectedOption(getSpellType(spell?.type!));
  }, [spell?.type]);

  return (
    <div className="flex justify-center items-center h-full mt-24 mb-24 md:mt-[10%] lg:mt-[150px] md:mb-0">
      <div className="flex flex-col md:px-14 md:py-14 px-8 py-8 bg-[#242424] box-shadow-lg md:max-w-[871px] w-[90%] sm:max-h-[unset] rounded-lg">
        <LoadingIndicator isVisible={isSubmitting} />

        <div className="flex md:flex-row flex-col-reverse">
          <LeftSide />

          <RightSide
            spellName={spellName}
            onSpellNameChange={onSpellNameChange}
          />
        </div>

        <div className="flex md:flex-row flex-col-reverse items-center md:justify-end justify-center mt-16">
          <button onClick={cancelUpdatingSpell} title="Fechar modal" className="md:mr-12 md:mt-0 mt-6 uppercase h-12 text-sm text-white font-bold rounded-lg duration-200 ease-linear disabled:opacity-30 disabled:cursor-not-allowed">
            Cancelar
          </button>

          <SubmitButton
            size="small"
            disabled={isSubmitting}
            onSubmit={updateCurrentSpell}
            label={getSubmitButtonLabel()}
            tooltipMessage="Atualizar Magia"
          />
        </div>
      </div>
    </div>
  )
}
