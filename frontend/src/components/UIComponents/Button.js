import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { globalButtonStyles } from '../../../styles/components'
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
                backgroundColor
                    ? { backgroundColor }
                    : { backgroundColor: '#e63b19' },
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
                        ? { opacity: 0 }
                        : { display: 'flex', alignItems: 'center' }
                }
            >
                {icon ? (
                    <Text style={{ marginRight: 2, alignItems: 'center' }}>
                        {icon}
                    </Text>
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
