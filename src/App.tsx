import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";

import { useColorMode, Button } from "@chakra-ui/react";

function Example() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'} Theme
      </Button>
    </header>
  )
}

function App() {
  return (
    <div className="App flex flex-col items-center p-4">
      <Header/>
      <Main/>
      <Example/>
    </div>
  );
}

export default App;
