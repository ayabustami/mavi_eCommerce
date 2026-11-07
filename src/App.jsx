import { QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import './App.css'
import Router from './router/Router'
import { RouterProvider } from 'react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()

function App() {
  return <>
    <QueryClientProvider client={queryClient}>
      <div className="App">
            
                <RouterProvider router={Router} />
          
        <ReactQueryDevtools initialIsOpen={false} />

      </div>
    </QueryClientProvider>
  </>

}

export default App
