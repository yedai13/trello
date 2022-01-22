import React from "react";
import { Paper } from "@material-ui/core";
import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";
import AddCardorList from "./AddCardOrList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 300,
    backgroundColor: "#EBECF0",
    margin: theme.spacing(1),
  },
}));

const TrelloList = ({ list }) => {
  const { paper } = useStyles();
  return (
    <Paper className={paper}>
      <ListTitle titleCard={list.title} listId={list.id} />
      {list.cards.map((card) => (
        <TrelloCard card={card} key={card.id} />
      ))}
      <AddCardorList type="card" />
    </Paper>
  );
};

export default TrelloList;
