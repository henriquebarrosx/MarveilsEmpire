import { useEffect } from "react";

import { HeaderSide } from "@components/Header";
import { SpellContextProvider, useSpell } from "@store/Spell";

import { ListView } from "./ListView";
import { SpellsNotFound } from "./SpellsNotFound";
import { UpdateSpellModal } from "./UpdateSpellModal";
import { FloatingActionButton } from "./FloatingActionButton";

function SpellListComponent(): JSX.Element {
  const { isFetchIndicatorVisible, spells, getSpellList } = useSpell();

  function shouldDisplayNotFoundFeedback(): boolean {
    return !isFetchIndicatorVisible && !spells.length;
  }

  useEffect(() => {
    getSpellList();
  }, []);

  return (
    <div className="flex flex-col relative h-screen">
      <HeaderSide />
      
      <ListView
        isLoading={isFetchIndicatorVisible}
        isVisible={!shouldDisplayNotFoundFeedback()}
      />
      
      <UpdateSpellModal />
      <SpellsNotFound isVisible={shouldDisplayNotFoundFeedback()} />
      <FloatingActionButton />
    </div>
  )
}

export const SpellList = () => (
  <SpellContextProvider>
    <SpellListComponent />
  </SpellContextProvider>
)