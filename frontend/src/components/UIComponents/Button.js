import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { globalButtonStyles } from '../../../styles/components'
// import { Spinner } from './Spinner'
import tailwind from 'tailwind-rn'
const C_Button = ({
    onPress,
    title,
    backgroundColor,
    size = 'normal',
    color = 'primary',
    loading,
    icon,
    transition,
    disabled,
    className = '',
    children,
    ...props
}) => {
    TouchableOpacity.defaultProps = { activeOpacity: 0.8 }
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            style={[
                globalButtonStyles.buttonContainer,
                backgroundColor && { backgroundColor },
                size === 'lg' && {
                    paddingHorizontal: 72,
                    paddingVertical: 18,
                    elevation: 6,
                },
            ]}
            {...props}
        >
            <View
                style={
                    loading
                        ? tailwind('opacity-0')
                        : tailwind(`flex items-center`)
                }
            >
                {icon ? (
                    <Text style={tailwind(`mr-2 items-center`)}>{icon}</Text>
                ) : null}
                {children}
                <Text
                    style={[
                        globalButtonStyles.buttonText,
                        size === 'lg' && { fontSize: 18 },
                    ]}
                >
                    {title}
                </Text>
            </View>
            {loading ? (
                <Text style={[globalButtonStyles.buttonText]}>Loading</Text>
            ) : null}
        </TouchableOpacity>
    )
}

export default C_Button
