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
    },input:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
        backgroundColor: light_gray,
        borderRadius: 10
    },containerButton:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },button:{
        marginTop: 20,
        backgroundColor: primaryColor,
        padding: 10,
        borderRadius: 10
    },buttonText:{
        fontWeight: 'bold',
        color: white,
        textAlign: 'center'
    },h1: {
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
    },p: {
        fontSize: 17,
        textAlign:'center'
    },
});