import { memo } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  isVisible: boolean;
}

function SpellsNotFoundComponent({ isVisible }: Props): JSX.Element | null {
  const navigate = useNavigate();

  function moveToSpellCreation(): void {
    navigate("/spells/new");
  }

  if (isVisible) {
    return (
      <div className="items-center justify-center flex h-3/4">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl text-white text-center uppercase leading-3">
            Nenhuma magia encontrada
          </h1>

          <div className="mt-6 mb-7 max-w-xs text-center">
            <span className="text-[#929293] font-bold text-xs uppercase">
              Mostre ao mundo o quão formidável um feiticeiro pode ser
            </span>
          </div>

          <button
            title="Cadastrar nova magia"
            onClick={moveToSpellCreation}
            className="uppercase border-solid border-[1px] border-[#6C63FF] hover:border-none h-12 text-sm text-[#6C63FF] hover:text-white font-bold rounded-lg px-12 hover:bg-[#403A9E] duration-200 ease-linear">
            Cadastrar magia
          </button>
        </div>
      </div>
    )
  }

  return null;
}

export const SpellsNotFound = memo(SpellsNotFoundComponent);