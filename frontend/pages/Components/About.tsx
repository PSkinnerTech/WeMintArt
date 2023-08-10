import React from "react";
import { Box, Flex, Heading, Text, Center } from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <Flex
      direction={["column", "row"]}
      height="100%"
      padding="2rem"
      backgroundColor="white"
      color="black"
    >
      <Center flex="1" height="100%">
        <Box
          width="500px"
          height="500px"
          backgroundImage="url(/assets/faces/faces.gif)"
          backgroundSize="cover"
          backgroundPosition="center"
        />
      </Center>
      <Center flex="1" height="100%" flexDirection="column">
        <Heading as="h2" size="xl" marginBottom="1rem">
          About Faces by Larry Stewart
        </Heading>
        <Text
          maxWidth="80%"
          textAlign="center"
          padding="1rem"
          fontSize="lg"
          lineHeight="1.5"
        >
          Faces by Larry Stewart is a unique collection of 300 handcrafted
          faces, each with its own personality and story. Explore the collection
          and find the face that resonates with you.
        </Text>
      </Center>
    </Flex>
  );
};

export default About;
