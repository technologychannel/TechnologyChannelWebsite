import { Box, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import DashboardPaper from "../../../common/Component/DashboardPaper/DashboardPaper";
import DashboardPaperText from "../../../common/Component/DashboardPaper/DashboardPaperText";
import Dart from "../../../common/assets/dart.png"
import Golan from "../../../common/assets/golang.png"
import Java from "../../../common/assets/java.png"
import C from "../../../common/assets/c.png"
import ComputerBasic from "../../../common/assets/computerbasic.png"
import CSharp from "../../../common/assets/cSharp.png"
import SQL from "../../../common/assets/sql.png"
import HTML from "../../../common/assets/html.png"

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
              img={Dart}
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
            <DashboardPaper title="GOLANG" img={Golan}/>
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
              img={Java}
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
            <DashboardPaper title="C PROOGRAMMING" img={C} />
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
              img={ComputerBasic}
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
            <DashboardPaper title="C#" img={CSharp} />
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
            <DashboardPaper title="SQL" img={SQL} />
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
              img={ComputerBasic}
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
            <DashboardPaper title="Java Guide" img={Java} />
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
            <DashboardPaper title="HTML Guide" img={HTML} />
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
