import React, { forwardRef } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { globalColors } from '../../../styles/global'
export const Input = forwardRef(
    ({ className, error, transparent, placeholder, ...props }, ref) => {
        // const bg = transparent
        //     ? tailwind(`bg-transparent`)
        //     : tailwind(`bg-white`)
        // const ring = error
        //     ? tailwind(`ring-1 ring-red`)
        //     : tailwind(
        //           `focus:outline-none focus:border-muted focus:ring-2 focus:ring-highlight`
        //       )

        return <TextInput ref={ref} style={styles.textInput} {...props} />
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
})
