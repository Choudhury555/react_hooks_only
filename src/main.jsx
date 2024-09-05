import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { OwnProvider } from './components/UseContext.jsx'

createRoot(document.getElementById('root')).render(
    <OwnProvider>
    <App />
    </OwnProvider>
)
