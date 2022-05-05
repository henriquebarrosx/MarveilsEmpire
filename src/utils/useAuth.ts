import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Session } from "../entities/session";

export function useAuthentication() {
  const navigate = useNavigate();
  const isAuthenticated = new Session().getAuthenticatedState();

  function handleAuthState(): void {
    const pathname = isAuthenticated ? window.location.pathname : "/signIn";
    navigate(pathname, { replace: true });
  }

  useEffect(() => {
    handleAuthState();
  }, [isAuthenticated]);
}