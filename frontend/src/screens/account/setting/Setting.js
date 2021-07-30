import React, { Component } from 'react'
import { ScrollView, Switch, StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'

import BaseIcon from './Icon'
import Chevron from './Chevron'
import InfoText from './InfoText'
import { TouchableOpacity } from 'react-native'
import { useContext } from 'react'
import { UserProfileContext } from '../../../hooks/context/UserProfileProvider'
import Avatar from '../../../components/UIComponents/Avatar'

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: 'white',
    },
    userRow: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 6,
    },
    userImage: {
        marginRight: 12,
    },
    listItemContainer: {
        height: 55,
        borderWidth: 0.5,
        borderColor: '#ECECEC',
    },
})

const SettingsScreen = (props) => {
    const { userProfile } = useContext(UserProfileContext)
    const navigationHandler = () => {
        props.navigation.navigate('Edit Account')
    }
    return (
        <ScrollView style={styles.scroll}>
            <TouchableOpacity onPress={navigationHandler}>
                <View style={styles.userRow}>
                    <View style={styles.userImage}>
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
                <ListItem containerStyle={styles.listItemContainer}>
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

                <ListItem containerStyle={styles.listItemContainer}>
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

                <ListItem containerStyle={styles.listItemContainer}>
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

                <ListItem containerStyle={styles.listItemContainer}>
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
