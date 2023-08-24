import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" p="4" mt="auto">
      <Text fontSize="sm">
        WeMintArt&copy; {new Date().getFullYear()} All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
