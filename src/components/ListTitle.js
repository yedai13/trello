import { Typography, Box, InputBase } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MoreHoriz } from "@material-ui/icons";
import ContextAPI from "../ContextAPI";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(1),
    paddingTop: 5,
    display: "flex",
  },
  titleText: {
    flexGrow: 1,
    color: "#172b4d",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  input: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: theme.spacing(1, 1, 0, 1),
    padding: theme.spacing(1),
    borderRadius: 5,
    "&:focus": {
      background: "#fff",
      border: "solid 2px blue",
    },
  },
}));

const ListTitle = ({ titleCard, listId }) => {
  const { title, titleText, input } = useStyles();
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(titleCard);

  const { updateListTitle } = useContext(ContextAPI);

  const handleBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };
  return (
    <Box>
      {open ? (
        <InputBase
          autoFocus
          fullWidth
          inputProps={{ className: input }}
          onBlur={handleBlur}
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
        />
      ) : (
        <Box className={title} onClick={() => setOpen(true)}>
          <Typography className={titleText}>{titleCard}</Typography>
          <MoreHoriz />
        </Box>
      )}
    </Box>
  );
};

export default ListTitle;
