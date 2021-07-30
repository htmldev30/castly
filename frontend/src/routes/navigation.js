import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeIcon, UserIcon } from 'react-native-heroicons/solid'
import {
    HomeIcon as HomeIconOutline,
    UserIcon as UserIconOutline,
} from 'react-native-heroicons/outline'
// Customs
import DashboardStackScreens from './stacks/dashboardStack'
import ProfileStackScreens from './stacks/profileStack'
import { globalColors } from '../../styles/global'
const Tab = createBottomTabNavigator()
export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarLabel: () => {
                        return null
                    },
                    tabBarIcon: ({ focused, size }) => {
                        if (route.name === 'Dashboard') {
                            if (focused) {
                                return (
                                    <HomeIcon
                                        color={globalColors.primary_default}
                                        size={size}
                                    />
                                )
                            } else {
                                return (
                                    <HomeIconOutline
                                        color={globalColors.primary_default}
                                        size={size}
                                    />
                                )
                            }
                        }
                        if (route.name === 'Profile') {
                            if (focused) {
                                return (
                                    <UserIcon
                                        color={globalColors.primary_default}
                                        size={size}
                                    />
                                )
                            } else {
                                return (
                                    <UserIconOutline
                                        color={globalColors.primary_default}
                                        size={size}
                                    />
                                )
                            }
                        }
                    },
                })}
            >
                <Tab.Screen
                    name="Dashboard"
                    component={DashboardStackScreens}
                />

                <Tab.Screen name="Profile" component={ProfileStackScreens} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
