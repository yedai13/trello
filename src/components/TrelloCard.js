import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  trelloCard: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    color: "#172b4d",
  },
}));

const TrelloCard = ({ card }) => {
  const { trelloCard } = useStyles();
  return (
    <div>
      <Paper className={trelloCard}>{card.title}</Paper>
    </div>
  );
};

export default TrelloCard;
