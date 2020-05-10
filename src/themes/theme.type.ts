export default interface Theme {
  palette: {
    primary: string;
    secondary: string;
    light: string;
    dark: string;
  };
  breakpoints: {
    xxl: number;
    xl: number;
    lg: number;
    md: number;
    sm: number;
    xs: number;
  };
  borderWidth: string;
};