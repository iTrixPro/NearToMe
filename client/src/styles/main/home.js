import { StyleSheet } from 'react-native'
import { white, black} from '../colors'

export default homeStyle = StyleSheet.create({
  form: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: white
  },

  content: {
    height: "100%",
    width: "90%",
    paddingTop: 10
  },

  block: {
    height: "25%",
    marginTop: 10
  },

  blockContent: {
    height: "80%",
    padding: 10
  },

  title: {
    flexDirection: "row",
    height: "20%",
    borderBottomWidth: 1,
    borderBottomColor: black
  },

  titleIcon: {
    height: 25,
    width: 25,
    marginRight: 20
  },

  titleTxt: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 20
  },

  txt: {
    color: black,
    fontSize: 12
  },

  button: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 19
  },

  img: {
    height: 100,
    width: 277
  },

  txtOnImg: {
    fontSize: 22,
    fontWeight: 'bold',
    color: white,
    position: 'absolute'
  }

})