"use client";

import { FormEvent } from "react";

interface IWaitListEmail {
  handleForm: (e: FormEvent) => void;
  email: string;
  setEmail: (data: string) => void;
  mobile?: boolean;
  loading: boolean;
}

const WaitListEmail = ({
  handleForm,
  email,
  setEmail,
  mobile,
  loading,
}: IWaitListEmail) => {
  return (
    <div
      className={`flex-col items-center gap-[5px] h-full 
      ${mobile ? "hidden max-[500px]:flex" : "flex max-[500px]:hidden"}`}
    >
      <p className="font-bold text-[46px] max-[500px]:text-[24px]">
        We are <br /> building!
      </p>
      <p
        className="my-6 text-base font-normal text-textSecondary 
        max-w-[598px] max-[500px]:text-xs"
      >
        It&apos;s been an exciting journey building, and as part of our giving
        back to creatives. We are offering v1 of our premium plan as a giveaway
        to the first 100 waitlist subscribers. Let&apos;s go champ!
      </p>

      <form
        onSubmit={handleForm}
        className="border-stroke border rounded-[30px] py-[6px] px-[6px] overflow-hidden
        w-full centerUtil max-w-[447px] pl-6 gap-2 bg-bgCard min-h-[62px] max-[500px]:text-[10px]
         max-[500px]:py-[4px] max-[500px]:min-h-0 max-[500px]:pr-[5px]"
      >
        <input
          type="email"
          className="bg-transparent pr-[15px] outline-none border-b border-transparent
                     focus:border-primary flex-1 py-1"
          placeholder="Enter email address"
          required
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          type="submit"
          value={loading ? "Processing..." : "Join waitlist"}
          className="py-3 px-7 bg-white text-black font-bold rounded-[30px]
           max-[500px]:py-[8px] max-[500px]:px-[15px]"
        />
      </form>
    </div>
  );
};

export default WaitListEmail;
