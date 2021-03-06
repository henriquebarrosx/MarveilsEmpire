import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderSide } from "@components/Header";
import { PageView } from "@components/PageView";
import { Session } from "../../entities/session";
import { validateWithName } from "@utils/witchNameValidations";

export function SignIn(): JSX.Element {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState<string>('');
  const [validationMessage, setValidationMessage] = useState("");

  function onWitchNameChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    setInputValue(event.target.value)
  }

  async function signIn(): Promise<void> {
    const validation = validateWithName(inputValue);

    if (validation) {
      return setValidationMessage(validation);
    }

    new Session().set(inputValue.toUpperCase())
    return navigate('/spells', { replace: true });
  }

  return (
    <PageView>
      <div className="relative">
        <HeaderSide />

        <main className="flex items-center justify-center h-screen">
          <div className="px-8 md:px-16 py-10 w-[90%] bg-[#242424] shadow-lg shadow-[#6C63FF] rounded-lg max-w-[460px] self-center flex-col border-2 border-solid border-[#6C63FF]">
            <h1 className="text-white font-bold text-2xl text-center mb-7 capitalize">
              Realizar login
            </h1>

            <input
              autoFocus
              value={inputValue}
              onChange={onWitchNameChange}
              placeholder="Nome de Feiticeiro"
              className="w-full rounded-md h-12 bg-[#202024] px-4 caret-white text-white placeholder:text-[#929293] placeholder:uppercase text-sm capitalize focus:outline-none focus:border-[#6C63FF] focus:border-solid focus:border-[1px]"
            />

            {!!validationMessage && (
              <div className="ml-2 mt-2">
                <span className="text-red-400">{validationMessage}</span>
              </div>
            )}

            <div className="mt-6 mb-7">
              <span className="text-[#929293] font-bold text-xs uppercase">
                ???Seja aprendiz, experiente ou um gr??o mestre, o nome de um feiticeiro ser?? aquele que ecoar?? aos quatro quantos da terra por seus grandes feitos!???
              </span>
            </div>

            <button onClick={signIn} className="uppercase bg-[#6C63FF] h-12 text-sm text-white font-bold rounded-lg w-full hover:bg-[#403A9E] duration-200 ease-linear">
              Entrar
            </button>
          </div>
        </main>
      </div>
    </PageView>
  )
}