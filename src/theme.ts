import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#232323',
      },
      secondary: {
        main: '#48AAF0',
      },
    },
    typography: {
        fontFamily: "Quicksand"
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;