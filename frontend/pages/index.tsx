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
<<<<<<< HEAD
import { handleWhitelist, checkWhitelist } from "../utils/contract"; // Import the functions
=======
import { handleWhitelist, getWhitelistedAddresses } from "../utils/contract"; // Import the functions
>>>>>>> a0a72086c1aa8b1db88ccc3a1a494248b03d1c21

const Home: NextPage = () => {
  const { address } = useAccount();
  const editionDrop = useEditionDrop(
    "0xc321cB91524f3C7fcD9e9333D71b644957852Fd2"
  );
  const { mutate: claimNft, isLoading, error } = useClaimNFT(editionDrop);
  const [walletAddress, setWalletAddress] = useState("");
  const [whitelistState, setWhitelistState] = useState("idle"); // idle, joining, joined, error

  const handleWhitelistSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setWhitelistState("joining");
    try {
      await handleWhitelist(event, walletAddress);
      setWhitelistState("joined");
    } catch (error) {
      setWhitelistState("error");
    }
  };

<<<<<<< HEAD
  const handleCheckWhitelist = async () => {
    try {
      const whitelistedAddresses = await checkWhitelist();
      console.log("Whitelisted addresses:", whitelistedAddresses);
    } catch (error) {
      console.error("Failed to get whitelisted addresses", error);
    }
=======
  const checkWhitelist = async () => {
    const whitelistedAddresses = await getWhitelistedAddresses();
    console.log("Whitelisted addresses: ", whitelistedAddresses);
>>>>>>> a0a72086c1aa8b1db88ccc3a1a494248b03d1c21
  };

  let joinButtonLabel;
  switch (whitelistState) {
    case "joining":
      joinButtonLabel = "Joining...";
      break;
    case "joined":
      joinButtonLabel = "Joined";
      break;
    case "error":
      joinButtonLabel = "Error";
      break;
    default:
      joinButtonLabel = "Join Whitelist";
  }

  if (error) {
    console.error("failed to claim nft", error);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>WeMintArt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/favicon/wma-small.png" />
      </Head>
      <Topbuttons />
      <main className={styles.main}>
        <Heading size="xl" textAlign="center" pb="3">
          Faces
        </Heading>
        {!address ? (
          <Image
            src="/assets/img/larrydiditt_faces.png"
            rounded="2xl"
            width="42%"
            maxW="300px"
            mt="5"
            mb="3"
            alt="probably nothing"
          />
        ) : null}
        <br />
        <ConnectButton />
<<<<<<< HEAD
        <form onSubmit={handleWhitelistSubmit}>
          {" "}
          {/* Change this line */}
          <FormControl id="wallet-address">
            <FormLabel>Wallet Address</FormLabel>
            <Input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
            <Button mt="4" colorScheme="teal" type="submit">
              {joinButtonLabel}
            </Button>
            <Button mt="4" colorScheme="blue" onClick={handleCheckWhitelist}>
              Check Whitelist
            </Button>
          </FormControl>
        </form>{" "}
        {/* And this line */}
=======
        <FormControl id="wallet-address" onSubmit={handleWhitelistSubmit}>
          <FormLabel>Wallet Address</FormLabel>
          <Input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          <Button mt="4" colorScheme="teal" type="submit">
            {joinButtonLabel}
          </Button>
        </FormControl>
        <Button mt="4" colorScheme="teal" onClick={checkWhitelist}>
          Check Whitelist
        </Button>
>>>>>>> a0a72086c1aa8b1db88ccc3a1a494248b03d1c21
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
