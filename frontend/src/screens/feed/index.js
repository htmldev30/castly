import React from 'react'
import { View, Text, Button } from 'react-native'
import { globalStyles } from '../../../styles/global'

export default function Feed({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>Feed Page</Text>
            <Button
                title="Hello"
                onPress={async () => {
                    AsyncStorage.clear()
                }}
            />
        </View>
    )
}
