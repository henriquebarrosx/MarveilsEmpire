import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function App() {
  const navigate = useNavigate();

  function handleSessionState(): void {
    navigate('/signIn', { replace: true });
  }
  
  useEffect(() => {
    handleSessionState();
  }, []);

  return null;
}
