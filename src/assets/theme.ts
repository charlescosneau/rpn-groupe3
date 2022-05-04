import { ThemeOptions } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'

// Create a theme instance.
const font = "'Montserrat', sans-serif";


const palette = {
  type: 'light',
  primary: {
    main: '#0060ff',
  },
  secondary: {
    main: '#ffc300',
    contrastText: '#ffffff',
  },
  info: {
    main: '#00AEFF',
    contrastText: '#ffffff',
  },
}

const typography: TypographyOptions = {
  fontFamily: font,
  fontSize: 14,
  fontWeightLight: 400,
  fontWeightRegular: 600,
  fontWeightMedium: 700,
}

const theme = {
    typography,
    palette: { ...palette },
}

const typeTheme = theme as ThemeOptions

export default typeTheme
