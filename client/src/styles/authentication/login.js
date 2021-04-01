import {StyleSheet} from 'react-native'
import { primaryColor, white, black, light_red } from '../colors'

export default loginStyle = StyleSheet.create({
  form: { 
    height: "97%", 
    width: "100%", 
    alignItems: "center", 
    paddingTop: 150, 
    backgroundColor: primaryColor
  },

  content: {
    height: "100%",
    width: "90%"
  },

  icon: {
    alignSelf: "center", 
    marginBottom: 50
  },

  txt: {
    color: white, 
    alignSelf: "flex-start", 
    paddingLeft: 10, 
    fontSize: 19
  },

  mailInput: { 
    height: "10%", 
    width: "100%", 
    textAlign: "center", 
    color: white, 
    backgroundColor: light_red, 
    borderRadius: 11, 
    marginBottom: 10,
  },

  pwdSection: {
    height: "10%", 
    width: "100%", 
    position: "relative"
  },

  pwdInput: {
    height: "100%", 
    width: "100%", 
    textAlign: "center", 
    color: white, 
    position: "relative", 
    backgroundColor: light_red, 
    borderRadius: 11
  },

  hidePwdButton: { 
    height: "100%", 
    justifyContent: "center", 
    position: "absolute", 
    zIndex: 9999, 
    right: 10 
  },

  hidePwdIcon: {
    height: 19, 
    width: 19
  },

  loginButtonSection: {
    height: "25%", 
    width: "100%", 
    justifyContent: "center", 
    marginTop: 50
  },

  loginButton: {
    height: "41%", 
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
    position: "relative", 
    backgroundColor: white, 
    borderRadius: 50
  },

  loginButtonText: {
    color: black, 
    fontWeight: "bold", 
    fontSize: 30 
  },

  loginButtonIcon: {
    height: 33, 
    width: 33, 
    position: "absolute", 
    right: 10 
  },

  forgetPwdText: {
    color: white, 
    fontSize: 12, 
    textAlign: "center", 
    paddingTop: 10
  }

})