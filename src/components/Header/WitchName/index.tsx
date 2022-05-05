import { memo } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Session } from '../../../entities/session';

interface Props {
  isVisible: boolean;
  name: string | null;
}

function WitchNameComponent({name, isVisible}: Props) {
  const navigate = useNavigate();
  
  function signOut(): void {
    new Session().clear();
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