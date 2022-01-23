import React from "react";
import { Paper } from "@material-ui/core";
import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";
import AddCardorList from "./AddCardOrList";
import { makeStyles } from "@material-ui/core/styles";
import { Draggable, Droppable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 300,
    backgroundColor: "#EBECF0",
    margin: theme.spacing(1),
  },
}));

const TrelloList = ({ list, index }) => {
  const { paper } = useStyles();
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Paper className={paper}>
            <ListTitle titleCard={list.title} listId={list.id} />
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {list.cards.map((card, index) => (
                    <TrelloCard card={card} key={card.id} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <AddCardorList type="card" listId={list.id} />
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloList;
