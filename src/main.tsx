import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import App from './App'
import './index.css'
import LoadingSpinner from './components/Misc/LoadingSpinner'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback={<LoadingSpinner />}>
                <AnimatePresence mode="wait">
                    <App />
                </AnimatePresence>
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
)
