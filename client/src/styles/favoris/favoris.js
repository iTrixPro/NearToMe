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
        marginBottom: 40,
        borderRadius: 20
    },blockParticulier:{
        marginHorizontal: 30,
        backgroundColor: white,
        padding: 10,
        marginBottom: 20,
        borderRadius: 20,
        borderBottomColor: black,
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },avatar:{
        height: 50,
        width: 50,
        borderRadius: 50
    },blockParticulierText:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginLeft: -50,
    },h1: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },p: {
        fontSize: 13,
    },
});