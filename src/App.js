import { useState } from "react";
import "./App.css";
import { CssBaseline, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TrelloList from "./components/TrelloList";
import AddCardOrList from "./components/AddCardOrList";
import backgoundMontain from "./img/montañas.jpg";
import mockData from "./mockdata";
import ContextAPI from "./ContextAPI";
import uuid from "react-uuid";

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
  const [data, setData] = useState(mockData);
  const { background, container } = useStyles();

  const updateListTitle = (updatedTitle, listId) => {
    const list = data.lists[listId];
    list.title = updatedTitle;
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    });
  };

  const addCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title: title,
    };
    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];
    setData({
      ...data,
      lists: {
        ...data.lists,
        listId: list,
      },
    });
  };
  const addList = () => {};

  return (
    <ContextAPI.Provider value={{ addCard, addList, updateListTitle }}>
      <Box className={background}>
        <CssBaseline />
        <Box className={container}>
          {data.listIds.map((listId) => {
            const list = data.lists[listId];
            return <TrelloList list={list} key={listId} />;
          })}

          <AddCardOrList type="list" />
        </Box>
      </Box>
    </ContextAPI.Provider>
  );
}

export default App;
