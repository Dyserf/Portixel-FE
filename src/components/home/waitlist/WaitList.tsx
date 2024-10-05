"use client";
import TabState from "@/utils/TabState";
import React, { useContext } from "react";
import { FormEvent, useState } from "react";
import WaitListEmail from "./WaitListEmail";
import WaitListWallet from "./WaitListWallet";
import WaitListSuccess from "./WaitListSuccess";
import { WaitListContext } from "@/utils/Providers";

const WaitList = () => {
  const [selected, setSelected] = useState(Tabs[0].title);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [displayCount, setDisplayCount] = useState<null | string>(null);
  const waitlist = useContext(WaitListContext);

  const closeWaitList = () => {
    waitlist?.setWaitListState(false);
  };

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setDisplayCount(null);

    if (!emailRegex.test(email.trim())) {
      setError("Invalid email!");
      return;
    }

    const data = await fetch(
      "https://portixel-be.onrender.com/api/waitlist/email-address",
      {
        method: "POST",
        body: JSON.stringify({ email_address: email.trim() }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await data.json();

    if (data.status == 201) {
      setDisplayCount(result.seat);
      setEmail("");
    } else {
      setError(result.message || "Something went wrong!");
    }
  };

  return (
    <div
      className="fixed top-0 left-0 centerUtil min-h-screen h-full w-full
    backdrop-blur-[15px] bg-[#010101E5]"
      onClick={closeWaitList}
    >
      <div
        className="flex flex-col items-center bg-[#191818] p-[76px] max-w-[992px] w-[calc(100vw-50px)]
      max-h-[calc(100vh-50px)] border-bgCard rounded-[20px] overflow-y-auto text-center min-h-[598px]"
        onClick={(e) => e.stopPropagation()}
      >
        {displayCount && <WaitListSuccess displayCount={displayCount} />}

        {!displayCount && (
          <>
            <TabState
              Tabs={Tabs}
              selected={selected}
              setSelected={setSelected}
            />

            <p className="text-red-400 inline-block h-4 -mb-1 -mt-4">{error}</p>

            {selected == Tabs[0].title ? (
              <WaitListEmail
                email={email}
                handleForm={handleForm}
                setEmail={setEmail}
              />
            ) : (
              <WaitListWallet />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default WaitList;

const Tabs = [
  {
    title: "Email Address",
  },
  {
    title: "Connect Wallet",
  },
];
