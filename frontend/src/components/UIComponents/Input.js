import React, { forwardRef, useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { globalColors, globalColorsExtras } from '../../../styles/global'
export const Input = forwardRef(
    ({ className, error, transparent, placeholder, ...props }, ref) => {
        const [onFocus, setOnFocus] = useState(false)
        const textInputStyle = [
            styles.textInput,
            onFocus && styles.textInputOnFocus,
        ]
        return (
            <TextInput
                ref={ref}
                style={textInputStyle}
                selectionColor={globalColors.highlight_default}
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
                {...props}
            />
        )
    }
)

Input.displayName = 'Input'

const styles = StyleSheet.create({
    textInput: {
        height: 45,
        marginBottom: 5,
        paddingLeft: 12,
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: globalColors.background_default,
        borderColor: globalColors.highlight_default,
    },
    textInputOnFocus: {
        borderColor: globalColorsExtras.highlight_default,
    },
})
