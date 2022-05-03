import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { SpellType } from "./LeftSide";
import { RightSide } from "./RightSide";

import { Header } from "@components/Header";
import { SpellSchema, SpellTypes } from "@interfaces/spell";
import { SpellContextProvider, useSpell } from "@store/SpellCreation";
import { fetchSpellDetails } from "@services/network/fetchSpellDetails";

function SpellDetailsComponent(): JSX.Element {
  const navigate = useNavigate();
  const { id: spellId }: any = useParams();
  const { setSelectedOption } = useSpell();

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
        const { data } = await fetchSpellDetails(spellId);

        setSpell(data);
        setSelectedOption(getSpellType(data.type));
      }
    }

    catch {
      // TODO: handle possible errors
    }
  }

  useEffect(() => {
    getSpellDetails();
  }, [spellId]);

  return (
    <div className="flex flex-col relative h-screen">
      <Header />

      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col bg-[#242424] box-shadow-lg w-[871px] h-[491px] rounded-lg p-14">
          <div className="flex">
            <SpellType />

            <RightSide
              spellType={spell?.type!}
              spellName={spell?.name!}
              creationTime={spell?.createdAt!}
            />
          </div>

          <div className="self-center mt-16">
            <button onClick={redirectToPreviousPage} title="Voltar" className="w-[300px] uppercase bg-[#6C63FF] h-12 text-sm text-white font-bold rounded-lg hover:bg-[#403A9E] duration-200 ease-linear disabled:opacity-30 disabled:bg-[#6C63FF] disabled:cursor-not-allowed">
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SpellDetails = () => (
  <SpellContextProvider>
    <SpellDetailsComponent />
  </SpellContextProvider>
)