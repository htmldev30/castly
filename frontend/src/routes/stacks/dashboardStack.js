import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../../screens/dashboard/dashboard'

const DashboardStack = createStackNavigator()

export const DashboardStackScreens = () => {
    return (
        <DashboardStack.Navigator>
            <DashboardStack.Screen name="Dashboard" component={Dashboard} />
        </DashboardStack.Navigator>
    )
}
export default DashboardStackScreens
