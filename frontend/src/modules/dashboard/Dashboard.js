import React, { useContext } from 'react'
import { View, Text, SafeAreaView } from 'react-native'

// Customs
import { globalStyles } from '../../../styles/global'
import C_Button from '../../components/UIComponents/Button'
import { PodcastsContext } from '../../hooks/context/PodcastsProvider'
import PodcastsScroll from './podcasts/PodcastsScroll'

export default function Dashboard(props) {
    const { allUserPodcasts } = useContext(PodcastsContext)
    const handleNavigationUpload = () => {
        props.navigation.navigate('Upload')
    }
    return (
        <SafeAreaView style={[globalStyles.container]}>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        paddingVertical: 15,
                        marginHorizontal: 20,
                        marginVertical: 10,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: '700',
                        }}
                    >
                        Dashboard
                    </Text>
                    <C_Button title="Upload" onPress={handleNavigationUpload} />
                </View>
                <PodcastsScroll
                    navigation={props.navigation}
                    allUserPodcasts={allUserPodcasts}
                />
            </View>
        </SafeAreaView>
    )
}
