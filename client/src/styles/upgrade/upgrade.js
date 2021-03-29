import { StyleSheet } from 'react-native'
import { white, black, light_grey } from '../colors'

export default upgrade = StyleSheet.create({
    form: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        paddingTop: 100,
        backgroundColor: white
    },

    content: {
        height: "100%",
        width: "80%"
    },

    icon: {
        alignSelf: "center",
        marginBottom: 50
    },

    title: {
        height: "10%",
        width: "100%",
        position: "relative",
        justifyContent: "center"
    },

    titleTxt: {
        color: black,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30
    },

    titleIcon: {
        height: 33,
        width: 33,
        marginLeft: "auto",
        right: 10,
        position: "absolute",
        transform: [{ rotate: "180deg" }]
    },

    txt: {
        color: light_grey,
        alignSelf: "flex-start",
        paddingLeft: 10,
        fontSize: 19
    },

    input: {
        height: "5%",
        width: "100%",
        textAlign: "center",
        color: black,
        borderBottomWidth: 3,
        borderBottomColor: black,
        borderRadius: 11,
        marginBottom: 10
    },

    picker: {
        height: "5%",
        width: "100%",
        color: black
    },

    confirm: {
        height: "25%",
        width: "100%",
        justifyContent: "center",
        marginTop: 100
    },

    confirmBtn: {
        height: "41%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundColor: black,
        borderRadius: 50
    },

    confirmTxt: {
        color: "#fff9f9",
        fontWeight: "bold",
        fontSize: 30
    },

    confirmIcon: {
        height: 33,
        width: 33,
        position: "absolute",
        right: 10
    },

    pwd: {
        color: "#fff9f9",
        fontSize: 12,
        textAlign: "center",
        paddingTop: 10
    }

})