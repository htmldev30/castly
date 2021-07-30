import React, { useState, useEffect, useContext } from 'react'
import {
    Animated,
    useWindowDimensions,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import { globalColors, globalColorsExtras } from '../../../../styles/global'
import Avatar from '../../../components/UIComponents/Avatar'
const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    headerContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginBottom: 10,
        marginTop: 45,
    },
    indicatorTab: {
        backgroundColor: 'transparent',
    },
    scroll: {
        backgroundColor: '#FFF',
    },
    sceneContainer: {
        marginTop: 10,
    },
    socialIcon: {
        marginLeft: 14,
        marginRight: 14,
    },
    socialRow: {
        flexDirection: 'row',
    },
    tabBar: {
        backgroundColor: '#EEE',
    },
    tabContainer: {
        flex: 1,
        marginBottom: 12,
    },
    tabLabelNumber: {
        color: 'gray',
        fontSize: 12.5,
        textAlign: 'center',
    },
    tabLabelText: {
        color: 'black',
        fontSize: 22.5,
        fontWeight: '600',
        textAlign: 'center',
    },
    userBioRow: {
        marginLeft: 40,
        marginRight: 40,
    },
    userBioText: {
        color: 'gray',
        fontSize: 13.5,
        textAlign: 'center',
    },
    userImage: {
        borderRadius: 60,
        height: 120,
        marginBottom: 10,
        width: 120,
    },
    userNameRow: {
        marginBottom: 10,
    },
    userNameText: {
        color: '#5B5A5A',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    userRow: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 12,
    },
})

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'grey' }}>
        <Text>Tab One</Text>
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
                indicatorStyle={styles.indicatorTab}
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
            <View style={styles.headerContainer}>
                <View style={styles.userRow}>
                    <TouchableOpacity onPress={navigationHandler}>
                        <Avatar avatarUrl={userProfile.avatar} />

                        <View style={styles.userNameRow}>
                            <Text style={styles.userNameText}>
                                {userProfile.displayName}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.userBioRow}>
                        <Text style={styles.userBioText}>
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
        <ScrollView style={styles.scroll}>
            <View style={[styles.container, props.containerStyle]}>
                <View style={styles.cardContainer}>
                    {renderContactHeader()}
                    <TabView
                        initialLayout={{
                            width: Dimensions.get('window').width,
                        }}
                        style={[styles.tabContainer, props.tabContainerStyle]}
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
