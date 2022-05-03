import { WitchName } from "./WitchName";
import WitchHatImage from '@assets/images/witchHat.png'

export function Header() {
  const isAuthenticated = true;
  const witchName = "Charlotte";

  return (
    <div className="h-12 w-full flex justify-between bg-[#35353A] fixed items-center px-5">
      <div className="flex items-center">
        <img src={WitchHatImage} alt="logo" loading="lazy" className="w-7 h-7" />
        <h1 className="text-white font-bold text-sm ml-4">Marvies Empire</h1>
      </div>

      <WitchName name={witchName} isVisible={isAuthenticated} />
    </div>
  )
}
