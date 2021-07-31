import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    HomeIcon,
    UserIcon,
    SearchIcon,
    MicrophoneIcon,
} from 'react-native-heroicons/solid'
import {
    HomeIcon as HomeIconOutline,
    UserIcon as UserIconOutline,
    SearchIcon as SearchIconOutline,
    MicrophoneIcon as MicrophoneIconOutline,
} from 'react-native-heroicons/outline'
// Customs
import FeedStackScreens from './stacks/feedStack'
import ProfileStackScreens from './stacks/profileStack'
import ExploreStackScreens from './stacks/exploreStack'
import DashboardStackScreens from './stacks/dashboardStack'

import { globalColors, globalColorsExtras } from '../../styles/global'
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
                        if (route.name === 'Feed') {
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
                                        color={
                                            globalColorsExtras.highlight_default
                                        }
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
                                        color={
                                            globalColorsExtras.highlight_default
                                        }
                                        size={size}
                                    />
                                )
                            }
                        }
                        if (route.name === 'Explore') {
                            if (focused) {
                                return (
                                    <SearchIcon
                                        color={globalColors.primary_default}
                                        size={size}
                                    />
                                )
                            } else {
                                return (
                                    <SearchIconOutline
                                        color={
                                            globalColorsExtras.highlight_default
                                        }
                                        size={size}
                                    />
                                )
                            }
                        }
                        if (route.name === 'Dashboard') {
                            if (focused) {
                                return (
                                    <MicrophoneIcon
                                        color={globalColors.primary_default}
                                        size={size}
                                    />
                                )
                            } else {
                                return (
                                    <MicrophoneIconOutline
                                        color={
                                            globalColorsExtras.highlight_default
                                        }
                                        size={size}
                                    />
                                )
                            }
                        }
                    },
                })}
            >
                <Tab.Screen name="Feed" component={FeedStackScreens} />
                <Tab.Screen name="Explore" component={ExploreStackScreens} />
                <Tab.Screen
                    name="Dashboard"
                    component={DashboardStackScreens}
                />

                <Tab.Screen name="Profile" component={ProfileStackScreens} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
