import react from "react";
import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {
    ...palette,
    background:{
      default:'red'
    }
  },
});

type Props = {
  children: react.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  return (
    <AppRouterCacheProvider>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </AppRouterCacheProvider>
  );
}
