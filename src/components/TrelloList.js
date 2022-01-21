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
    margin: theme.spacing(2),
  },
}));

const TrelloList = () => {
  const { paper } = useStyles();
  return (
    <Paper className={paper}>
      <ListTitle />
      <TrelloCard />
      <AddCardorList />
    </Paper>
  );
};

export default TrelloList;
