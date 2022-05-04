import { memo } from "react";

interface Props {
  label: string;
  disabled?: boolean;
  onSubmit: () => void;
  tooltipMessage?: string;
}

function SubmitButtonComponent({ label, tooltipMessage, onSubmit, disabled = false }: Props): JSX.Element {
  return (
    <div className="self-center mt-16">
      <button onClick={onSubmit} disabled={disabled} title={tooltipMessage} className="w-[300px] uppercase bg-[#6C63FF] h-12 text-sm text-white font-bold rounded-lg hover:bg-[#403A9E] duration-200 ease-linear disabled:opacity-30 disabled:bg-[#6C63FF] disabled:cursor-not-allowed">
        {label}
      </button>
    </div>
  )
}

export const SubmitButton = memo(SubmitButtonComponent);