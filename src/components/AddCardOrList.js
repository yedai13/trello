import { Box, Collapse, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import AddCardOrListText from "./AddCardOrListText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  collapseContainer: {
    marginTop: theme.spacing(1),
  },
  addCardOrListText: {
    backgroundColor: "#EBECF0",
    boxShadow: "none",
    margin: theme.spacing(0, 1, 1, 1),
    padding: theme.spacing(1),
    color: "#5E6C84",
    "&:hover": {
      // backgroundColor: fade("#000", 0.25),
      backgroundColor: "#dadce2",
      color: "#172b4d",
      cursor: "pointer",
    },
  },
}));

const AddCardorList = ({ type }) => {
  const [open, setOpen] = useState(true);

  const { addCardOrListText, collapseContainer } = useStyles();
  return (
    <Box className={collapseContainer}>
      <Collapse in={open}>
        <AddCardOrListText type={type} />
      </Collapse>

      <Collapse in={!open}>
        <Paper className={addCardOrListText}>
          <Typography variant="body2">
            {type === "card" ? "+ Añadir una tarjeta" : "+ Añadir otra lista"}
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default AddCardorList;
