import {StyleSheet} from 'react-native'
import { primaryColor, white } from '../colors'

export default headerStyle = StyleSheet.create({
    safeArea: {
        backgroundColor: primaryColor,
        borderBottomRightRadius: 30,
        display: 'flex',
        flexDirection: 'row'
    },

    container: {
        height: 70,
        top: -10,
        backgroundColor: "transparent",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },

    h1: {
        color: white,
        fontSize: 30,
        fontWeight: 'bold'
    },

    p: {
        color: white,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    }
});