import { CssBaseline } from "@material-ui/core";
import "./App.css";
import TrelloList from "./components/TrelloList";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <TrelloList />
    </div>
  );
}

export default App;
