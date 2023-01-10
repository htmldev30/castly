// Code adapted from React Native Elements Documentation
// https://reactnativeelements.com/docs/1.2.0/listitem
import React, { useContext } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'

// Customs
import BaseIcon from './Icon'
import InfoText from './InfoText'
import { UserProfileContext } from '../../../hooks/context/UserProfileProvider'
import Avatar from '../../../components/UIComponents/Avatar'
import { settingStyles } from './styles/styles'

const SettingsScreen = (props) => {
    const { userProfile } = useContext(UserProfileContext)
    const navigationHandler = () => {
        props.navigation.navigate('Edit Account')
    }
    return (
        <ScrollView style={settingStyles.scroll}>
            <TouchableOpacity onPress={navigationHandler}>
                <View style={settingStyles.userRow}>
                    <View style={settingStyles.userImage}>
                        <Avatar avatarUrl={userProfile.avatar} size="small" />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16 }}>
                            {userProfile.displayName}
                        </Text>
                        <Text
                            style={{
                                color: 'gray',
                                fontSize: 16,
                            }}
                        >
                            {userProfile.username}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            {userProfile.isVerified ? null : (
                <Text style={{ color: 'red', marginLeft: 20 }}>
                    Please verify your account
                </Text>
            )}
            <InfoText text="More" />
            <View>
                <ListItem containerStyle={settingStyles.listItemContainer}>
                    <BaseIcon
                        containerStyle={{ backgroundColor: '#A4C8F0' }}
                        icon={{
                            type: 'ionicon',
                            name: 'md-information-circle',
                        }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>About Us</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>

                <ListItem containerStyle={settingStyles.listItemContainer}>
                    <BaseIcon
                        containerStyle={{ backgroundColor: '#C6C7C6' }}
                        icon={{
                            type: 'entypo',
                            name: 'light-bulb',
                        }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>Terms And Policies</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>

                <ListItem containerStyle={settingStyles.listItemContainer}>
                    <BaseIcon
                        containerStyle={{
                            backgroundColor: '#C47EFF',
                        }}
                        icon={{
                            type: 'entypo',
                            name: 'share',
                        }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>Share our App</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>

                <ListItem containerStyle={settingStyles.listItemContainer}>
                    <BaseIcon
                        containerStyle={{
                            backgroundColor: '#FECE44',
                        }}
                        icon={{
                            type: 'entypo',
                            name: 'star',
                        }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>Rate Us</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </View>
        </ScrollView>
    )
}

export default SettingsScreen
