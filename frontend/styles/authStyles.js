import { StyleSheet } from 'react-native'
import { globalStyles, globalColors } from './global'
export const authStyles = StyleSheet.create({
    authContainer: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: globalColors.background_default,
    },
    authImageContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    authHeaderContainer: {
        flex: 1,
        padding: 20,
        alignContent: 'center',
        alignItems: 'center',
    },
    authBottomContainer: {
        justifyContent: 'flex-end',
        margin: 20,
        padding: 10,
    },
    title: {
        marginTop: 24,
        fontSize: 24,
        padding: 8,
        color: globalColors.primary_default,
        ...globalStyles.interBold,
    },
    header: {
        fontSize: 20,
        padding: 8,
        color: globalColors.text_default,
        ...globalStyles.interBold,
    },
    description: {
        fontSize: 16,
        paddingTop: 8,
        paddingHorizontal: 4,
        textAlign: 'center',
        color: globalColors.text_default,
        ...globalStyles.interRegular,
    },
    actionText: {
        fontSize: 20,
        padding: 8,
        color: globalColors.text_default,
        ...globalStyles.interBold,
    },
})
