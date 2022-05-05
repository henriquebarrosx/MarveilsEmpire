import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Session } from "../entities/session";

export function useAuthentication() {
  const navigate = useNavigate();
  const isAuthenticated = new Session().get();

  function handleAuthState(): void {
    const path = !!isAuthenticated ? '/spells' : '/signIn';
    navigate(path, { replace: true });
  }

  useEffect(() => {
    handleAuthState();
  }, [isAuthenticated]);
}