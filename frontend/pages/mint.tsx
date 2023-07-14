import React from "react";
import { Box, Button, Text, Image } from "@chakra-ui/react";
import styles from "../styles/Home.module.css"; // Import the CSS module

const MintPage = () => {
  // TODO: Fetch the actual number of minted NFTs from your smart contract
  const mintedNFTs = 0;

  const handleMint = () => {
    // TODO: Implement the minting functionality
    console.log("Mint button clicked");
  };

  return (
    <div className={styles.container}>
      <Text fontSize="2xl" mb="4">
        Mint Your NFT
      </Text>
      <Image
        src="/path-to-your-gif.gif"
        alt="NFT Preview"
        boxSize="300px"
        objectFit="cover"
        mb="4"
      />
      <Text fontSize="lg" mb="4">
        {mintedNFTs}/400 NFTs minted
      </Text>
      <Button colorScheme="teal" onClick={handleMint}>
        Mint NFT
      </Button>
    </div>
  );
};

export default MintPage;
