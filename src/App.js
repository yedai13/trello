import { CssBaseline } from "@material-ui/core";
import "./App.css";
import TrelloList from "./components/TrelloList";
import backgoundMontain from "./img/montañas.jpg";

import { makeStyles } from "@material-ui/core/styles";
import AddCardOrList from "./components/AddCardOrList";

const useStyles = makeStyles((theme) => ({
  background: {
    minHeight: "100vh",
    backgroundImage: `url(${backgoundMontain})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  container: {
    display: "flex",
  },
}));

function App() {
  const { background, container } = useStyles();
  return (
    <div className={background}>
      <CssBaseline />
      <div className={container}>
        <TrelloList />
        <TrelloList />
        <TrelloList />
        <AddCardOrList />
      </div>
    </div>
  );
}

export default App;
