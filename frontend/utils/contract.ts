import { ethers } from "ethers";

const contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MAX_WHITELISTED",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "addToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWhitelistedAddresses",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "isWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "removeFromWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "whitelistedAddresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

export async function addToWhitelist(address: string) {
  // Check if the user's browser has a web3 provider available
  if (!window.ethereum) {
    console.error("Please install a web3 provider, such as MetaMask");
    return false;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  try {
    console.log(`Adding address ${address} to whitelist...`); // Add this line
    const tx = await contract.addToWhitelist(address);
    await tx.wait();
    console.log(`Address ${address} added to whitelist`); // Add this line
    return true;
  } catch (err) {
    console.error("Failed to add to whitelist", err);
    return false;
  }
}

export const handleWhitelist = async (
  event: React.FormEvent,
  walletAddress: string
) => {
  event.preventDefault();
  const success = await addToWhitelist(walletAddress);
  if (success) {
    console.log(`Address ${walletAddress} added to whitelist`);
  } else {
    console.log(`Failed to add address ${walletAddress} to whitelist`);
  }
};

export async function getWhitelistedAddresses() {
  // Check if the user's browser has a web3 provider available
  if (!window.ethereum) {
    console.error("Please install a web3 provider, such as MetaMask");
    return [];
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  try {
    const whitelistedAddresses = await contract.getWhitelistedAddresses();
    return whitelistedAddresses;
  } catch (err) {
    console.error("Failed to get whitelisted addresses", err);
    return [];
  }
}

export { getWhitelistedAddresses as checkWhitelist };
