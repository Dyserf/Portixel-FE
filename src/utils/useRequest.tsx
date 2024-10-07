import { useContext } from "react";
import { WaitListContext } from "./Providers";

interface ISend {
  path: "email" | "wallet";
  value: string;
  setLoading?: (data: boolean) => void;
}

const useRequest = () => {
  const waitlist = useContext(WaitListContext);

  const Send = async ({ path, value, setLoading }: ISend) => {
    let result: string | null = null;
    waitlist?.setErrorState("");

    if (setLoading) {
      setLoading(true);
    }

    const data = await fetch(
      `https://portixel-be.onrender.com/api/waitlist/${
        path == "email" ? "email-address" : "wallet-address"
      }`,
      {
        method: "POST",
        body: JSON.stringify({
          [path == "email" ? "email_address" : "wallet_address"]: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response = await data.json();

    if (data.status == 201) {
      result = response.seat;
    } else {
      waitlist?.setErrorState(response.message || "Something went wrong!");
    }

    if (setLoading) {
      setLoading(false);
    }

    return { result };
  };

  return { Send };
};

export default useRequest;
