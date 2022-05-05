import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { WithChildren } from "@interfaces/common";

interface Schema {
  witchName: string;
  setWitchName: Dispatch<SetStateAction<string>>;
}

const SessionContext = createContext({} as Schema);

export function SessionProvider({ children }: WithChildren) {
  const [witchName, setWitchName] = useState('');

  return (
    <SessionContext.Provider value={{ witchName, setWitchName }}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  const context = useContext(SessionContext);

  if (context) {
    return context;
  }

  throw new Error('useSession should be nested on SessionProvider')
}