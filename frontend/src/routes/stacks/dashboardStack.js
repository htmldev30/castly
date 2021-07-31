import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DashboardScreen from '../../screens/dashboard/DashboardScreen'
import UploadScreen from '../../screens/dashboard/UploadScreen'
import ListenScreen from '../../screens/listen/ListenScreen'
const DashboardStack = createStackNavigator()

export const DashboardStackScreens = () => {
    return (
        <DashboardStack.Navigator>
            <DashboardStack.Screen
                name="Dashboard"
                component={DashboardScreen}
            />
            <DashboardStack.Screen name="Upload" component={UploadScreen} />
            <DashboardStack.Screen
                name="Listen"
                component={ListenScreen}
                options={({ route }) => ({ title: route.params.podcast.title })}
            />
        </DashboardStack.Navigator>
    )
}
export default DashboardStackScreens
