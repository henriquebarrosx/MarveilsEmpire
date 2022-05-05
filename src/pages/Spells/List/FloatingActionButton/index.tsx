import { memo } from 'react';
import { HiPlus } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function FloatingActionButtonComponent(): JSX.Element {
  const navigate = useNavigate();
  
  function navigateToSpellCreation(): void {
    navigate('/spells/new');
  }

  return (
    <button
      title="Cadastrar nova magia"
      onClick={navigateToSpellCreation}
      className="z-50 flex rounded-full w-14 h-14 items-center justify-center bg-[#6C63FF] fixed bottom-8 right-12 duration-200 ease-linear hover:bg-[#403A9E]"
    >
      <HiPlus size={28} color='#FFFFFF' />
    </button>
  )
}

export const FloatingActionButton = memo(FloatingActionButtonComponent)