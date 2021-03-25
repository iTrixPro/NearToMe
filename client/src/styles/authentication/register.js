import { StyleSheet } from 'react-native'

export default registerStyle = StyleSheet.create({
  form: {
    height: "106%", 
    width: "100%", 
    backgroundColor: "#fff9f9", 
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
    height: "10%", 
    width: "100%", 
    position: "relative", 
    justifyContent: "center", 
    marginBottom: 50 
  },

  sliderButtonTxt: { 
    color: "#1e1e1e", 
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
    marginBottom: 50 
  },

  text: { 
    color: "#bebebe", 
    alignSelf: "flex-start", 
    paddingLeft: 10, 
    fontSize: 19 
  },

  input: { 
    height: "5%", 
    width: "100%", 
    textAlign: "center", 
    color: "#1e1e1e", 
    borderBottomWidth: 1, 
    borderBottomColor: "black", 
    borderRadius: 11, 
    marginBottom: 10 
  },

  passwordSection: { 
    height: "5%", 
    width: "100%", 
    position: "relative" 
  },

  passwordInput: { 
    height: "100%", 
    width: "100%", 
    textAlign: "center", 
    color: "#1e1e1e", 
    position: "relative", 
    borderBottomWidth: 1, 
    borderBottomColor: "black", 
    borderRadius: 11 
  },

  passwordHideButton: {
    height: "100%", 
    justifyContent: "center", 
    position: "absolute", 
    zIndex: 9999, 
    right: 10
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
    backgroundColor: "#1e1e1e", 
    borderRadius: 50 
  },

  registerButtonTxt: {
    color: "#fff9f9", 
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