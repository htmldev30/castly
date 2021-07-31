import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import ListenCard from '../../components/podcast/Cards/ListenCard'

export default function Listen(props) {
    const { podcast } = props.route.params
    console.log(podcast)
    return (
        <SafeAreaView
            style={{
                flex: 1,
                padding: 20,
                backgroundColor: '#fff',
            }}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center', //Centered horizontally
                    alignItems: 'center', //Centered vertically
                    marginBottom: 200,
                }}
            >
                <ListenCard
                    title={podcast.title}
                    episode={podcast.episode}
                    cover={`http://${podcast.podcastCoverFile}`}
                    audio={`http://${podcast.podcastAudioFile}`}
                    podcastId={podcast.podcastId}
                    userId={podcast.creatorId}
                    key={podcast.podcastId}
                ></ListenCard>
            </View>
        </SafeAreaView>
    )
}
