import { StyleSheet } from 'react-native'
import { getColor } from './styles'

export const fonts = {
    'Inter-ExtraLight': require('../assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
}

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: getColor('background-500'),
    },

    interExtraLight: {
        fontFamily: 'Inter-ExtraLight',
    },
    interLight: {
        fontFamily: 'Inter-Light',
    },
    interRegular: {
        fontFamily: 'Inter-Regular',
    },
    interMedium: {
        fontFamily: 'Inter-Medium',
    },
    interSemiBold: {
        fontFamily: 'Inter-SemiBold',
    },
    interBold: {
        fontFamily: 'Inter-Bold',
    },
    interExtraBold: {
        fontFamily: 'Inter-ExtraBold',
    },
})

export const globalColors = {
    text_default: getColor('text-500'),
    background_default: getColor('background-500'),
    primary_default: getColor('primary-500'),
    secondary_default: getColor('secondary-500'),
    highlight_default: getColor('highlight-500'),
    purple_default: getColor('purple-500'),
    muted_default: getColor('muted-500'),
    gray_default: getColor('gray-500'),
}

export const globalColorsExtras = {
    text_default: getColor('text-600'),
    background_default: getColor('background-600'),
    primary_default: getColor('primary-600'),
    secondary_default: getColor('secondary-600'),
    highlight_default: getColor('highlight-600'),
    purple_default: getColor('purple-600'),
    muted_default: getColor('muted-600'),
    gray_default: getColor('gray-600'),
}
