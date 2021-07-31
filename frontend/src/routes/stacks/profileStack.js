import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../../screens/account/ProfileScreen'
import AccountScreen from '../../screens/account/SettingScreen'
import EditAccountScreen from '../../screens/account/EditAccountScreen'
const ProfileStack = createStackNavigator()

export const ProfileStackScreens = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} />
            <ProfileStack.Screen name="Account" component={AccountScreen} />
            <ProfileStack.Screen
                name="Edit Account"
                component={EditAccountScreen}
            />
        </ProfileStack.Navigator>
    )
}
export default ProfileStackScreens
