import {StyleSheet} from 'react-native'
import { primaryColor, white, light_gray, black, light_red } from '../colors'

export default aideStyle = StyleSheet.create({
    screen: {
        height: '100%',
        backgroundColor: light_gray
    },
    container: {
        flex: 1,
    },
    containerAide: {
        margin: 30,
        borderRadius: 30,
        padding: 10,
        backgroundColor: white
    },
    h1: {
        color: black,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    p: {
        color: black,
        textAlign: 'justify',
        fontSize: 15,
        fontWeight: 'normal'
    },
    dots:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    dotSelected:{
        height: 10,
        width: 10,
        borderRadius: 10,
        backgroundColor: black,
        marginHorizontal: 2.5,
    },
    dot:{
        height: 10,
        width: 10,
        borderRadius: 10,
        borderColor: black,
        borderWidth: 1.5,
        marginHorizontal: 2.5,
    }
});