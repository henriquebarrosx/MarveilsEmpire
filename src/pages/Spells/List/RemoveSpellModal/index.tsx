import { ChangeEvent, useState } from "react";

import { useSpell } from "@store/Spell";
import { Modal } from "@components/Modal";
import { SubmitButton } from "@components/SubmitButton";
import { removeSpell } from "@services/network/spell/destroy";
import { LoadingIndicator } from "@components/LoadingIndicator";

export function RemoveSpellModal(): JSX.Element {
  const {
    spell,
    getSpellList,
    setSelectedSpell,
    isRemoveSpellModalVisible,
    shouldDisplayRemoveSpellModal,
  } = useSpell();

  const [spellName, setSpellName] = useState<string>(spell?.name ?? '');
  const [isSubmitting, shouldDisplaySubmissionFeedback] = useState(false);

  function onSpellNameChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    setSpellName(event.target.value)
  }

  function getSubmitButtonLabel(): string {
    return isSubmitting ? "Removendo..." : "Remover";
  }

  async function removeCurrentSpell(): Promise<void> {
    try {
      shouldDisplaySubmissionFeedback(true);

      await removeSpell(spell?.id!);
      await getSpellList();

      setSelectedSpell(undefined);
      shouldDisplayRemoveSpellModal(false);
    }

    finally {
      shouldDisplaySubmissionFeedback(false);
    }
  }

  function cancelUpdatingSpell(): void {
    setSelectedSpell(undefined);
    shouldDisplayRemoveSpellModal(false);
  }

  function getModalTitle(): string {
    return `Deseja remover o feitiço "${spell?.name}"?`
  }

  return (
    <Modal isVisible={isRemoveSpellModalVisible}>
      <div className="flex justify-center items-center h-full mt-24 mb-24 md:mt-[10%] lg:mt-[150px] md:mb-0">
        <div className="flex flex-col md:px-14 px-8 py-8 bg-[#242424] box-shadow-lg md:min-w-[632px] md:max-w-[871px] w-[90%] sm:max-h-[unset] rounded-lg">
          <LoadingIndicator isVisible={isSubmitting} />

          <h1 className="text-white text-xl bold mb-8">
            {getModalTitle()}
          </h1>

          <div className="flex flex-col">
            <h1 className="text-[#929293] uppercase text-sm mb-3">Confirme o nome do feitiço</h1>

            <input
              autoFocus
              value={spellName}
              placeholder="Nome da magia"
              onChange={onSpellNameChange}
              className="w-full rounded-md h-12 bg-[#202024] px-4 caret-white text-white placeholder:text-[#929293] placeholder:uppercase text-sm capitalize focus:outline-none focus:border-[#6C63FF] focus:border-solid focus:border-[1px]"
            />
          </div>

          <div className="flex items-center md:justify-end justify-center mt-8">
            <button onClick={cancelUpdatingSpell} title="Fechar modal" className="mr-12 uppercase h-12 text-sm text-white font-bold rounded-lg duration-200 ease-linear disabled:opacity-30 disabled:cursor-not-allowed">
              Cancelar
            </button>

            <SubmitButton
              size="small"
              disabled={isSubmitting}
              onSubmit={removeCurrentSpell}
              label={getSubmitButtonLabel()}
              tooltipMessage="Remover Magia"
            />
          </div>
        </div>
      </div>
    </Modal>
  )
}