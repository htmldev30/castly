import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListenScreen from '../../screens/listen/ListenScreen'
const ListenStack = createStackNavigator()

export const ListenStackScreens = () => {
    return (
        <ListenStack.Navigator>
            <ListenStack.Screen name="Listen" component={ListenScreen} />
        </ListenStack.Navigator>
    )
}
export default ListenStackScreens
