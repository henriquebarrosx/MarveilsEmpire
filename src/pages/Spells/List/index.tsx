import { useEffect } from "react";

import { useAuthentication } from "@utils/useAuth";
import { HeaderSide } from "@components/Header";
import { SpellContextProvider, useSpell } from "@store/Spell";

import { ListView } from "./ListView";
import { SpellsNotFound } from "./SpellsNotFound";
import { UpdateSpellModal } from "./UpdateSpellModal";
import { RemoveSpellModal } from "./RemoveSpellModal";
import { FloatingActionButton } from "./FloatingActionButton";

function SpellListComponent(): JSX.Element {
  useAuthentication();
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
      <RemoveSpellModal />

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