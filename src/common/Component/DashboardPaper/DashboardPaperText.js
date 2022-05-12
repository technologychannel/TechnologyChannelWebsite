import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "10px 20px",
    cursor: "pointer",
    height:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  title: {
    fontSize: "16px",
    fontWeight: 600,
  },
}));

function DashboardPaperText(props) {
  const classes = useStyles();

  const Redirect = (link) => {
    window.location.assign(link);
  };
  return (
    <>
      <Paper
        className={classes.paper}
        elevation={4}
        onClick={() => Redirect(props.link)}
      >
        <Typography className={classes.title}>{props.title}</Typography>
      </Paper>
    </>
  );
}

export default DashboardPaperText;
