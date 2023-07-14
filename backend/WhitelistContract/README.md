# Whitelist Smart Contract

This repository contains a Whitelist smart contract for an NFT project. The contract is written in Solidity and deployed using the Hardhat development environment.

## Overview

The Whitelist contract allows the owner to manage a list of addresses that are allowed to mint NFTs. The contract includes functions to add and remove addresses from the whitelist, check if an address is whitelisted, and limit the whitelist to 100 addresses.

## Contract Address

The contract is deployed on the local Hardhat network at the following address:

`0x5fbdb2315678afecb367f032d93f642f64180aa3`

Please note that this address is only valid on the local Hardhat network. If you deploy the contract to a live network (like the Ethereum mainnet or a testnet), it will have a different address.

## Setup and Deployment

Follow the step-by-step guide below to set up and deploy your own Whitelist contract. You can also refer to the example GitHub repository [here](https://github.com/Olanetsoft/whitelist-smart-contract).

1. Install Node.js and npm. You can download them [here](https://nodejs.org/en/download/).

2. Install Hardhat by running `npm install --save-dev hardhat` in your terminal.

3. Initialize a new Hardhat project by running `npx hardhat` and following the prompts. Choose "Create an empty hardhat.config.js" when prompted.

4. Install the Ethers.js library by running `npm install --save ethers`.

5. Create a new file in the `contracts` directory of your Hardhat project and name it `Whitelist.sol`. Copy the Whitelist contract code into this file.

6. Compile the contract by running `npx hardhat compile` in your terminal.

7. Create a new file in the `scripts` directory of your Hardhat project and name it `deploy.ts`. This script will handle the deployment of your contract.

8. Start a local Hardhat network by running `npx hardhat node` in your terminal.

9. Deploy the contract to the local Hardhat network by running `npx hardhat run scripts/deploy.ts --network localhost` in your terminal.

## License

This project is licensed under the MIT License.
