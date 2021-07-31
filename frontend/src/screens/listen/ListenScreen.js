import React from 'react'
import PropTypes from 'prop-types'

import Listen from '../../modules/listen/Listen'

const ListenScreen = (props) => {
    return <Listen {...props} />
}

ListenScreen.navigationOptions = () => ({
    header: null,
})

ListenScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default ListenScreen
