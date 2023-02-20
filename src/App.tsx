import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { ToggleMode } from "./components/ToggleModeBtn";



function App() {
  return (
    <div className="App flex flex-col items-center p-4">
      <Header/>
      <Main/>
      <ToggleMode/>
    </div>
  );
}

export default App;
