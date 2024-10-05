"use client";

import { FormEvent } from "react";

interface IWaitListEmail {
  handleForm: (e: FormEvent) => void;
  email: string;
  setEmail: (data: string) => void;
}

const WaitListEmail = ({ handleForm, email, setEmail }: IWaitListEmail) => {
  return (
    <div className="flex flex-col items-center gap-[5px] h-full">
      <p className="font-bold text-[46px]">
        We are <br /> building!
      </p>
      <p
        className="my-6 text-base font-normal text-textSecondary 
                max-w-[598px]"
      >
        It&apos;s been an exciting journey building, and as part of our giving
        back to creatives. We are offering v1 of our premium plan as a giveaway
        to the first 100 waitlist subscribers. Let&apos;s go champ!
      </p>

      <form
        onSubmit={handleForm}
        className="border-stroke border rounded-[30px] py-[6px] px-[6px] overflow-hidden
                    w-full centerUtil max-w-[447px] pl-6 gap-2 bg-bgCard min-h-[62px]"
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
          value="Join waitlist"
          className="py-3 px-7 bg-white text-black font-bold rounded-[30px]"
        />
      </form>
    </div>
  );
};

export default WaitListEmail;
