import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import { NavigationProvider } from './contexts/NavigationContext'
import RootLayout from './layout/RootLayout'
import './App.css'

const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
}

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.3
}

function App() {
    const element = useRoutes(routes)
    const location = useLocation()

    return (
        <NavigationProvider>
            <RootLayout>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                    >
                        {element}
                    </motion.div>
                </AnimatePresence>
            </RootLayout>
        </NavigationProvider>
    )
}

export default App
