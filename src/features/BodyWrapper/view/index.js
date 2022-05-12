import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
import { Outlet, useNavigate } from "react-router-dom";
import { BottomNavigation, makeStyles, Paper } from "@material-ui/core";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.35),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

const useStyles = makeStyles(() => ({
  body: {
    minHeight: "100vh",
    height: "100%",
    backgroundColor: "#eaeded",
  },
  footer: {
    backgroundColor: "#110a0b",
    width: "100%",
    color: "#fff",
    alignItems: "center",
  },
  link: {
    cursor: "pointer",
  },
  bottom: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

const BodyWrapper = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <Box className={classes.body}>
        <Box sx={{ flexGrow: 1, height: "100%" }} mb={4}>
          <AppBar position="static" sx={{ backgroundColor: "#110a0b" }}>
            <Toolbar>
              <img
                onClick={() => navigate("/")}
                className={classes.link}
                src="/TechnologyChannelWebsite/assets/logo.png"
                alt="logo"
                style={{ width: "45px", height: "45px" }}
              />
              <Typography
                className={classes.link}
                onClick={() => navigate("/")}
                variant="h5"
                noWrap
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Technology Channel
              </Typography>
              {/* <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search> */}
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ pb: 15, height: "100%" }}>
          <Outlet />
        </Box>
        <Paper className={classes.bottom} elevation={3}>
          <BottomNavigation className={classes.footer}>
            <Typography>
              <span
                onClick={() => navigate("/aboutus")}
                className={classes.link}
              >
                About Us
              </span>
              <span> | </span>
              <span
                onClick={() => navigate("/privacypolicy")}
                className={classes.link}
              >
                Privacy Policy
              </span>
            </Typography>
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
};

export default BodyWrapper;
