import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'

import { globalStyles } from '../../../../styles/global'
import ExploreCard from '../../../components/podcast/Cards/ExploreCard'
import UploadPodcastForm from './UploadPodcastForm'

export default function Upload(props) {
    return (
        <SafeAreaView style={[globalStyles.container]}>
            <View style={{ flex: 1 }}>
                <UploadPodcastForm {...props} />
            </View>
        </SafeAreaView>
    )
}
