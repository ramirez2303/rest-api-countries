import { useColorModeValue } from "@chakra-ui/react";
import { Route } from "wouter";
import Layout from "./layout";
import Home from "./pages/Home";

function App() {
  const colors = {
    background: useColorModeValue("hsl(0, 0%, 98%)", "hsl(207, 26%, 17%)"),
    element: useColorModeValue("hsl(0, 0%, 100%)", "hsl(209, 23%, 22%)"),
    input: useColorModeValue("hsl(0, 0%, 52%)", "hsl(209, 23%, 22%)"),
    text: useColorModeValue("hsl(200, 15%, 8%)", "hsl(0, 0%, 100%)"),
  };

  return (
    <div className="App">
      <Route component={Layout} path="/" />
    </div>
  );
}

export default App;
