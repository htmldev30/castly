import React from 'react'
import { Text, View } from 'react-native'

const InputErrorMessage = ({ children }) => {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    )
}

export default InputErrorMessage
