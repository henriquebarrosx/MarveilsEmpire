import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import { HeaderSide } from "@components/Header";
import { SubmitButton } from "@components/SubmitButton";
import { createSpell } from "@services/network/saveSpell";
import { SpellContextProvider, useSpell } from "@store/Spell";

function SpellCreationComponent(): JSX.Element {
  const navigate = useNavigate();
  const { selectedOption } = useSpell();

  const [spellName, setSpellName] = useState<string>('');
  const [isSubmitting, shouldDisplaySubmissionFeedback] = useState(false);

  function onSpellNameChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    setSpellName(event.target.value)
  }

  function getSubmitButtonLabel(): string {
    return isSubmitting ? "Cadastrando..." : "Cadastrar Magia";
  }

  async function createNewSpell(): Promise<void> {
    try {
      shouldDisplaySubmissionFeedback(true);
      
      await createSpell({ name: spellName, type: selectedOption! });
      return navigate("/spells");
    }

    finally {
      shouldDisplaySubmissionFeedback(false);
    }
  }

  return (
    <div className="flex flex-col relative">
      <HeaderSide />

      <div className="flex justify-center items-center h-full mt-24 mb-24 md:mt-[10%] lg:mt-[150px] md:mb-0">
        <div className="flex flex-col md:px-14 md:py-24 px-8 py-8 bg-[#242424] box-shadow-lg md:max-w-[871px] w-[90%] sm:max-h-[unset] rounded-lg">
          <div className="flex md:flex-row flex-col-reverse">
            <LeftSide />

            <RightSide
              spellName={spellName}
              onSpellNameChange={onSpellNameChange}
            />
          </div>

          <SubmitButton
            disabled={isSubmitting}
            onSubmit={createNewSpell}
            label={getSubmitButtonLabel()}
            tooltipMessage="Cadastrar magia"
          />
        </div>
      </div>
    </div>
  )
}

export const SpellCreation = () => (
  <SpellContextProvider>
    <SpellCreationComponent />
  </SpellContextProvider>
)