import {StyleSheet} from 'react-native'
import { primaryColor, white, light_gray, black } from '../../colors'

export default particulierStyle = StyleSheet.create({
    screen: {
        height: '100%',
        backgroundColor: primaryColor,
    },
    
    background:{
        backgroundColor: light_gray
    },
    
    container: {
        flex: 1,
        marginTop: 10,
    },
    
    avatar:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    
    avatarImage:{
        height: 200,
        width: 200,
        borderRadius: 200,
        borderColor: white,
        borderWidth: 5,
        marginBottom: 5
    },
    
    tarifs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    
    tarif: {
        backgroundColor: white,
        padding: 20,
        borderRadius: 20,
        width: '40%',
        margin: 10,
    },
    
    tarifSelected: {
        backgroundColor: primaryColor,
        padding: 20,
        borderRadius: 20,
        width: '40%',
        margin: 10,
    },
    
    calendar:{
        backgroundColor: white,
        borderRadius: 20,
        margin: 30,
    },
    
    calendarMonth:{
        borderBottomColor: black,
        borderBottomWidth: 1,
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    
    days:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    day:{
        margin: 5,
        height: 35,
        width: 35,
        borderColor: black,
        borderWidth: 1.5,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    daySelected:{
        margin: 5,
        height: 35,
        width: 35,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryColor
    },
    
    dayPassed:{
        margin: 5,
        height: 35,
        width: 35,
        borderColor: primaryColor,
        borderWidth: 1.5,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    dayInvisible:{
        margin: 5,
        height: 35,
        width: 35,
    },
    
    dayP:{
        fontWeight: 'bold',
        color: black
    },
    
    dayPSelected:{
        fontWeight: 'bold',
        color: white
    },

    horaires: {
        marginHorizontal: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    
    horaire: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        width: 150
    },
    
    horaireSelected: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryColor,
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        width: 150
    },
    
    horaireP: {
        fontWeight: 'bold',
        fontSize: 15,
        color: black
    },
    
    horairePSelected: {
        fontWeight: 'bold',
        fontSize: 15,
        color: white
    },
    
    submit:{
        marginTop: 20,
        marginBottom: 100,
        backgroundColor: white,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius:  20,
        marginHorizontal: 30,
        paddingVertical: 30
    },
    
    submitP:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: black
    },
    
    p: {
        fontSize: 10,
        marginVertical: 10,
        textAlign: 'justify',
        color: black
    },
    
    h1Selected: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: white
    },
    
    pSelected: {
        fontSize: 10,
        marginVertical: 10,
        textAlign: 'justify',
        color: white
    }
});