import {
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import { HiMoon, HiOutlineMoon } from "react-icons/hi";

const Nabvar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        p="20px 60px 20px"
        boxShadow="md"
      >
        <Heading fontSize="2xl">Where in the world?</Heading>
        <Flex
          onClick={toggleColorMode}
          alignItems="center"
          gap="10px"
          cursor="pointer"
          boxSize="border-box"
          padding="10px 16px"
          transition="0.3s ease-in-out"
          borderRadius="lg"
          _hover={{ bgColor: useColorModeValue("#eee", "#1b252d") }}
        >
          {colorMode === "light" ? (
            <HiOutlineMoon size="18px" />
          ) : (
            <HiMoon size="18px" />
          )}
          <Text variant="detailBold" textTransform="capitalize">
            Dark Mode
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Nabvar;
