import { useNavigate } from "react-router-dom";

import { WitchName } from "./WitchName";
import WitchHatImage from '@assets/images/witchHat.png'

export function HeaderSide() {
  const navigate = useNavigate();

  const isAuthenticated = true;
  const witchName = "Charlotte";

  function redirectToHomeScreen(): void {
    const redirectPath = isAuthenticated ? '/spells' : '/signIn';
    navigate(redirectPath);
  }

  return (
    <div className="h-12 w-full flex justify-between bg-[#35353A] fixed items-center px-5">
      <button className="flex items-center" onClick={redirectToHomeScreen}>
        <img src={WitchHatImage} alt="logo" loading="lazy" className="w-7 h-7" />
        <h1 className="text-white font-bold text-sm ml-4">Marvies Empire</h1>
      </button>

      <WitchName name={witchName} isVisible={isAuthenticated} />
    </div>
  )
}
