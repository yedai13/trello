import React from "react";
import { Paper } from "@material-ui/core";
import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";
import AddCardorList from "./AddCardOrList";

const TrelloList = () => {
  return (
    <Paper>
      <ListTitle />
      <TrelloCard />
      <AddCardorList />
    </Paper>
  );
};

export default TrelloList;
