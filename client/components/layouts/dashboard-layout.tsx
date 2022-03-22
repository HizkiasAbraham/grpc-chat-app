import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme()

export const DashboardLayout = (props: any) => {
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        {children}
      </Box>
    </ThemeProvider>
  )
}
