import { Collapse, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import AddCardOrListText from "./AddCardOrListText";

const AddCardorList = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Collapse in={open}>
        <AddCardOrListText />
      </Collapse>

      <Collapse in={!open}>
        <Paper>
          <Typography>+ Add a card</Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

export default AddCardorList;
