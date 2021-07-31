import React from 'react'
import { SafeAreaView, View } from 'react-native'

const Options = (props) => {
    props.navigation.setOptions({
        header: ({ navigation }) => (
            <SafeAreaView>
                <Nav title="Settings" navigation={navigation} />
            </SafeAreaView>
        ),
    })

    return <View {...props} />
}

export default Options
