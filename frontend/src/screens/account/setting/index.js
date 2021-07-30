import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native'

import contactData from './contact.json'

import { Nav } from './components'
import Setting from './Setting'

const SettingScreen = (props) => {
    return <Setting {...props} />
}

SettingScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SettingScreen
