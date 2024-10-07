"use client";
import { createContext, ReactNode, useState } from "react";
import WalletContext from "./WalletContext";

export const WaitListContext = createContext<
  | undefined
  | {
      waitListState: boolean;
      setWaitListState: (data: boolean) => void;
      errorState: string;
      setErrorState: (data: string) => void;
    }
>(undefined);

const WaitListProvider = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const [errorState, setErrorState] = useState("");
  const [waitListState, setWaitListState] = useState(false);

  return (
    <WaitListContext.Provider
      value={{ waitListState, setWaitListState, errorState, setErrorState }}
    >
      <WalletContext>{children}</WalletContext>
    </WaitListContext.Provider>
  );
};

export default WaitListProvider;
