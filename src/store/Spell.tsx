import { SpellTypes } from "@interfaces/spell";
import { WithChildren } from "@interfaces/common";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface Schema {
  selectedOption: SpellTypes | undefined;
  setSelectedOption: Dispatch<SetStateAction<SpellTypes | undefined>>;
}

const SpellContext = createContext({} as Schema);

export function SpellContextProvider({ children }: WithChildren): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<SpellTypes | undefined>();
  
  return (
    <SpellContext.Provider value={{ selectedOption, setSelectedOption }}>
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