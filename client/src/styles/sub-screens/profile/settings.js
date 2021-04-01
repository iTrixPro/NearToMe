import {StyleSheet} from 'react-native'
import { primaryColor, white, light_gray, black} from '../../colors'

export default settingsStyle = StyleSheet.create({
    containAll: {
      width: "100%",
      height: "100%",
      backgroundColor: white
    },

    screen: {
        height: "100%"
    },
    
    container: {
        flex: 1,
        marginTop: 30,
    },
    
    block:{
        marginHorizontal: 30,
        backgroundColor: white,
        padding: 20,
        shadowColor: black,
        shadowOpacity: 0.9,
        elevation: 2,
        marginBottom: 40,
        borderRadius: 20
    },
    
    blockParticulier:{
        marginHorizontal: 30,
        backgroundColor: white,
        padding: 10,
        marginBottom: 30,
        borderRadius: 20,
        shadowColor: black,
        shadowOpacity: 0.9,
        elevation: 3 
    },
    
    input:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
        backgroundColor: light_gray,
        borderRadius: 10
    },
    
    containerButton:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    
    button:{
        marginTop: 20,
        backgroundColor: primaryColor,
        padding: 10,
        borderRadius: 10
    },
    
    buttonText:{
        fontWeight: 'bold',
        color: white,
        textAlign: 'center'
    },
    
    h1: {
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    
    p: {
        fontSize: 17,
        textAlign:'center'
    }
})