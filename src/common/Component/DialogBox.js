import { Box, Dialog, DialogTitle, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    paper: {
      padding: "10px 20px",
    },
  }));
const DialogBox = (props) => {
    const classes = useStyles();
  return (
    <Dialog onClose={props.handleClose} open={props.open}>
      <DialogTitle>{props.title}</DialogTitle>
      <Box className={classes.paper} >{props.children}</Box>
    </Dialog>
  );
};

export default DialogBox;
