import React from 'react'
import { View, Text } from 'react-native'
import { authStyles } from '../../../styles/authStyles'
import C_Button from '../../components/UIComponents/Button'

import PodcastCreatorSvg from '../../../assets/auth-assets/podcastCreator'
export default function LandingCreator({ navigation }) {
    const handleNavigation = () => {
        navigation.navigate('Auth')
    }
    return (
        <View style={authStyles.authContainer}>
            <Text style={authStyles.title}>Casty</Text>

            <View style={authStyles.authImageContainer}>
                <PodcastCreatorSvg />
                <View style={authStyles.authHeaderContainer}>
                    <Text style={authStyles.header}>Create Podcasts</Text>
                    <Text style={authStyles.description}>
                        Casty makes podcasting much easier and more accessible
                        to everyone!
                    </Text>
                </View>
                <View style={authStyles.authBottomContainer}>
                    <C_Button
                        title="Dive In"
                        size="lg"
                        onPress={handleNavigation}
                    />
                </View>
            </View>
        </View>
    )
}
