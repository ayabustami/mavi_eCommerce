import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import './App.css'
import Router from './router/Router'
import { RouterProvider } from 'react-router'

const queryClient = new QueryClient()

function App() {
  return <>
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={Router} />
      </div>
    </QueryClientProvider>
  </>

}

export default App
