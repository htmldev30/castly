import { globalStyles } from './global'
export const globalButtonStyles = {
    buttonContainer: {
        elevation: 8,
        backgroundColor: '#e63b19',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    buttonText: {
        fontSize: 14,
        color: '#fff',
        alignSelf: 'center',
        ...globalStyles.interRegular,
    },
}
