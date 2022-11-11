// import sdk from "./1-initialize-sdk.js";
// import { MaxUint256 } from "@ethersproject/constants";

// (async () => {
//   const editionDrop = await sdk.getContract(
//     "0x85Bc6f569A0b0E4dfc4D7721673e3a7d6AB6CDE6",
//     "edition-drop"
//   );
//   try {
//     const claimConditions = [
//       {
//         startTime: new Date(),
//         maxClaimable: 50_000,
//         price: 0,
//         maxClaimablePerWallet: 1,
//         waitInSeconds: MaxUint256,
//       },
//     ];

//     await editionDrop.claimConditions.set("0", claimConditions);
//     console.log("✅ Successfully set claim condition!");
//   } catch (error) {
//     console.error("Failed to set claim condition", error);
//   }
// })();
