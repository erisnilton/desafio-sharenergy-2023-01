import { createTheme, Theme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const palette: PaletteOptions = {
  primary: {
    main: "#161C2D",
  },
  background: {
    default: "##abb8c3;",
  },
  error: { main: red.A400 },
  action: { active: "#FFF", hover:"#00A2A2" },
  text: { primary: "#6E727D", secondary: "#161C2D" },
};

const theme = createTheme({
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: palette.background?.default,
      },
    },
    MuiDialog: {
      paper: {
        backgroundColor: palette.background?.default,
      },
    },
    MuiDivider: { root: { backgroundColor: palette.text?.secondary } },
    MuiCssBaseline: {
      "@global": {
        "html, body, #root>div:nth:child(2)": { height: "100%" },
        body: { overflowX: "hidden" },
      },
    },
  },
});

export default theme;

const backgroundColor = "#3b3b3a";

export const menuTheme = (theme: Theme): Theme => ({
  ...theme,
  overrides: {
    ...theme.overrides,
    MuiPaper: {
      root: {
        backgroundColor,
        padding: "0 10px",
        width: "300px",
      },
    },
    MuiMenuItem: {
      root: {
        borderBottom: "2px solid transparent",
        "&:hover": { borderBottom: "2px solid #ffde39", backgroundColor },
      },
    },
  },
});

export const BANNER_VIDEO_ACTIONS_MEDIA_QUERY = 700;
