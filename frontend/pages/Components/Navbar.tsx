import { Box, Flex, Link, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "teal.500" : "gray.800"} color="white">
      <Flex align="center" justify="space-between" padding="1rem">
        <Link href="/" fontWeight="bold" fontSize="xl">
          WeMintArt
        </Link>
        <Flex>
          <Link href="/" mt="2" padding="0 1rem">
            Home
          </Link>
          <Link href="/claim-art" mt="2" padding="0 1rem">
            Claim Art
          </Link>
          <Link href="/about" mt="2" padding="0 1rem">
            About
          </Link>
          <Link href="/gallery" mt="2" padding="0 1rem">
            Gallery
          </Link>
          <Link href="/contact" mt="2" padding="0 1rem">
            Contact
          </Link>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
