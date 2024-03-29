import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// Customs ~ importing directly cause pages wont have to go into other screens
import Landing from '../screens/auth/landing'
import LandingCreator from '../screens/auth/landing-creator'
import Auth from '../screens/auth/auth'
const Tab = createMaterialTopTabNavigator()

export default function AuthNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={() => null}>
                <Tab.Screen name="Landing" component={Landing} />
                <Tab.Screen name="LandingCreator" component={LandingCreator} />
                <Tab.Screen name="Auth" component={Auth} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
