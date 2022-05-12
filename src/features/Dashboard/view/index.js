import { Box, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import DashboardPaper from "../../../common/Component/DashboardPaper/DashboardPaper";
import DashboardPaperText from "../../../common/Component/DashboardPaper/DashboardPaperText";

const useStyles = makeStyles(() => ({
  body: {
    width: "90%",
    margin: "auto",
  },
  app: {
    marginTop: "32px",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1000px)");
  const matches1 = useMediaQuery("(min-width:750px)");
  const matches2 = useMediaQuery("(min-width:450px)");
  const matches3 = useMediaQuery("(min-width:0px)");
  return (
    <>
      <Box className={classes.body}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3">Tutorials</Typography>
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaper
              title="DART"
              img="/TechnologyChannelWebsite/assets/dart.png"
              link="https://dart-tutorial.com/"
            />
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaper title="GOLANG" img="/TechnologyChannelWebsite/assets/golang.png" />
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaper
              title="JAVA"
              img="/TechnologyChannelWebsite/assets/java.png"
              link="https://javaguide.technologychannel.org/"
            />
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaper title="C PROOGRAMMING" img="/TechnologyChannelWebsite/assets/c.png" />
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaper
              title="Computer Basic"
              img="/TechnologyChannelWebsite/assets/computerbasic.png"
            />
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaper title="C#" img="/TechnologyChannelWebsite/assets/cSharp.png" />
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaper title="SQL" img="/TechnologyChannelWebsite/assets/sql.png" />
          </Grid>
        </Grid>

        <Grid container spacing={4} className={classes.app}>
          <Grid item xs={12}>
            <Typography variant="h3">Our Apps</Typography>
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaper
              title="Computer Basic Guide"
              img="/TechnologyChannelWebsite/assets/computerbasic.png"
              link="https://play.google.com/store/apps/details?id=computerbasicguide.com"
            />
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaper title="Java Guide" img="/TechnologyChannelWebsite/assets/java.png" />
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaper title="HTML Guide" img="/TechnologyChannelWebsite/assets/html.png" />
          </Grid>
        </Grid>

        <Grid container spacing={4} mt={2} className={classes.app}>
          <Grid item xs={12}>
            <Typography variant="h3">Tools</Typography>
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaperText title="Privacy Policy Generator" />
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaperText title="Color Picker" />
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaperText title="About Us Generator" />
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaperText title="Downloads" />
          </Grid>
        </Grid>

        <Grid container spacing={4} mt={2} className={classes.app}>
          <Grid item xs={12}>
            <Typography variant="h3">Quiz</Typography>
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaperText title="JAVA Quiz" />
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaperText title="SQL Quiz" />
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaperText title="Dart Quiz" />
          </Grid>
          <Grid
            item
            xs={
              (matches && 3) ||
              (matches1 && 4) ||
              (matches2 && 6) ||
              (matches3 && 12)
            }
          >
            <DashboardPaperText title="Python Quiz" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
