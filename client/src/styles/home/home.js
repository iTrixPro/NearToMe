import { StyleSheet } from 'react-native'
import { white, black, light_grey} from './colors'

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
    height: "20%",
    borderBottomWidth: 3,
    borderBottomColor: light_grey
  },

  titleIcon: {
    height: 33,
    width: 33,
    position: "absolute"
  },

  titleTxt: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 50
  },

  txt: {
    color: black,
    fontSize: 19
  },

  hImg: {
    height: 100,
    margin: 2
  }

})