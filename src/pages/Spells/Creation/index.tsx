import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SpellType } from "./LeftSide";
import { FormView } from "./RightSide";
import { Header } from "@components/Header";
import { createSpell } from "@services/network/saveSpell";
import { SpellContextProvider, useSpell } from "@store/SpellCreation";

function SpellCreationComponent(): JSX.Element {
  const navigate = useNavigate();
  const { selectedOption } = useSpell();

  const [spellName, setSpellName] = useState<string>('');
  const [isSubmitting, shouldDisplaySubmissionFeedback] = useState(false);

  const submitButtonLabel = isSubmitting ? "Cadastrando..." : "Cadastrar Magia";

  function onSpellNameChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    setSpellName(event.target.value)
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
    <div className="flex flex-col relative h-screen">
      <Header />

      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col bg-[#242424] box-shadow-lg w-[871px] h-[491px] rounded-lg p-14">
          <div className="flex">
            <SpellType />

            <FormView
              spellName={spellName}
              onSpellNameChange={onSpellNameChange}
            />
          </div>

          <div className="self-center mt-16">
            <button onClick={createNewSpell} disabled={isSubmitting} title="Cadastrar magia" className="w-[300px] uppercase bg-[#6C63FF] h-12 text-sm text-white font-bold rounded-lg hover:bg-[#403A9E] duration-200 ease-linear disabled:opacity-30 disabled:bg-[#6C63FF] disabled:cursor-not-allowed">
              {submitButtonLabel}
            </button>
          </div>
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