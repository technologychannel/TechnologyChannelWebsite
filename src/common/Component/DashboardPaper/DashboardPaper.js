import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "10px 20px",
    cursor: "pointer",
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
    width: "300px",
    objectFit: "contain",
  },
}));

function DashboardPaper(props) {
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
        {props.img && (
          <img src={props.img} alt={props.title} className={classes.img} />
        )}
      </Paper>
    </>
  );
}

export default DashboardPaper;
