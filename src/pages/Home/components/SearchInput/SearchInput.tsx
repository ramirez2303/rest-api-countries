import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<AiOutlineSearch color="gray.300" />}
        />
        <Input type="text" placeholder="Search" />
      </InputGroup>
    </>
  );
};

export default SearchInput;
