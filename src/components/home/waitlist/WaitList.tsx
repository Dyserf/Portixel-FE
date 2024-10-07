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
  const [loading, setLoading] = useState(false);
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

    setLoading(true);
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

    setLoading(false);
  };

  return (
    <div
      className="fixed top-0 left-0 centerUtil min-h-screen h-full w-full
    backdrop-blur-[15px] bg-[#010101E5] z-[4]"
      onClick={closeWaitList}
    >
      <div
        className="flex flex-col items-center bg-[#191818] p-[76px] max-w-[992px] w-[calc(100vw-30px)]
      max-h-[calc(100vh-50px)] border-bgCard rounded-[20px] overflow-y-auto text-center min-oh-[598px]
       max-[500px]:min-h-0 max-[500px]:p-[22px] bg-[url(/gallery/bg.png)]"
        onClick={(e) => e.stopPropagation()}
      >
        {displayCount && <WaitListSuccess displayCount={displayCount} />}

        {!displayCount && (
          <>
            <TabState
              Tabs={Tabs}
              selected={selected}
              setSelected={setSelected}
              hideOnMobile
            />

            <p
              className="text-red-400 inline-block w-fit
            fixed top-2 mx-auto bg-bgCard p-2 rounded"
            >
              {error}
            </p>

            {selected == Tabs[0].title ? (
              <WaitListEmail
                email={email}
                handleForm={handleForm}
                setEmail={setEmail}
                loading={loading}
              />
            ) : (
              <WaitListWallet />
            )}

            <WaitListEmail
              email={email}
              handleForm={handleForm}
              setEmail={setEmail}
              loading={loading}
              mobile
            />
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
