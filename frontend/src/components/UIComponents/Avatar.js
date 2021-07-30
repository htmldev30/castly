import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { globalColors } from '../../../styles/global'
const Avatar = ({ avatarUrl, size }) => {
    return (
        <View style={styles.avatar_container}>
            <Image
                style={[
                    styles.avatar_style,
                    size === 'small'
                        ? styles.avatar_small
                        : styles.avatar_default,
                ]}
                source={{ uri: avatarUrl }}
                alt="Picture of user"
            />
        </View>
    )
}

export default Avatar

const styles = StyleSheet.create({
    avatar_container: {
        margin: 5,
        padding: 5,
    },
    avatar_style: {
        borderRadius: 15,

        borderColor: globalColors.highlight_default,
    },
    avatar_default: {
        width: 100,
        height: 100,
        borderWidth: 5,
    },
    avatar_small: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 10,
    },
})
