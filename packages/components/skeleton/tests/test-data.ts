import { theme as baseTheme } from "@chakra-ui/theme"

export const breakpoints = {
  base: "0px",
  sm: "100px",
  md: "200px",
  lg: "300px",
  xl: "400px",
  "2xl": "600px",
  customBreakpoint: "500px",
}

export const theme = { ...baseTheme, breakpoints }

export const queries = {
  base: "(min-width: 0px) and (max-width: 99px)",
  sm: "(min-width: 100px) and (max-width: 199px)",
  md: "(min-width: 200px) and (max-width: 299px)",
  lg: "(min-width: 300px) and (max-width: 399px)",
  xl: "(min-width: 400px) and (max-width: 499px)",
  customBreakpoint: "(min-width: 500px)",
}
