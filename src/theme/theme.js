import { createTheme } from '@mui/material/styles'
import palette from './palette'
import typography from './typography'

const theme = createTheme({
  spacing:4,
  breakpoints:{
    xs:320,
    sm:600,
    md:900,
    lg:1200,
    xl:1536,
    xll:1920
  },
  palette,
  typography,
})



export default theme;