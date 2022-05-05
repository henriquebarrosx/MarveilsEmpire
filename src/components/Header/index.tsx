import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { WitchName } from "./WitchName";

import { useSession } from "@store/Session";
import { PROJECT_NAME } from "@utils/common";
import WitchHatImage from '@assets/images/witchHat.png'

function HeaderSideComponent() {
  const navigate = useNavigate();
  const { witchName } = useSession();
  
  const isAuthenticated: boolean = !!witchName;

  function redirectToHomeScreen(): void {
    const redirectPath = isAuthenticated ? '/spells' : '/signIn';
    navigate(redirectPath);
  }

  return (
    <div className="z-30 h-12 w-full flex justify-between bg-[#35353A] fixed items-center px-5">
      <button className="flex items-center" onClick={redirectToHomeScreen}>
        <img src={WitchHatImage} alt="logo" loading="lazy" className="w-7 h-7" />
        <h1 className="text-white font-bold text-sm ml-4">{PROJECT_NAME}</h1>
      </button>

      <WitchName name={witchName} isVisible={isAuthenticated} />
    </div>
  )
}

export const HeaderSide = memo(HeaderSideComponent);