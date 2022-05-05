interface Props {
  isVisible: boolean;
  actions: IAction[];
}

interface IAction {
  label: string;
  onClick: () => void;
  toolTipMessage: string;
}

export function Popover({ isVisible, actions }: Props): JSX.Element | null {
  if (isVisible) {
    return (
      <div className="flex flex-col shadow-lg bg-[#424242] rounded-lg absolute -right-20 -top-16 z-30">
        {actions.map(({ label, onClick, toolTipMessage: toolTip }) => (
          <button onClick={onClick} className="text-white hover:bg-[#373737] px-6 h-10 duration-200 rounded-lg" title={toolTip}>
            {label}
          </button>
        ))}
      </div>
    )
  }

  return null;
}