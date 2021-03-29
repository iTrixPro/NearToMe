import {StyleSheet} from 'react-native'
import { primaryColor, white, light_gray, black, light_red } from '../colors'

export default headerStyle = StyleSheet.create({
    safeArea: {
        backgroundColor: "#FF4A4A",
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
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    p: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    }
});