import { Box, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles(() => ({
  body: {
    width: "90%",
    margin: "auto",
  },
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
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Typography variant="h5">Contact Us :</Typography>
            </Grid>
            <Grid item xs={10}>
              <Link variant="h5" href="mailto:info@technologychannel.org">
                info@technologychannel.org
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h5">Facebook :</Typography>
            </Grid>
            <Grid item xs={10}>
              <Link
                variant="h5"
                href="https://www.facebook.com/technologychannelnepal"
              >
                https://www.facebook.com/technologychannelnepal
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h5">Facebook Group :</Typography>
            </Grid>
            <Grid item xs={10}>
              <Link
                variant="h5"
                href=" https://www.facebook.com/groups/technologychannel"
              >
                https://www.facebook.com/groups/technologychannel
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Aboutus;
