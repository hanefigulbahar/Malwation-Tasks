import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IReduxModal {
  isOpen: boolean;
  id?: string;
}

interface ModalDeleteAction {
  id: string;
}

const initialState: IReduxModal = { isOpen: false };

const modalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    openModal: (_, action: PayloadAction<ModalDeleteAction>) => {
      return {
        isOpen: true,
        ...action.payload,
      };
    },
    closeModal: () => {
      return {
        isOpen: false,
      };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
