import React from 'react'
import PropTypes from 'prop-types'

import Upload from '../../modules/dashboard/upload/Upload'
const UploadScreen = (props) => {
    return <Upload {...props} />
}

UploadScreen.navigationOptions = () => ({
    header: null,
})

UploadScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default UploadScreen
