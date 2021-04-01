import { StyleSheet } from 'react-native'
import { white, black } from '../../colors'

export default upgradeStyle = StyleSheet.create({
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
        color: black,
        alignSelf: "flex-start",
        paddingLeft: 10,
        fontSize: 19
    },

    input: {
        height: "5%",
        width: "100%",
        textAlign: "center",
        color: black,
        borderBottomWidth: 1,
        borderBottomColor: black,
        marginBottom: "7%"
    },

    pickerContainer: {
        flex: 1,
        width: "100%",
        height: "5%",
        marginBottom: '4%',
        borderBottomColor: black,
        borderBottomWidth: 1
    },

    picker: {
        height: "100%",
        width: "100%",
        color: black,
        marginBottom: "7%"
    },

    confirm: {
        height: "25%",
        width: "100%",
        justifyContent: "center"
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
        color: white,
        fontWeight: "bold",
        fontSize: 30
    },

    confirmIcon: {
        height: 33,
        width: 33,
        position: "absolute",
        right: 10
    },
})