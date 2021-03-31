import {StyleSheet} from 'react-native'
import { primaryColor, white, light_gray, black, light_red } from '../colors'

export default particulierStyle = StyleSheet.create({
    screen: {
        height: '100%',
        backgroundColor: light_gray,
    },container: {
        flex: 1,
        marginTop: 30,
    },card:{
        marginHorizontal: 30,
        backgroundColor: primaryColor,
        padding: 20,
        marginBottom: 40,
        borderRadius: 20
    },puce:{
        height: 50,
        width: 75,
        backgroundColor: light_red,
        borderRadius: 15
    },dots: {
        marginVertical: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },dot: {
        backgroundColor: white,
        height: 12,
        width: 12,
        margin: 2,
        borderRadius: 10
    },space: {
        height: 5,
        width: 5,
        margin: 2
    },footer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },footerNomP: {
        textAlign: 'left',
        fontSize: 17,
        color: white,
        fontWeight: 'bold'
    },footerDateIntroP: {
        textAlign: 'right',
        fontSize: 12,
        color: white,
        fontWeight: 'bold'
    },footerDateP: {
        textAlign: 'right',
        fontSize: 12,
        color: white
    },button: {
        marginHorizontal: 30,
        padding: 20,
        backgroundColor: primaryColor,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },buttonP: {
        color: white,
        fontWeight: 'bold',
        fontSize: 18
    },add: {
        height: 20,
        width: 20,
        marginRight: 10
    },h1: {
        textAlign:'right',
        fontSize: 25,
        fontWeight: 'bold',
        color: white
    },
});