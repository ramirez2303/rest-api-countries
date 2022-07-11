import { useColorModeValue } from "@chakra-ui/react";
import { Route } from "wouter";
import LayoutHome from "./layout/LayoutHome";

function App() {
  const colors = {
    element: useColorModeValue("hsl(0, 0%, 100%)", "hsl(209, 23%, 22%)"),
    input: useColorModeValue("hsl(0, 0%, 52%)", "hsl(209, 23%, 22%)"),
    text: useColorModeValue("hsl(200, 15%, 8%)", "hsl(0, 0%, 100%)"),
  };

  return (
    <div className="App">
      <Route component={LayoutHome} path="/" />
    </div>
  );
}

export default App;
