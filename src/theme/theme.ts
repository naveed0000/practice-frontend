"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    // Define your breakpoint values
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    mode: "light",
    primary: {
      main: "#4A00E0",
      "50": "#4A00E0",
      "100": "#4A00E0",
      "200": "#4A00E0",
      "300": "#4A00E0",
      "400": "#4A00E0",
      "500": "#4A00E0",
      "600": "#4A00E0",
      "700": "#4A00E0",
      "800": "#4A00E0",
      "900": "#4A00E0",
      A100: "#4A00E0",
      A200: "#4A00E0",
      A400: "#4A00E0",
      A700: "#4A00E0",
      contrastText: "#fff",
      dark: "#4A00E0",
      light: "#4A00E0",
    },
    secondary: {
      main: "#8E2DE2",
      "50": "#8E2DE2",
      "100": "#8E2DE2",
      "200": "#8E2DE2",
      "300": "#8E2DE2",
      "400": "#8E2DE2",
      "500": "#8E2DE2",
      "600": "#8E2DE2",
      "700": "#8E2DE2",
      "800": "#8E2DE2",
      "900": "#8E2DE2",
      A100: "#8E2DE2",
      A200: "#8E2DE2",
      A400: "#8E2DE2",
      A700: "#8E2DE2",
      contrastText: "#fff",
      dark: "#8E2DE2",
      light: "#8E2DE2",
    },
    error: {
      main: "#FF0000",
      "50": "#FF0000",
      "100": "#FF0000",
      "200": "#FF0000",
      "300": "#FF0000",
      "400": "#FF0000",
      "500": "#FF0000",
      "600": "#FF0000",
      "700": "#FF0000",
      "800": "#FF0000",
      "900": "#FF0000",
      A100: "#FF0000",
      A200: "#FF0000",
      A400: "#FF0000",
      A700: "#FF0000",
      contrastText: "#fff",
      dark: "#FF0000",
      light: "#FF0000",
    },
    warning: {
      main: "#FFA500",
      "50": "#FFA500",
      "100": "#FFA500",
      "200": "#FFA500",
      "300": "#FFA500",
      "400": "#FFA500",
      "500": "#FFA500",
      "600": "#FFA500",
      "700": "#FFA500",
      "800": "#FFA500",
      "900": "#FFA500",
      A100: "#FFA500",
      A200: "#FFA500",
      A400: "#FFA500",
      A700: "#FFA500",
      contrastText: "#fff",
      dark: "#FFA500",
      light: "#FFA500",
    },
    info: {
      main: "#0000FF",
      "50": "#0000FF",
      "100": "#0000FF",
      "200": "#0000FF",
      "300": "#0000FF",
      "400": "#0000FF",
      "500": "#0000FF",
      "600": "#0000FF",
      "700": "#0000FF",
      "800": "#0000FF",
      "900": "#0000FF",
      A100: "#0000FF",
      A200: "#0000FF",
      A400: "#0000FF",
      A700: "#0000FF",
      contrastText: "#fff",
      dark: "#0000FF",
      light: "#0000FF",
    },
    success: {
      main: "#00FF00",
      "50": "#00FF00",
      "100": "#00FF00",
      "200": "#00FF00",
      "300": "#00FF00",
      "400": "#00FF00",
      "500": "#00FF00",
      "600": "#00FF00",
      "700": "#00FF00",
      "800": "#00FF00",
      "900": "#00FF00",
      A100: "#00FF00",
      A200: "#00FF00",
      A400: "#00FF00",
      A700: "#00FF00",
      contrastText: "#fff",
      dark: "#00FF00",
      light: "#00FF00",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#D5D5D5",
      A200: "#AAAAAA",
      A400: "#303030",
      A700: "#616161",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    getContrastText: (backgroundColor: string) => {
      // Convert HEX → RGB
      const hex = backgroundColor.replace("#", "");
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);

      // YIQ formula for brightness
      const yiq = r * 0.299 + g * 0.587 + b * 0.114;
      return yiq > 186 ? "#000" : "#fff";
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      default: "#fff",
      paper: "#fff",
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
    },
  },
  spacing: 3,
  shape: {
    borderRadius: 1.5,
  },
  // toRuntimeSource: f i()
  //alpha: f alpha()
  //lighten: f lighten()
  //darken: f darken()
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-roboto)",
  },


     
});

export default theme;
