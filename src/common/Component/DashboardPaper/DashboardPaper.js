import { makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import DialogBox from "../DialogBox";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "10px 20px",
    cursor: "pointer",
    height: "100%",
  },
  title: {
    fontSize: "16px",
    fontWeight: 600,
  },
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "120px",
    width: "100%",
    objectFit: "contain",
    padding: "10px 0",
  },
}));

function DashboardPaper(props) {
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
        title="Couse will be soon available"
      />
      <Paper
        className={classes.paper}
        elevation={4}
        onClick={() =>
          props.link ? Redirect(props?.link) : setCoursehandler(true)
        }
      >
        <Typography className={classes.title}>{props.title}</Typography>
        {props.img && (
          <img src={props.img} alt={props.title} className={classes.img} />
        )}
      </Paper>
    </>
  );
}

export default DashboardPaper;
