import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { ToggleMode } from "./components/ToggleModeBtn";
import { GameProvider } from "./context/GameContext";
import Scores from "./components/Scores";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App flex flex-col justify-evenly items-center p-2 md:h-screen">
      <GameProvider>
        <Header />
        <Main />
        <Scores />
        <ToggleMode />
        <Footer />
      </GameProvider>
    </div>
  );
}

export default App;
