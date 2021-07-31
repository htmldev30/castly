import React from 'react'
import PropTypes from 'prop-types'

import Explore from '../../modules/explore/explore'

const ExploreScreen = (props) => {
    return <Explore {...props} />
}

ExploreScreen.navigationOptions = () => ({
    header: null,
})

ExploreScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default ExploreScreen
