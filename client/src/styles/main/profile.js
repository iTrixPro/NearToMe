import {StyleSheet} from 'react-native'
import { primaryColor, white, light_gray } from '../colors'

export default profileStyle = StyleSheet.create({
    screen: {
        height: '100%',
        backgroundColor: light_gray,
    },
    
    container: {
        flex: 1,
        marginTop: 30,
    },
    
    block:{
        flexDirection: 'row', 
        marginHorizontal: 30,
        backgroundColor: white,
        padding: 20,
        marginBottom: 20,
        borderRadius: 20
    },
    
    blockParticulier:{
        marginHorizontal: 30,
        backgroundColor: primaryColor,
        padding: 20,
        marginBottom: 20,
        borderRadius: 20
    }, 
    
    h1: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    logout: {
        color: primaryColor
    },

    icon: {
        height: 22,
        width: 22,
        marginRight: '5%'
    },
    
    pBold: {
        marginTop: 15,
        fontSize: 13,
        marginBottom: 5,
        textAlign: 'center',
        color: white,
        fontWeight: 'bold'
    },
    
    p: {
        fontSize: 13,
        textAlign: 'center',
        color: white,
    },
    
    h1Particulier: {
        fontSize: 20,
        fontWeight: 'bold',
        color: white,
        textAlign: 'center'
    }

});