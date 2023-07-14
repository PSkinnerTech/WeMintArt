import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const provider = ethers.provider;

  console.log("Deploying contracts with the account:", deployer.address);

  console.log(
    "Account balance:",
    (await provider.getBalance(deployer.address)).toString()
  );

  const Whitelist = await ethers.getContractFactory("Whitelist");
  const whitelist = await Whitelist.deploy();

  console.log("Whitelist contract deployed to:", whitelist.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
