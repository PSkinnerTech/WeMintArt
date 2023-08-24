import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { writeToSheet, checkIfClaimed } from "../utils/googleSheets";

const ClaimArt: NextPage = () => {
  const [artClaimed, setArtClaimed] = useState<boolean | null>(null);
  const [shippingDetails, setShippingDetails] = useState<string>("");

  useEffect(() => {
    const fetchClaimedStatus = async () => {
      try {
        const response = await fetch("/api/checkClaimed");
        const claimedStatusArray = await response.json();
        setArtClaimed(claimedStatusArray[0]);
      } catch (error) {
        console.error("Failed to fetch claimed status:", error);
      }
    };

    fetchClaimedStatus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dataToWrite = [new Date().toISOString(), shippingDetails];
    try {
      const response = await fetch("/api/writeToSheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToWrite),
      });

      if (response.ok) {
        alert("Shipping details saved successfully!");
      } else {
        throw new Error("Failed to save shipping details");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to save shipping details. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <Heading size="xl" textAlign="center" pb="3">
          Claim Art
        </Heading>
        {artClaimed === null ? (
          <Text>Loading...</Text>
        ) : artClaimed ? (
          <Text>This Art Has Already Been Claimed.</Text>
        ) : (
          <form onSubmit={handleSubmit}>
            <FormControl id="shipping-details">
              <FormLabel>Shipping Details</FormLabel>
              <Input
                type="text"
                value={shippingDetails}
                onChange={(e) => setShippingDetails(e.target.value)}
              />
              <Button m="4" colorScheme="teal" type="submit">
                Submit
              </Button>
            </FormControl>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ClaimArt;
