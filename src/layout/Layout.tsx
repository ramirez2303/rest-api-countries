import { Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Nabvar from "../components/Nabvar";

const Layout: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  const background = useColorModeValue("hsl(0, 0%, 98%)", "hsl(207, 26%, 17%)");

  return (
    <>
      <Stack w="100%" h="100%" bgColor={background}>
        <Nabvar />
        <Stack>{children}</Stack>
      </Stack>
    </>
  );
};

export default Layout;
