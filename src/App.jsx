import {
  useAddress,
  ConnectWallet,
  useContract,
  useNFTBalance,
} from "@thirdweb-dev/react";
import { useState, useEffect, useMemo } from "react";

const App = () => {
  // Use the hooks thirdweb give us.
  const address = useAddress();
  console.log("👋 Address:", address);

  const editionDropAddress = "0x85Bc6f569A0b0E4dfc4D7721673e3a7d6AB6CDE6";
  const { contract: editionDrop } = useContract(
    editionDropAddress,
    "edition-drop"
  );
  const { data: nftBalance } = useNFTBalance(editionDrop, address, "0");
  console.log(nftBalance, editionDrop);
  const hasClaimedNFT = useMemo(() => {
    return nftBalance && nftBalance.gt(0);
  }, [nftBalance]);

  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to RuggedDao</h1>
        <div className="btn-hero">
          <ConnectWallet />
        </div>
      </div>
    );
  }

  // This is the case where we have the user's address
  // which means they've connected their wallet to our site!
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>
  );
};

export default App;
