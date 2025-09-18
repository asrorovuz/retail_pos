import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { AuthProvider, GlobalStoreProvider, QueryProvider } from './app/providers'
import "./app/styles/index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <AuthProvider>
        <GlobalStoreProvider>

          <App />
        </GlobalStoreProvider>
      </AuthProvider>
    </QueryProvider>
  </StrictMode>,
)
