import {StyleSheet} from 'react-native'
import { white, light_gray, black } from '../../colors'

export default favoriteStyle = StyleSheet.create({
    screen: {
        height: '100%',
        backgroundColor: white,
    },

    container: {
        flex: 1,
        marginTop: 30,
    },

    block:{
        marginHorizontal: 30,
        backgroundColor: white,
        padding: 20,
        marginBottom: 40,
        borderRadius: 20,
        shadowColor: black,
        shadowOpacity: 0.9,
        elevation: 5
    },
    
    blockParticulier:{
        marginHorizontal: 30,
        backgroundColor: white,
        padding: 10,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: black,
        shadowOpacity: 0.9,
        elevation: 2
    },
    
    avatar:{
        height: 50,
        width: 50,
        borderRadius: 50
    },
    
    blockParticulierText:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginLeft: -50,
    },
    
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    
    p: {
        fontSize: 13,
        marginLeft: "12%"
    }
})