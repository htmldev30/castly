import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { globalStyles } from '../../../styles/global'
import ExploreCard from '../../components/podcast/Cards/ExploreCard'
export default function Explore() {
    return (
        <SafeAreaView style={[globalStyles.container]}>
            <View style={{ flex: 1 }}>
                <ScrollView scrollEventThrottle={16}>
                    <View
                        style={{
                            flex: 1,
                            paddingTop: 20,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: '700',
                                paddingHorizontal: 20,
                            }}
                        >
                            Latest and greatest
                        </Text>

                        <View style={{ height: 250, marginTop: 10 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <ExploreCard />
                                <ExploreCard />
                                <ExploreCard />
                                <ExploreCard />
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
