import { createTheme } from '@mui/material/styles'
import { lightPalette, darkPalette } from './palette'
import typography from './typography'


export const getTheme=(mode)=>{
  return createTheme({
 cssVariables: { colorSchemeSelector: 'class' },
    palette: {
  ...(mode === 'light' ? lightPalette : darkPalette),
  mode,
},
  spacing: 4,
  breakpoints: {
    values: {
      xs: 320,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xll: 1920,
    },
  },
  typography,
})
}