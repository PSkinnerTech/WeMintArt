import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Heading,
  Button,
  Image,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useEditionDrop, useClaimNFT } from "@thirdweb-dev/react";
import { useAccount } from "wagmi";
import Topbuttons from "./Components/topbuttons";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import React, { useState } from "react";
import { handleWhitelist } from "../utils/contract"; // Import the function

const Home: NextPage = () => {
  const { address } = useAccount();
  const editionDrop = useEditionDrop(
    "0xc321cB91524f3C7fcD9e9333D71b644957852Fd2"
  );
  const { mutate: claimNft, isLoading, error } = useClaimNFT(editionDrop);
  const [walletAddress, setWalletAddress] = useState("");

  const handleWhitelistSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleWhitelist(walletAddress);
  };

  if (error) {
    console.error("failed to claim nft", error);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>WeMintArt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbuttons />
      <main className={styles.main}>
        <Heading size="xl" textAlign="center" pb="3">
          Faces
        </Heading>
        {!address ? (
          <Image
            src="./probablynothing.png"
            rounded="full"
            width="42%"
            mt="5"
            maxW="300px"
            alt="probably nothing"
          />
        ) : null}
        <br />
        <ConnectButton />
        <FormControl id="wallet-address" onSubmit={handleWhitelistSubmit}>
          <FormLabel>Wallet Address</FormLabel>
          <Input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          <Button mt="4" colorScheme="teal" type="submit">
            Join Whitelist
          </Button>
        </FormControl>
        {address ? (
          <>
            <Image
              src="./probablynothing.png"
              rounded="2xl"
              width="42%"
              maxW="300px"
              mt="5"
              mb="3"
              alt="probably nothing"
            />
            {/* <Text>0 out of ∞ Minted</Text> */}
            {isLoading ? (
              <Button
                colorScheme="purple"
                disabled={isLoading}
                isLoading
                loadingText="minting..."
                spinnerPlacement="start"
                _hover={{ transform: "scale(1.1)" }}
                size="lg"
                my="3"
              />
            ) : (
              <Button
                colorScheme="purple"
                disabled={isLoading}
                onClick={() =>
                  claimNft({ to: address as any, tokenId: 0, quantity: 1 })
                }
                _hover={{ transform: "scale(1.1)" }}
                size="lg"
                my="3"
              >
                claim probably nothing!
              </Button>
            )}
            <Button
              colorScheme="blue"
              onClick={() =>
                window.open(
                  "https://testnets.opensea.io/assets/goerli/0xc321cB91524f3C7fcD9e9333D71b644957852Fd2/0",
                  "_blank"
                )
              }
            >
              view on opensea
            </Button>
          </>
        ) : null}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
