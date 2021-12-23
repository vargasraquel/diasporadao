import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xd50Dcc07D9Fe8AE8D9293dd0Ed241874844c1A8c",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Sankofa symbol",
        description: "This NFT will give you access to DiasporaDAO!",
        image: readFileSync("scripts/assets/sankofa.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()