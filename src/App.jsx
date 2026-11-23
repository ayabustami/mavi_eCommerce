import { QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import './App.css'
import Router from './router/Router'
import { RouterProvider } from 'react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import {getTheme} from './theme/theme'
import { UseThemeStore } from './store/UseThemeStore'

const queryClient = new QueryClient()


function App() {
  const mode=UseThemeStore((state)=>state.mode)
  const theme= getTheme(mode);
  return <>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline/>
        <div className="App">  
            <RouterProvider router={Router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  </>

}

export default App
