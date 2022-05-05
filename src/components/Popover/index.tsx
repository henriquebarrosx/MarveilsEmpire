interface Props {
  isVisible: boolean;
  actions: IAction[];
}

export interface IAction {
  label: string;
  onClick: () => void;
  toolTipMessage: string;
}

export function Popover({ isVisible, actions }: Props): JSX.Element | null {
  if (isVisible) {
    return (
      <div className="flex flex-col shadow-lg bg-[#424242] rounded-lg absolute md:-right-20 right-4 -top-16 z-30">
        {actions.map(({ label, onClick, toolTipMessage: toolTip }) => (
          <button key={label} onClick={onClick} className="capitalize text-white hover:bg-[#373737] px-6 h-10 duration-200 rounded-lg" title={toolTip}>
            {label}
          </button>
        ))}
      </div>
    )
  }

  return null;
}