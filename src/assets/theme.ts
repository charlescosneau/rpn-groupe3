import { ThemeOptions } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'

// Create a theme instance.
const colors = {
  textBlack: '#1A1D1F',
  textWhite: 'white',
  textLight: '#747474',
  gradientStart: '#206A9B',
  gradientEnd: '#000714',
  blue: '#1F6898',
  bgGray: '#F4F4F4',
  bgBlue: '#F3F7FA',
  red: '#FF6A55',
  orange: '#FFB20F',
  orangeLight: '#FFAB76',
  green: '#74C99A',
}
const palette = {
  primary: {
    main: colors.blue,
    dark: colors.blue,
    light: `${colors.blue}5c`,
    contrastText: '#fff',
  },
  secondary: {
    main: colors.textLight,
    light: `${colors.textLight}5c`,
    dark: colors.textBlack,
    contrastText: colors.textBlack,
  },
  error: {
    main: colors.red,
    light: colors.red,
    dark: colors.red,
    contrastText: '#FFF',
  },
  warning: {
    main: colors.orange,
    light: colors.orange,
    dark: colors.orange,
    contrastText: '#FFF',
  },
  info: {
    main: '#000',
    light: '#000',
    dark: '#000',
    contrastText: '#FFF',
  },
  success: { main: colors.green, light: colors.green, dark: colors.green, contrastText: colors.textBlack },
  background: {
    paper: colors.bgGray,
    default: colors.bgGray,
  },
  text: {
    primary: colors.textBlack,
    secondary: colors.textBlack,
    disabled: colors.textLight,
  },
  gradient: {
    main: colors.gradientStart,
    dark: colors.gradientEnd,
  },
  backgroundBlue: { main: colors.bgBlue },
  action: {
    hover: colors.bgGray,
  },
}

const typography: TypographyOptions = {
    fontFamily: 'Inter',
    h1: {
      fontSize: '28px',
      fontWeight: '600',
      lineHeight: '48px',
      letterSpacing: '-0.5px',
    },
    h2: {
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '32px',
      letterSpacing: '-0.5px',
    },
    h3: {
      fontSize: '15px',
      fontWeight: '600',
      lineHeight: '24px',
      letterSpacing: '-0.15px',
    },
  }

const theme = {
    typography,
    palette: { ...palette },
    colors: { ...colors },
    components: {
      MuiGrid: {
        variants: [],
      },
      MuiTypography: {
        variants: [],
      },
    },
  }

const typeTheme = theme as ThemeOptions

export default typeTheme
