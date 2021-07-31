import React, { useContext } from 'react'
import { UserProfileContext } from '../../../hooks/context/UserProfileProvider'
import EditAccountForm from './EditAccountForm'
const EditAccount = (props) => {
    const { userProfile, setUserUpdated } = useContext(UserProfileContext)
    return (
        <EditAccountForm
            userProfile={userProfile}
            setUserUpdated={setUserUpdated}
        />
    )
}

export default EditAccount
