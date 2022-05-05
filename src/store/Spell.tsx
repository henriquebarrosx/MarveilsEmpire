import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

import { WithChildren } from "@interfaces/common";
import { SpellSchema, SpellTypes } from "@interfaces/spell";
import { fetchBySpells } from "@services/network/spell/get";
import { orderSpellsByAlphabeticOrder } from "@utils/alphabeticOrder";

interface Schema {
  spells: SpellSchema[];
  spell: SpellSchema | undefined;
  isFetchIndicatorVisible: boolean;
  getSpellList: () => Promise<void>;
  isUpdateSpellModalVisible: boolean;
  isRemoveSpellModalVisible: boolean;
  selectedOption: SpellTypes | undefined;
  shouldDisplayFetchIndicator: Dispatch<SetStateAction<boolean>>;
  shouldDisplayRemoveSpellModal: Dispatch<SetStateAction<boolean>>;
  shouldDisplayUpdateSpellModal: Dispatch<SetStateAction<boolean>>;
  setSelectedSpell: Dispatch<SetStateAction<SpellSchema | undefined>>;
  setSelectedOption: Dispatch<SetStateAction<SpellTypes | undefined>>;
}

const SpellContext = createContext({} as Schema);

export function SpellContextProvider({ children }: WithChildren): JSX.Element {
  const [spells, setSpellsToList] = useState<SpellSchema[]>([]);
  const [spell, setSelectedSpell] = useState<SpellSchema | undefined>();
  const [isFetchIndicatorVisible, shouldDisplayFetchIndicator] = useState(true);
  const [selectedOption, setSelectedOption] = useState<SpellTypes | undefined>();
  const [isUpdateSpellModalVisible, shouldDisplayUpdateSpellModal] = useState(false);
  const [isRemoveSpellModalVisible, shouldDisplayRemoveSpellModal] = useState(false);

  async function getSpellList(): Promise<void> {
    try {
      shouldDisplayFetchIndicator(true);

      const { data } = await fetchBySpells();
      const spellList = data.spells;

      setSpellsToList(orderSpellsByAlphabeticOrder(spellList));
    }

    catch {
      // TODO: Should treat possible errors
    }

    finally {
      shouldDisplayFetchIndicator(false);
    }
  }
  
  return (
    <SpellContext.Provider
      value={{
        spell,
        spells,
        getSpellList,
        selectedOption,
        setSelectedSpell,
        setSelectedOption,
        isFetchIndicatorVisible,
        isRemoveSpellModalVisible,
        isUpdateSpellModalVisible,
        shouldDisplayFetchIndicator,
        shouldDisplayRemoveSpellModal,
        shouldDisplayUpdateSpellModal,
      }}>
      {children}
    </SpellContext.Provider>
  )
}

export function useSpell() {
  const context = useContext(SpellContext);

  if (context) {
    return context;
  }

  throw new Error("useSpell should be nested of SpellProvider");
}