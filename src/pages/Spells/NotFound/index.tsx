import { useNavigate } from "react-router";
import { HeaderSide } from "@components/Header";

export function NotFoundPage(): JSX.Element {
  const navigate = useNavigate();

  function moveToSpellList(): void {
    return navigate('/spells');
  }

  return (
    <div className="flex flex-col relative h-screen">
      <HeaderSide />

      <div className="items-center justify-center flex h-3/4">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl text-white text-center uppercase leading-3">
            Página não encontrada
          </h1>

          <div className="mt-6 mb-7 max-w-xs text-center">
            <span className="text-[#929293] font-bold text-xs uppercase">
              Descubra e compartilhe magias de nossa enciclopédia agora mesmo!
            </span>
          </div>

          <button
            onClick={moveToSpellList}
            title="Ir para tela de magias"
            className="uppercase border-solid border-[1px] border-[#6C63FF] hover:border-none h-12 text-sm text-[#6C63FF] hover:text-white font-bold rounded-lg px-12 hover:bg-[#403A9E] duration-200 ease-linear">
            Ver magias
          </button>
        </div>
      </div>
    </div>
  )
}
