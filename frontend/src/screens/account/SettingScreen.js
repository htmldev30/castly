import React from 'react'
import PropTypes from 'prop-types'

import Setting from '../../modules/account/setting/Setting'

const SettingScreen = (props) => {
    return <Setting {...props} />
}

SettingScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SettingScreen
