import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Feed from '../../screens/feed/index'

const FeedStack = createStackNavigator()

export const FeedStackScreens = () => {
    return (
        <FeedStack.Navigator>
            <FeedStack.Screen name="Your feed" component={Feed} />
        </FeedStack.Navigator>
    )
}
export default FeedStackScreens
