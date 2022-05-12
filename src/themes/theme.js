import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: "fixed",
      },
      styleOverrides: {
        root: {
          backgroundColor: "rgba(253, 253, 253, 0.95)",
          borderRadius: "0 0 5px 5px"
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: "text",
        size: "small",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: 10,
          margin: "0 .25rem",
          padding: ".25rem",
          ":hover": {
            backgroundColor: "rgba(102, 198, 243, 0.116)",
          },
        },
      },
    },
  },
});
