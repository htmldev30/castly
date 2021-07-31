import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { globalColors } from '../../../../styles/global'
import TrackPlayer from 'react-native-track-player'
import AudioSlider from '../../../modules/listen/Audio/AudioSlider'

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginHorizontal: 5,
        marginBottom: 5,
        padding: 10,
        alignItems: 'center',
    },
    card: {
        width: 260,
        height: 280,
        borderWidth: 2,
        borderRadius: 10,
        borderBottomWidth: 5,
        backgroundColor: '#fff',
        borderColor: globalColors.highlight_default,
    },
    card_content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card_image: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
    },
    card_title: {
        marginLeft: 6,
        marginBottom: 2,
        paddingVertical: 10,
        fontWeight: '600',
        fontSize: 16,
        color: globalColors.text_default,
    },
    card_episode: {
        marginBottom: 2,
        paddingVertical: 10,
        fontWeight: '700',
        fontSize: 16,
        color: globalColors.primary_default,
    },
})
const ListenCard = ({ title, episode, cover, audio, podcastId, userId }) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.card_content}>
                        <Image
                            style={styles.card_image}
                            source={{
                                uri: cover,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            justifyContent: 'space-evenly',
                            flexDirection: 'row',
                        }}
                    >
                        {title ? (
                            <Text style={styles.card_title}>{title}</Text>
                        ) : null}

                        {title && episode ? (
                            <Text style={styles.card_episode}>#{episode}</Text>
                        ) : null}
                    </View>
                </View>
                <AudioSlider audio={audio} />
            </View>
        </TouchableOpacity>
    )
}

export default ListenCard
