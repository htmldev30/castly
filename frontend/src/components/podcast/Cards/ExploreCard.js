import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { globalColors } from '../../../../styles/global'

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginHorizontal: 5,
        marginBottom: 5,
        padding: 10,
        alignItems: 'center',
    },
    card: {
        width: 160,
        height: 180,
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
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    card_title: {
        marginLeft: 6,
        marginBottom: 2,
        paddingVertical: 10,
        fontWeight: '600',
        fontSize: 10,
        color: globalColors.text_default,
    },
    card_episode: {
        marginBottom: 2,
        paddingVertical: 10,
        fontWeight: '700',
        fontSize: 12,
        color: globalColors.primary_default,
    },
})
const ExploreCard = ({
    title,
    episode,
    cover,
    podcastId,
    userId,
    navigateToListen,
}) => {
    return (
        <TouchableOpacity onPress={navigateToListen}>
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
            </View>
        </TouchableOpacity>
    )
}

export default ExploreCard
