import React from 'react'
import PropTypes from 'prop-types'

import Dashboard from '../../modules/dashboard/Dashboard'
const DashboardScreen = (props) => {
    return <Dashboard {...props} />
}

DashboardScreen.navigationOptions = () => ({
    header: null,
})

DashboardScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default DashboardScreen
