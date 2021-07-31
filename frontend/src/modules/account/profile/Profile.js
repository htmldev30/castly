import React, { useState } from 'react'
import {
    useWindowDimensions,
    Dimensions,
    ScrollView,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'

// Customs
import { globalColors, globalColorsExtras } from '../../../../styles/global'
import Avatar from '../../../components/UIComponents/Avatar'
import { profileStyles } from './styles/styles'

const FirstRoute = () => (
    <View style={{ flex: 1 }}>
        <Text>Tab Two</Text>
    </View>
)
const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'darkgrey' }}>
        <Text>Tab Two</Text>
    </View>
)

const Profile = (props) => {
    const layout = useWindowDimensions()
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: '1', title: 'First', icon: 'podcast' },
        { key: '2', title: 'Second', icon: 'bookmark' },
    ])
    const renderScene = SceneMap({
        1: FirstRoute,
        2: SecondRoute,
    })

    const renderTabBar = (props) => {
        return (
            <TabBar
                {...props}
                renderLabel={renderLabel(props)}
                activeColor={globalColors.primary_default}
                inactiveColor={globalColorsExtras.highlight_default}
                pressOpacity={0.8}
                indicatorStyle={profileStyles.indicatorTab}
                style={{ marginTop: 25, backgroundColor: null }}
            />
        )
    }

    const renderLabel =
        (props) =>
        ({ route }) => {
            const routes = props.navigationState.routes

            let labels = []
            routes.forEach((e, index) => {
                labels.push(
                    index === props.navigationState.index
                        ? globalColors.primary_default
                        : globalColorsExtras.highlight_default
                )
            })

            const currentIndex = parseInt(route.key) - 1
            const color = labels[currentIndex]

            return (
                <View>
                    <FontAwesome5 name={route.icon} size={20} color={color} />
                </View>
            )
        }

    const renderContactHeader = () => {
        const userProfile = props.userProfile
        return (
            <View style={profileStyles.headerContainer}>
                <View style={profileStyles.userRow}>
                    <TouchableOpacity onPress={navigationHandler}>
                        <Avatar avatarUrl={userProfile.avatar} />

                        <View style={profileStyles.userNameRow}>
                            <Text style={profileStyles.userNameText}>
                                {userProfile.displayName}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <View style={profileStyles.userBioRow}>
                        <Text style={profileStyles.userBioText}>
                            {userProfile.bio}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    const navigationHandler = () => {
        props.navigation.navigate('Account')
    }

    return (
        <ScrollView style={profileStyles.scroll}>
            <View style={[profileStyles.container, props.containerStyle]}>
                <View style={profileStyles.cardContainer}>
                    {renderContactHeader()}
                    <TabView
                        initialLayout={{
                            width: Dimensions.get('window').width,
                        }}
                        style={[
                            profileStyles.tabContainer,
                            props.tabContainerStyle,
                        ]}
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        renderTabBar={renderTabBar}
                        onIndexChange={setIndex}
                        initialLayout={{ width: layout.width }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Profile
