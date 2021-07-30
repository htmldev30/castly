import React, { useContext } from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

// Customs
import { fonts } from '../styles/global'
import { AuthenticationContext } from './hooks/context/AuthenticationProvider'
import UserProfileProvider from './hooks/context/UserProfileProvider'
// Components
import AuthNavigation from './routes/authNavigation'
import Navigation from './routes/navigation'
export default function Index() {
    let [fontsLoaded] = useFonts(fonts)
    const { isAuthenticated } = useContext(AuthenticationContext)
    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        if (isAuthenticated) {
            return (
                <UserProfileProvider>
                    <Navigation />
                </UserProfileProvider>
            )
        } else {
            return <AuthNavigation />
        }
    }
}
