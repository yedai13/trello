import { Typography, Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MoreHoriz } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
  },
  titleText: {
    flexGrow: 1,
    color: "#172b4d",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
}));

const ListTitle = () => {
  const { title, titleText } = useStyles();
  return (
    <Box className={title}>
      <Typography className={titleText}>To do</Typography>
      <MoreHoriz />
    </Box>
  );
};

export default ListTitle;
