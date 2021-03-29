import {StyleSheet} from 'react-native'
import { primaryColor, white, light_gray, black, light_red } from '../colors'

export default particulierStyle = StyleSheet.create({
    screen: {
        height: '100%',
        backgroundColor: primaryColor,
    },background:{
        backgroundColor: light_gray
    },container: {
        flex: 1,
        marginTop: 10,
    },tarifs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },tarif: {
        backgroundColor: white,
        padding: 20,
        borderRadius: 20,
        width: '40%',
        margin: 10,
    },calendar:{
        backgroundColor: white,
        borderRadius: 20,
        margin: 30,
    },calendarMonth:{
        borderBottomColor: black,
        borderBottomWidth: 1,
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 20,
    },days:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },day:{
        margin: 5,
        height: 35,
        width: 35,
        borderColor: black,
        borderWidth: 1.5,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },dayInvisible:{
        margin: 5,
        height: 35,
        width: 35,
    },dayP:{
        fontWeight: 'bold'
    },horaires: {
        marginHorizontal: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },horaire: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        width: 150
    },horaireP: {
        fontWeight: 'bold',
        fontSize: 15
    },submit:{
        marginTop: 20,
        marginBottom: 100,
        backgroundColor: white,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius:  20,
        marginHorizontal: 30,
        paddingVertical: 30
    },submitP:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },h1: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },p: {
        fontSize: 10,
        marginVertical: 10,
        textAlign: 'justify',
    },
});