import {StyleSheet} from 'react-native'
import { primaryColor, white, light_gray, black, light_red } from '../colors'

export default particulierStyle = StyleSheet.create({
    screen: {
        height: '100%',
        backgroundColor: light_gray,
    },container: {
        flex: 1,
        marginTop: 30,
    },block:{
        marginHorizontal: 30,
        backgroundColor: white,
        padding: 20,
        marginBottom: 20,
        borderRadius: 20
    },blockParticulier:{
        marginHorizontal: 30,
        backgroundColor: primaryColor,
        padding: 20,
        marginBottom: 20,
        borderRadius: 20
    }, h1: {
        fontSize: 20,
        fontWeight: 'bold',
    },pBold: {
        marginTop: 30,
        fontSize: 13,
        marginBottom: 5,
        textAlign: 'center',
        color: white,
        fontWeight: 'bold'
    },p: {
        fontSize: 13,
        textAlign: 'center',
        color: white,
    },h1Particulier: {
        fontSize: 20,
        fontWeight: 'bold',
        color: white
    },
});