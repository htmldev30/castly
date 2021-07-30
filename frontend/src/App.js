import React from 'react'
import AuthenticationProvider from './hooks/context/AuthenticationProvider'
import { registerRootComponent } from 'expo' // import it explicitly
import Index from './index'
function App() {
    return (
        <AuthenticationProvider>
            <Index />
        </AuthenticationProvider>
    )
}

export default registerRootComponent(App)
