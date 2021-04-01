import { StyleSheet } from 'react-native'
import { primaryColor, white, black, light_red, light_gray } from '../colors'

export default registerStyle = StyleSheet.create({
  form: {
    height: "108%", 
    width: "100%", 
    backgroundColor: white, 
    alignItems: "center", 
    borderTopLeftRadius: 35, 
    borderTopRightRadius: 35, 
    position: "absolute", 
    bottom: 0
  },

  content: {
    height: "110%", 
    width: "80%" 
  },

  sliderButton: { 
    height: "13%", 
    width: "100%", 
    position: "relative", 
    justifyContent: "center"
  },

  sliderButtonTxt: { 
    color: black, 
    textAlign: "center", 
    fontWeight: "bold", 
    fontSize: 30 
  },

  sliderButtonIcon: { 
    height: 33, 
    width: 33, 
    marginLeft: "auto", 
    right: 10, 
    position: "absolute" 
  },

  icon: {
    alignSelf: "center",
    marginBottom: 35 
  },

  text: { 
    color: black, 
    alignSelf: "flex-start", 
    paddingLeft: 10, 
    fontSize: 19 
  },

  input: { 
    height: "auto", 
    width: "100%", 
    textAlign: "center", 
    color: black, 
    borderBottomWidth: 1, 
    borderBottomColor: "black", 
    borderRadius: 11, 
    marginBottom: 10 
  },

  passwordSection: { 
    height: "5%", 
    width: "100%", 
    position: "relative",
    marginBottom: -20
  },

  passwordInput: { 
    height: "auto", 
    width: "100%", 
    textAlign: "center", 
    color: black, 
    position: "relative", 
    borderBottomWidth: 1, 
    borderBottomColor: "black", 
    borderRadius: 6,
  },

  passwordHideButton: {
    height: "100%", 
    justifyContent: "center", 
    position: "absolute", 
    zIndex: 9999, 
    right: 10,
    top: -5
  },

  passwordHideButtonIcon: {
    height: 19, 
    width: 19
  },

  registerButtonArea: { 
    height: "25%", 
    width: "100%", 
    justifyContent: "center" 
  },

  registerButton : { 
    height: "41%", 
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
    position: "relative", 
    backgroundColor: black, 
    borderRadius: 50 
  },

  registerButtonTxt: {
    color: white, 
    fontWeight: "bold", 
    fontSize: 30 
  },

  registerButtonIcon: {
    height: 33, 
    width: 33, 
    position: "absolute", 
    right: 10
  }

})