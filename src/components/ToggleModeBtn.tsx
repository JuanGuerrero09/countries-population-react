import { useColorMode, Button } from "@chakra-ui/react";

export function ToggleMode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </header>
    )
  }