import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";

import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

import { useAuthentication } from "@utils/useAuth";
import { HeaderSide } from "@components/Header";
import { SubmitButton } from "@components/SubmitButton";
import { createSpell } from "@services/network/spell/create";
import { SpellContextProvider, useSpell } from "@store/Spell";
import { LoadingIndicator } from "@components/LoadingIndicator";

function SpellCreationComponent(): JSX.Element {
  useAuthentication();
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

    catch {
      // TODO: Should treat possible errors
    }

    finally {
      shouldDisplaySubmissionFeedback(false);
    }
  }

  return (
    <div className="flex flex-col relative">
      <HeaderSide />

      <form className="flex justify-center items-center h-full mt-24 mb-24 md:mt-[10%] lg:mt-[150px] md:mb-0">
        <div className="flex flex-col md:px-14 md:py-24 px-8 py-8 bg-[#242424] box-shadow-lg md:max-w-[871px] w-[90%] sm:max-h-[unset] rounded-lg">
          <LoadingIndicator isVisible={isSubmitting} />

          <div className="flex md:flex-row flex-col-reverse">
            <LeftSide />

            <RightSide
              spellName={spellName}
              onSpellNameChange={onSpellNameChange}
            />
          </div>

          <div className="self-center mt-16">
            <SubmitButton
              disabled={isSubmitting}
              onSubmit={createNewSpell}
              label={getSubmitButtonLabel()}
              tooltipMessage="Cadastrar magia"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export const SpellCreation = () => (
  <SpellContextProvider>
    <SpellCreationComponent />
  </SpellContextProvider>
)