import React, { useState } from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import { View, Text, Keyboard } from 'react-native'

// Customs
import { getValueFor } from '../../../shared/UserAuthentication'
import { InputField } from '../../../components/form-fields/InputField'
import C_Button from '../../../components/UIComponents/Button'

const EditAccountForm = ({ userProfile, setUserUpdated }) => {
    const [responseMessage, setResponseMessage] = useState(null)
    const [errors, setErrors] = useState(null)
    const existingUserProfileValues = {
        username: userProfile.username,
        displayName: userProfile.displayName,
        bio: userProfile.bio,
    }
    const userProfileValidationSchema = Yup.object({
        username: Yup.string()
            .lowercase()
            .matches(/^[ A-Za-zñáéíóúü0-9_.-]*$/, 'You may only use _ . - ')
            .matches(/^(?![0-9_.-]+$)/, 'Letters are required') // if matches regex
            .min(6, 'Username must be longer than 6 characters')
            .max(32, 'Username is too long')
            .required('Username cannot be left blank'),
        displayName: Yup.string().max(16, 'Display name is too long.'),
        bio: Yup.string().max(64, 'Bio is too long'),
    })

    return (
        <Formik
            enableReinitialize={true}
            initialValues={
                userProfile
                    ? existingUserProfileValues
                    : { username: '', displayName: '', bio: '' }
            }
            validationSchema={userProfileValidationSchema}
            onSubmit={async ({ username, displayName, bio }) => {
                const data = { username, displayName, bio }

                const token = await getValueFor('jwtToken')
                const currentUserId = await getValueFor('currentUserId')
                const response = await axios({
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        authorization: `Bearer ${token}`,
                    },
                    method: 'put',
                    url: `http://192.168.0.9:3001/user/${currentUserId}`,
                    data: {
                        username: data.username,
                        displayName: data.displayName,
                        bio: data.bio,
                    },
                })
                    .then(function (response) {
                        setResponseMessage(response.data.message)
                        setErrors(false)
                        setUserUpdated(true)
                    })
                    .catch(function (error) {
                        setResponseMessage(error.response.data.error)
                        setErrors(true)
                    })

                Keyboard.dismiss()
            }}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                values,
            }) => (
                <View style={{ margin: 10, padding: 10 }}>
                    <View style={{ fontSize: 10 }}>
                        {responseMessage && errors ? (
                            <Text className="text-red-500">
                                📛{responseMessage}
                            </Text>
                        ) : responseMessage && !errors ? (
                            <Text className="text-green-500">
                                ✅{responseMessage}
                            </Text>
                        ) : null}
                    </View>
                    <InputField
                        label="Display Name"
                        name="displayName"
                        value={values.displayName}
                        onChangeText={handleChange('displayName')}
                        onBlur={handleBlur('displayName')}
                    />

                    <InputField
                        label="Username"
                        name="username"
                        value={values.username}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                    />
                    <InputField
                        label="Bio"
                        name="bio"
                        value={values.bio}
                        onChangeText={handleChange('bio')}
                        onBlur={handleBlur('bio')}
                    />

                    <C_Button
                        title="Save Changes"
                        loading={isSubmitting}
                        onPress={handleSubmit}
                    />
                </View>
            )}
        </Formik>
    )
}

export default EditAccountForm
