import { createTheme } from "@mui/material";

const appTheme = {
    primary: "#00b89f",
    secondary: "#E98074",
    error: "#e74747",
};

const theme = createTheme({
    palette: {
        primary: {
            main: appTheme.primary,
        },
        secondary: {
            main: appTheme.secondary,
        },
    },
    typography: {
        fontFamily: [
            "montserrat-regular",
            "sf-pro-text",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: appTheme.primary
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    color: appTheme.error
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }
            }

        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: "#00b89f08",
                        cursor: "pointer",
                    }
                }
            }
        }
        // MuiButton: {
        //     styleOverrides: {
        //         root: {
        //             color: appTheme.primary
        //         }
        //     }
        // }
    },
});

export default theme;
