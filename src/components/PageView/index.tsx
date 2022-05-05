import { Fragment } from "react";
import { WithChildren } from "@interfaces/common";
import { useAuthentication } from "@utils/useAuth";

export function PageView({ children }: WithChildren) {
  useAuthentication();
  return <Fragment>{children}</Fragment>
}