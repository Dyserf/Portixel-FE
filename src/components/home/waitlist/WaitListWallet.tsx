import { WaitListContext } from "@/utils/Providers";
import useRequest from "@/utils/useRequest";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { PublicKey } from "@solana/web3.js";
import { useContext, useState } from "react";

interface IWaitListWallet {
  setDisplayCount: (data: string | null) => void;
}

const WaitListWallet = ({ setDisplayCount }: IWaitListWallet) => {
  const [pendingConnection, setPendingConnection] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const waitlist = useContext(WaitListContext);
  const { Send } = useRequest();

  const connectWallet = async () => {
    setPendingConnection(true);
    waitlist?.setErrorState("");
    const solflareWallet = new SolflareWalletAdapter({
      network: WalletAdapterNetwork.Mainnet,
    });

    try {
      await solflareWallet.connect();

      if (solflareWallet.connected && solflareWallet.publicKey) {
        const publicKey: PublicKey = solflareWallet.publicKey;
        setDisplayCount(
          (await Send({ path: "wallet", value: publicKey.toBase58() })).result
        );
        setWalletAddress(publicKey.toBase58());
      }
    } catch (error) {
      console.log(error);
      waitlist?.setErrorState("Failed to connect to Solflare wallet");
    } finally {
      setPendingConnection(false);
    }
  };

  return (
    <div className="max-w-[491px] my-auto flex flex-col gap-5 max-[500px]:hidden py-6">
      <p className="text-textSecondary my-5">
        Your wallet address will be saved and you will have aceess to our tier 1
        premium plan.
      </p>

      {walletAddress ? (
        <p className="italic withEase">{walletAddress}</p>
      ) : pendingConnection ? (
        <button
          className="px-[22px] py-[10px] rounded-[10px] bg-white text-black 
        font-bold w-fit mx-auto"
          disabled
        >
          Connecting...
        </button>
      ) : (
        <button
          className="px-[22px] py-[10px] rounded-[10px] bg-white text-black 
        font-bold w-fit mx-auto"
          onClick={connectWallet}
        >
          Connect your wallet
        </button>
      )}
    </div>
  );
};

export default WaitListWallet;
