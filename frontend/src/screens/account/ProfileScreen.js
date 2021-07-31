import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Profile from '../../modules/account/profile/Profile'
import { UserProfileContext } from '../../hooks/context/UserProfileProvider'
const ProfileScreen = (props) => {
    const { userProfile } = useContext(UserProfileContext)
    return <Profile {...props} userProfile={userProfile} />
}

ProfileScreen.navigationOptions = () => ({
    header: null,
})

ProfileScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default ProfileScreen
