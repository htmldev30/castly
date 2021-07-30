import React, { useContext } from 'react'
import { Text, View } from 'react-native'

// Customs
import { authStyles } from '../../../styles/authStyles'
import C_Button from '../../components/UIComponents/Button'
import { AuthenticationContext } from '../../hooks/context/AuthenticationProvider'
import AuthSvg from '../../../assets/auth-assets/auth'

export default function Auth() {
    const { authenticate } = useContext(AuthenticationContext)
    return (
        <View style={authStyles.authContainer}>
            <Text style={authStyles.title}>Casty </Text>

            <View style={authStyles.authImageContainer}>
                <AuthSvg />
                <View style={authStyles.authHeaderContainer}>
                    <Text style={authStyles.header}>Sign Up to Casty</Text>
                </View>
                <View style={authStyles.authBottomContainer}>
                    <C_Button
                        title="Sign Up"
                        size="lg"
                        onPress={authenticate}
                    />
                </View>
            </View>
        </View>
    )
}
