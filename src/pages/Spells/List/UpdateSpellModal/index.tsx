import { useSpell } from "@store/Spell";
import { Modal } from "@components/Modal";
import { UpdateSpellFormView } from "../FormView";

export function UpdateSpellModal(): JSX.Element {
  const { isUpdateSpellModalVisible } = useSpell();

  return (
    <Modal isVisible={isUpdateSpellModalVisible}>
      <UpdateSpellFormView />
    </Modal>
  )
}