import { createTheme } from "@mui/material/styles";

const theme = () => {
  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: {
      h3: {
        fontSize: "1.5rem",
        fontWeight: 600,
      },
      h4: {
        fontSize: "1.25rem",
        fontWeight: 600,
      },
      h5:{
        fontSize:"1rem",
        fontWeight: 600,
      }
    }
  });
};

// import 'overrides-mui'

export default theme;
