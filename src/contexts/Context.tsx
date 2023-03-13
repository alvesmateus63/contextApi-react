import React, { createContext, useReducer } from "react";

import {
  UserType,
  userInitialState,
  userReducer,
} from "../reducers/userReducer";
import { reducerActionType } from "../types/reducerActionType";

type initialStateType = {
  user: UserType;
};

type ContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
};

const initialState = {
  user: userInitialState,
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { user }: initialStateType,
  action: reducerActionType
) => ({
  user: userReducer(user, action),
});

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
