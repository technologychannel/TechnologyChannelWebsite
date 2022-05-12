import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles(() => ({
  body: {
    width: "90%",
    margin: "auto",
  }
}));

const Aboutus = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.body}>
        <Typography variant="h4">About Us</Typography>
        <br />
        <Box>
          <Typography variaant="body1">
            We provide tech content from youtube videos, websites, and apps. Our
            mission is to provide quality tech content to people and improve
            technical skills.{" "}
          </Typography>
          <br />
          <Typography variant="h5">
            Contact Us: info@technologychannel.org
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Aboutus;
