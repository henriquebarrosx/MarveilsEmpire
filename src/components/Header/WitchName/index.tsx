import { memo } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Props {
  name: string;
  isVisible: boolean;
}

function WitchNameComponent({name, isVisible}: Props) {
  const navigate = useNavigate();

  function signOut(): void {
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