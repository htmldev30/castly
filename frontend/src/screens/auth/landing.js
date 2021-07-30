import React from 'react'
import { View, Text } from 'react-native'
import { authStyles } from '../../../styles/authStyles'
import C_Button from '../../components/UIComponents/Button'
import PodcastListenerSvg from '../../../assets/auth-assets/podcastListener'
export default function Landing({ navigation }) {
    const handleNavigation = () => {
        navigation.navigate('LandingCreator')
    }
    return (
        <View style={authStyles.authContainer}>
            <Text style={authStyles.title}>Casty</Text>

            <View style={authStyles.authImageContainer}>
                <PodcastListenerSvg />
                <View style={authStyles.authHeaderContainer}>
                    <Text style={authStyles.header}>
                        Listen and create podcasts
                    </Text>
                    <Text style={authStyles.description}>
                        Welcome to Casty, where we make listening to podcasts
                        more convenient
                    </Text>
                </View>
                <View style={authStyles.authBottomContainer}>
                    <C_Button
                        title="Get Started"
                        size="lg"
                        onPress={handleNavigation}
                    />
                </View>
            </View>
        </View>
    )
}
