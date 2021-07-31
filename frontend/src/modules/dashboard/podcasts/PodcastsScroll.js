import React from 'react'
import ExploreCard from '../../../components/podcast/Cards/ExploreCard'
import { View, Text, ScrollView } from 'react-native'
import getPodcastRoute from '../../listen/getPodcastRoute'

export default function PodcastsScroll({ allUserPodcasts, navigation }) {
    const handleNavigationToListen = (podcast) => {
        navigation.navigate('Listen', { podcast })
    }
    return (
        <ScrollView scrollEventThrottle={16}>
            <View
                style={{
                    flex: 1,
                    paddingTop: 20,
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '600',
                        paddingHorizontal: 20,
                    }}
                >
                    Recent uploads
                </Text>

                <View style={{ height: 250, marginTop: 10 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {allUserPodcasts.map((podcast) => (
                            <ExploreCard
                                title={podcast.title}
                                episode={podcast.episode}
                                cover={`http://${podcast.podcastCoverFile}`}
                                podcastId={podcast.podcastId}
                                userId={podcast.creatorId}
                                key={podcast.podcastId}
                                navigateToListen={() =>
                                    handleNavigationToListen(podcast)
                                }
                            ></ExploreCard>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}
