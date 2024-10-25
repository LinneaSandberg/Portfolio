import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SmoothScroll from './components/SmoothScroll.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 60, // 1 hour
    },
  },
})

console.log("L           I   NNN     N   NNN     N   EEEEEE       AAA")
console.log("L           I   N  N    N   N  N    N   E           A   A")
console.log("L           I   N   N   N   N  N    N   EEE        AAAAAAA")
console.log("L           I   N    N  N   N    N  N   E         A       A")
console.log("L L L L L   I   N     NNN   N     NNN   EEEEEE   A         A")

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SmoothScroll>
          <App />
        </SmoothScroll>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
