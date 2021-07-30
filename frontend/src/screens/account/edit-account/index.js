import React from 'react'
import PropTypes from 'prop-types'
import EditAccount from './edit-account'

const EditAccountScreen = (props) => <EditAccount {...props} />

EditAccountScreen.navigationOptions = () => ({
    header: null,
})

EditAccountScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default EditAccountScreen
