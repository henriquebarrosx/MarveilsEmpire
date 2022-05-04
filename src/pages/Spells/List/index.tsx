import { useEffect, useState } from "react";

import { HeaderSide } from "@components/Header";
import { SpellSchema } from '@interfaces/spell';
import { fetchBySpells } from "@services/network/fetchSpells";

import { ListView } from "./ListView";
import { SpellsNotFound } from "./SpellsNotFound";
import { FloatingActionButton } from "./FloatingActionButton";

export function SpellList(): JSX.Element {
  const [spells, setSpellsToList] = useState<SpellSchema[]>([]);
  const [isFetchIndicatorVisible, shouldDisplayFetchIndicator] = useState(true);

  async function getSpellList(): Promise<void> {
    try {
      shouldDisplayFetchIndicator(true);

      const { data } = await fetchBySpells();
      const spellList = data.spells;

      setSpellsToList(spellList);
    }

    catch {
      // TODO: Should treat possible errors
    }

    finally {
      shouldDisplayFetchIndicator(false);
    }
  }

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
        spells={spells}
        isLoading={isFetchIndicatorVisible}
        isVisible={!shouldDisplayNotFoundFeedback()}
      />
      
      <SpellsNotFound isVisible={shouldDisplayNotFoundFeedback()} />
      <FloatingActionButton />
    </div>
  )
}