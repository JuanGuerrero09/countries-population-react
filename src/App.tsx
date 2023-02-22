import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { ToggleMode } from "./components/ToggleModeBtn";
import { GameProvider } from "./context/GameContext";
import Scores from "./components/Scores";

function App() {
  return (
    <div className="App flex flex-col items-center p-4">
      <GameProvider>
        <Header />
        <Main />
        <Scores />
        <ToggleMode />
      </GameProvider>
    </div>
  );
}

export default App;
