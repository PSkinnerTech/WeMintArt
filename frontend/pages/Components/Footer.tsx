import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" p="4" mt="auto">
      <Text fontSize="sm">
        &copy; {new Date().getFullYear()} All rights reserved.
      </Text>
      <Text fontSize="sm">
        Built with{" "}
        <Link href="https://nextjs.org/" isExternal>
          Next.js
        </Link>{" "}
        and{" "}
        <Link href="https://chakra-ui.com/" isExternal>
          Chakra UI
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
