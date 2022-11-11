// import sdk from "./1-initialize-sdk.js";
// import { readFileSync } from "fs";

// (async () => {
//   try {
//     const editionDrop = await sdk.getContract(
//       "0x85Bc6f569A0b0E4dfc4D7721673e3a7d6AB6CDE6",
//       "edition-drop"
//     );
//     await editionDrop.createBatch([
//       {
//         name: "Copium NFT",
//         description: "This NFT will give you access to RuggedDao",
//         image: readFileSync("scripts/assets/cope.jpg"),
//       },
//     ]);
//     console.log("✅ Successfully created a new NFT in the drop!");
//   } catch (error) {
//     console.error("failed to create the new NFT", error);
//   }
// })();
