import React from 'react'
import { View, Text, Button } from 'react-native'
import { globalStyles } from '../../../styles/global'

export default function Dashboard({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>Dashboard Page</Text>
            <Button
                title="Hello"
                onPress={async () => {
                    AsyncStorage.clear()
                }}
            />
        </View>
    )
}
