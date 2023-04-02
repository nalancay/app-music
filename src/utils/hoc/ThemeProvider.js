import { ThemeProvider } from "styled-components";
export const getTheme = () => {
  return {
    colors: {
      DarkRedSecondary: "#662323",
      RedPrincipal: "#E86060",
      white: "#FFFFFF",
      Gray: "#828282",
      Gray1: "#555555",
      Gray2: "#BDBDBD",
    },
  };
};

const AppThemeProvider = ({ children }) => (
  <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>
);

export default AppThemeProvider;
