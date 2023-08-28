import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IReduxUser {
  isLogin: boolean;
  id?: string;
  name?: string;
  permissions?: string[];
}
interface ILoginAction {
  id: string;
  name: string;
  permissions: string[];
}

interface IReduxUpdateUser {
  name: string;
  permissions: string[];
}

const initialState: IReduxUser = { isLogin: false };

const userSlice = createSlice({
  name: "User Info",
  initialState,
  reducers: {
    userLogin: (_, action: PayloadAction<ILoginAction>) => {
      return {
        isLogin: true,
        ...action.payload,
      };
    },
    userLogout: () => {
      return {
        isLogin: false,
      };
    },
    userUpdate: (state, action: PayloadAction<IReduxUpdateUser>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { userLogin, userLogout, userUpdate } = userSlice.actions;
export const userReducer = userSlice.reducer;
