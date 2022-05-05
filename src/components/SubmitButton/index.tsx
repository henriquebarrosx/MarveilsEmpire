import { memo } from "react";

interface Props {
  label: string;
  disabled?: boolean;
  onSubmit: () => void;
  tooltipMessage?: string;
  size?: 'default' | 'small';
}

function SubmitButtonComponent(props: Props): JSX.Element {
  const { label, tooltipMessage, onSubmit, disabled = false, size = 'default' } = props;

  function getButtonWidth(): number {
    return buttonWidth[size];
  }

  return (
    <button onClick={onSubmit} disabled={disabled} title={tooltipMessage} style={{ width: getButtonWidth() }} className="uppercase bg-[#6C63FF] h-12 text-sm text-white font-bold rounded-md hover:bg-[#403A9E] duration-200 ease-linear disabled:opacity-30 disabled:bg-[#6C63FF] disabled:cursor-not-allowed">
      {label}
    </button>
  )
}

const buttonWidth = {
  small: 120,
  default: 300,
}

export const SubmitButton = memo(SubmitButtonComponent);