import { makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import DialogBox from "../DialogBox";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "10px 20px",
    cursor: "pointer",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "16px",
    fontWeight: 600,
  },
}));

function DashboardPaperText(props) {
  const classes = useStyles();
  const [coursehandler, setCoursehandler] = useState(false);
  const Redirect = (link) => {
    window.location.assign(link);
  };
  return (
    <>
      <DialogBox
        open={coursehandler}
        handleClose={() => setCoursehandler(false)}
        title="This Feature will be soon available"
      />
      <Paper
        className={classes.paper}
        elevation={4}
        onClick={() =>
          props.link ? Redirect(props?.link) : setCoursehandler(true)
        }
      >
        <Typography className={classes.title}>{props.title}</Typography>
      </Paper>
    </>
  );
}

export default DashboardPaperText;
