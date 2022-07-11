import { extendTheme, useColorModeValue } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      fontFamily: "'Nunito Sans', sans-serif",
    },
  },
};

const components = {
  Text: {
    variants: {
      homeBold: {
        fontSize: "14px",
        fontWeight: "600",
      },
      home: {
        fontSize: "14px",
        fontWeight: "300",
      },
      detailBold: {
        fontSize: "16px",
        fontWeight: "600",
      },
      detail: {
        fontSize: "16px",
        fontWeight: "300",
      },
    },
  },
};



export default extendTheme({ styles, components });
