import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../../screens/account/profile/index'
import AccountScreen from '../../screens/account/setting/index'
import EditAccountScreen from '../../screens/account/edit-account'
import { UserProfileContext } from '../../hooks/context/UserProfileProvider'
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
