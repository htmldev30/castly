import React from 'react'
import ExploreScreen from '../../screens/explore'
import { createStackNavigator } from '@react-navigation/stack'

const ExploreStack = createStackNavigator()
export const ExploreStackScreens = () => {
    return (
        <ExploreStack.Navigator>
            <ExploreStack.Screen name="Explore" component={ExploreScreen} />
        </ExploreStack.Navigator>
    )
}
export default ExploreStackScreens
