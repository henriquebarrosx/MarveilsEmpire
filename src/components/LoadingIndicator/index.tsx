import { memo } from "react";
import HashLoader from "react-spinners/HashLoader";

interface Props {
  isVisible: boolean;
}

function LoadingIndicatorComponent({ isVisible }: Props): JSX.Element | null {
  if (isVisible) {
    return (
      <div className="absolute self-center top-1/2 right-1/2">
        <HashLoader color={'#6C63FF'} loading size={64} speedMultiplier={1.5} />
      </div>
    )
  }

  return null;
}

export const LoadingIndicator = memo(LoadingIndicatorComponent);