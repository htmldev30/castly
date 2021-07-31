import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
// Customs
import { infoTextStyles } from './styles/styles'
const InfoText = ({ text }) => (
    <View style={infoTextStyles.container}>
        <Text style={infoTextStyles.infoText}>{text}</Text>
    </View>
)

InfoText.propTypes = {
    text: PropTypes.string.isRequired,
}

export default InfoText
