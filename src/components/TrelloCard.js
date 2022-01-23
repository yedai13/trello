import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  trelloCard: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    color: "#172b4d",
  },
}));

const TrelloCard = ({ card, index }) => {
  const { trelloCard } = useStyles();
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className={trelloCard}>{card.title}</Paper>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
