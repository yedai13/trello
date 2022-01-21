import React, { useState } from "react";
import { InputBase, Paper, Box, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Clear } from "@material-ui/icons";

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

const AddCardOrListText = ({ type }) => {
  const [title, setTitle] = useState("");

  const { input, paper, confirm, button } = useStyles();

  return (
    <Box>
      <Paper className={paper}>
        <InputBase
          inputProps={{ className: input }}
          multiline
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
        <Button variant="contained" color="primary" className={button}>
          {type === "card" ? "Añadir tarjeta" : "Añadir lista"}
        </Button>
        <IconButton>
          <Clear />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AddCardOrListText;
