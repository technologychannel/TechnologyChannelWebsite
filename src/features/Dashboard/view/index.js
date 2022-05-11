import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import DashboardPaper from "../../../common/Component/DashboardPaper/DashboardPaper";

const useStyles = makeStyles(() => ({
  body: {
    width: "80%",
    margin: "auto",
  },
  title: {
    fontSize: "24px",
    fontWeight: 600,
  },
  app:{
      marginTop:"16px",
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.body}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography className={classes.title}>Tutorials</Typography>
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="DART" img="/assets/dart.png" link="https://dart-tutorial.com/" />
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="GOLANG" img="/assets/golang.png" />
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="JAVA" img="/assets/java.png" link="https://javaguide.technologychannel.org/"  />
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="C PROOGRAMMING" img="/assets/c.png"  />
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="Computer Basic" img="/assets/computerbasic.png" />
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="C#" img="/assets/cSharp.png"  />
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="SQL" img="/assets/sql.png"  />
          </Grid>
        </Grid>

        <Grid container spacing={4} className={classes.app}>
          <Grid item xs={12}>
            <Typography className={classes.title}>Our Apps</Typography>
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="Computer Basic Guide" img="/assets/computerbasic.png" />
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="Java Guide" img="/assets/java.png" />
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="HTML Guide" img="/assets/html.png"  />
          </Grid>         
        </Grid>

        <Grid container spacing={4} mt={2} className={classes.app}>
          <Grid item xs={12}>
            <Typography className={classes.title}>Tools</Typography>
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="Privacy Policy Generator" />
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="Color Picker" />
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="About Us Generator"  />
          </Grid>    
          <Grid item xs={3}>
            <DashboardPaper title="Downloads"   />
          </Grid>      
        </Grid>

        <Grid container spacing={4} mt={2} className={classes.app}>
          <Grid item xs={12}>
            <Typography className={classes.title}>Quiz</Typography>
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="JAVA Quiz" />
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="SQL Quiz" />
          </Grid>
          <Grid item xs={3}>
            <DashboardPaper title="Dart Quiz"  />
          </Grid>    
          <Grid item xs={3}>
            <DashboardPaper title="Python Quiz"   />
          </Grid>      
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
