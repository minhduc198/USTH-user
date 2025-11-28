import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { IProfile } from "../types";

type AppContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  user: IProfile | null;
  setUser: Dispatch<SetStateAction<IProfile | null>>;
};

const initialState = {
  isAuthenticated: !!localStorage.getItem("access_token"),
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
};

export const AppContext = createContext<AppContextType>(initialState);

export default function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IProfile | null>(initialState.user);
  const [isAuthenticated, setIsAuthenticated] = useState(
    initialState.isAuthenticated
  );

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
