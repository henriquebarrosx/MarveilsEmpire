import { memo } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { useSession } from '@store/Session';

interface Props {
  name: string;
  isVisible: boolean;
}

function WitchNameComponent({name, isVisible}: Props) {
  const navigate = useNavigate();
  const { setWitchName } = useSession();
  
  function signOut(): void {
    setWitchName("");
    navigate('/signIn', { replace: true });
  }

  if (isVisible) {
    return (
      <button className='flex items-center' onClick={signOut} title="Sair">
        <div className="text-white font-bold text-sm mr-3">{name}</div>
        <FaSignOutAlt color='#FFFFFF' />
      </button>
    )
  }

  return null;
}

export const WitchName = memo(WitchNameComponent)