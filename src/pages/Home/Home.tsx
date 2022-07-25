import { Container, Flex } from "@chakra-ui/react";
import FilterMenu from "./components/FilterMenu";
import SearchInput from "./components/SearchInput";

const Home = () => {
  return (
    <Container maxWidth="container.xl" gap="100px">
      <Flex justifyContent="space-between" alignItems="center">
        <SearchInput />
        <FilterMenu />
      </Flex>
      <Flex>
        
      </Flex>
    </Container>
  );
};

export default Home;
