const hre = require("hardhat");

async function main() {
  const ScoreID = await hre.ethers.ContractFactory("ScoreID");
  const ScoreIDContract = await ScoreID.deploy();
  await ScoreIDContract.deployed();
  console.log("Contract was deploy to address: " + ScoreIDContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
