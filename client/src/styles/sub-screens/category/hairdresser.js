import { StyleSheet } from 'react-native'
import { white, black } from '../../colors'

export default hairdresserStyle = StyleSheet.create({
    form: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        backgroundColor: white
    },

    content: {
        height: "100%",
        width: "80%"
    },

    buttons: {
        padding: 20,
        width: "90%",
        height: "10%",
        justifyContent: "space-between",
        flexDirection: "row"
    },

    title: {
        height: 45,
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: white,
        shadowColor: black,
        shadowOpacity: 0.9,
        elevation: 5
    },

    titleIcon: {
        height: 33,
        width: 33,
        marginRight: 10
    },

    txt: {
        fontSize: 16,
        color: black,
        fontWeight: "bold",
        marginLeft: "13%"
    },

    txtTitle: {
        fontSize: 15,
        color: black,
        fontWeight: "bold"
    },

    backBtn: {
        height: 45,
        width: "20%",
        marginLeft: "5%",
        borderRadius: 10,
        backgroundColor: white,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: black,
        shadowOpacity: 0.9,
        elevation: 5
    },

    backBtnImg: {
        height: 33,
        width: 33
    },

    userList: {
        flex: 1
    },

    userBtn: {
        height: 100,
        borderBottomColor: black + 50,
        borderBottomWidth: 1,
        flexDirection: "row",
        backgroundColor: white,
        alignItems: "center",
        justifyContent: "center"
    },

    userBtnIcon: {
        borderRadius: 50,
        height: 50,
        width: 50,
        position: "absolute",
        left: 25
    }
})