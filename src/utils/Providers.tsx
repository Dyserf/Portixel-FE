"use client";
import { createContext, ReactNode, useState } from "react";

export const WaitListContext = createContext<
  | undefined
  | {
      waitListState: boolean;
      setWaitListState: (data: boolean) => void;
    }
>(undefined);

const WaitListProvider = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const [waitListState, setWaitListState] = useState(false);

  return (
    <WaitListContext.Provider value={{ waitListState, setWaitListState }}>
      {children}
    </WaitListContext.Provider>
  );
};

export default WaitListProvider;
