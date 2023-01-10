//Code adapted from Formik Example
//https://formik.org/docs/api/useField

import React from 'react'
import { useField } from 'formik'
import { Input } from '../UIComponents/Input'
import InputErrorMessage from '../UIComponents/InputErrorMessage'
import { View, Text } from 'react-native'

export const InputField = ({
    label,
    errorMsg,
    ref: _,
    className,
    ...props
}) => {
    const [field, meta] = useField(props)
    return (
        <View>
            {label ? <Text>{label}</Text> : null}
            <Input error={meta.error} {...props} />
            {meta.error && meta.touched ? (
                <View>
                    <InputErrorMessage>
                        {errorMsg || meta.error}
                    </InputErrorMessage>
                </View>
            ) : null}
        </View>
    )
}
