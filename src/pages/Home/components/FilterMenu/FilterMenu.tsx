import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";

const FilterMenu = () => {
  return (
    <Menu>
      <MenuButton
        bgColor={useColorModeValue("#fff", "#2B3743")}
        boxShadow="md"
        fontWeight="300"
        p="27px 20px"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        Filter by Region
      </MenuButton>
      <MenuList>
        <MenuItem>Africa</MenuItem>
        <MenuItem>America</MenuItem>
        <MenuItem>Asia</MenuItem>
        <MenuItem>Europe</MenuItem>
        <MenuItem>Oceania</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default FilterMenu;
