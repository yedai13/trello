import React, { useState, useContext } from "react";
import { InputBase, Paper, Box, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Clear } from "@material-ui/icons";
import ContextAPI from "../ContextAPI";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(0, 1, 1, 1),
    padding: theme.spacing(1),
  },
  input: {
    fontSize: "0.87rem",
    color: "#172b4d",
    "&::placeholder": {
      color: "#5E6C84",
    },
  },
  confirm: {
    margin: theme.spacing(1),
  },
  button: {
    textTransform: "none",
  },
}));

const AddCardOrListText = ({ type, setOpen, listId }) => {
  const [title, setTitle] = useState("");
  const { addCard, addList } = useContext(ContextAPI);
  const { input, paper, confirm, button } = useStyles();

  const handleAddCardOrList = () => {
    if (type === "card") {
      if (title !== "") addCard(title, listId);
    } else {
      addList(title);
    }
    setTitle("");
    setOpen(false);
  };

  return (
    <Box>
      <Paper className={paper}>
        <InputBase
          autoFocus
          inputProps={{ className: input }}
          multiline
          onBlur={handleAddCardOrList}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={
            type === "card"
              ? "Introduzca un título para esta tarjeta..."
              : "Introduzca el título de la lista..."
          }
          value={title}
        />
      </Paper>
      <Box className={confirm}>
        <Button
          variant="contained"
          color="primary"
          className={button}
          onClick={handleAddCardOrList}
        >
          {type === "card" ? "Añadir tarjeta" : "Añadir lista"}
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <Clear />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AddCardOrListText;
