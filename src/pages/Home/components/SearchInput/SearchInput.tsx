import { Input, InputGroup, InputLeftElement, useColorModeValue } from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
  return (
    <>
      <InputGroup width="400px">
        <InputLeftElement
          pointerEvents="none"
          children={<AiOutlineSearch color="gray.300" />}
        />
        <Input
          bgColor={useColorModeValue("#fff", "#2B3743")}
          type="text"
          placeholder="Search for a country"
          borderRadius="2px"
          boxShadow="md"
          p="10px 40px"
        />
      </InputGroup>
    </>
  );
};

export default SearchInput;
