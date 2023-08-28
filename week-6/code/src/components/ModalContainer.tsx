import { createPortal } from "react-dom";

import DeleteModal from "./DeleteModal";

interface IModelContainer {
  message: string;
  setModalStatu: React.Dispatch<React.SetStateAction<boolean>>;
  userID: string | null;
}

const ModalContainer = ({
  message,
  setModalStatu,
  userID,
}: IModelContainer) => {
  return createPortal(
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-gray-500/20">
      <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-14">
        <DeleteModal
          userID={userID}
          setModalStatu={setModalStatu}
          message={message}
        />
      </div>
    </div>,
    document.body
  );
};

export default ModalContainer;
