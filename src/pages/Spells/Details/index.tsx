import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

import { PageView } from "@components/PageView";
import { HeaderSide } from "@components/Header";
import { SubmitButton } from "@components/SubmitButton";
import { SpellSchema, SpellTypes } from "@interfaces/spell";
import { SpellContextProvider, useSpell } from "@store/Spell";
import { fetchSpellDetails } from "@services/network/spell/get";
import { LoadingIndicator } from "@components/LoadingIndicator";

function SpellDetailsComponent(): JSX.Element {
  const navigate = useNavigate();
  const { id: spellId }: any = useParams();

  const {
    setSelectedOption,
    isFetchIndicatorVisible,
    shouldDisplayFetchIndicator,
  } = useSpell();

  const [spell, setSpell] = useState<SpellSchema>();

  function getSpellType(spellType: SpellTypes): SpellTypes {
    const spellTypes = ['support', 'attack', 'debuff', 'defensive', 'mobility', 'lost'];
    const commonSpellType = spellTypes.includes(spellType);

    return commonSpellType ? spellType : 'lost';
  }

  async function redirectToPreviousPage(): Promise<void> {
    return navigate("/spells");
  }

  async function getSpellDetails(): Promise<void> {
    try {
      if (spellId) {
        shouldDisplayFetchIndicator(true);

        const { data } = await fetchSpellDetails(spellId);

        setSpell(data);
        setSelectedOption(getSpellType(data.type));
      }
    }

    catch {
      // TODO: handle possible errors
    }

    finally {
      shouldDisplayFetchIndicator(false);
    }
  }

  useEffect(() => {
    getSpellDetails();
  }, [spellId]);

  return (
    <PageView>
      <div className="flex flex-col">
        <HeaderSide />

        <div className="flex justify-center items-center h-full mt-24 mb-24 md:mt-[10%] lg:mt-[150px] md:mb-0">
          <div className="relative flex flex-col md:px-14 md:py-24 px-8 py-8 bg-[#242424] box-shadow-lg md:max-w-[871px] w-[90%] sm:max-h-[unset] rounded-lg">
            <LoadingIndicator isVisible={isFetchIndicatorVisible} />

            <div className="flex md:flex-row flex-col-reverse">
              <LeftSide />

              <RightSide
                spellType={spell?.type!}
                spellName={spell?.name!}
                creationTime={spell?.createdAt!}
              />
            </div>

            <div className="self-center mt-16">
              <SubmitButton
                label="Voltar"
                onSubmit={redirectToPreviousPage}
                tooltipMessage="Voltar para página de magias"
              />
            </div>
          </div>
        </div>
      </div>
    </PageView>
  )
}

export const SpellDetails = () => (
  <SpellContextProvider>
    <SpellDetailsComponent />
  </SpellContextProvider>
)