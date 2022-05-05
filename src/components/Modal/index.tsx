import { WithChildren } from "@interfaces/common";

interface Props extends WithChildren {
  isVisible: boolean;
}

export function Modal({ isVisible, children }: Props) {
  if (isVisible) {
    return (
      <div className="z-50 fixed w-full h-screen bg-[rgba(0,0,0,0.8)] flex items-center justify-center">
        {children}
      </div>
    )
  }

  return null;
}