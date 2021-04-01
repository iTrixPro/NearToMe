import {StyleSheet} from 'react-native'
import { white } from '../colors'

export default categoryStyle = StyleSheet.create({
  container : {
    alignItems: 'center',
    backgroundColor: white,
    height: "100%"
  },

  button : {
    flex: 1,
    height: 150, 
    width: 345,
    marginTop: "7%",
    position : 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  img: { 
    width: 345,
    height: 150
  },

  txt: {
    fontSize: 33,
    color: white,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute'
  },

  secondButton: {
    marginTop: "50%"
  },

  row: {
    flexDirection: 'row'
  },

  smallButton : {
    flex: 1,
    height: 150, 
    width: 155, 
    marginTop: "98%",
    justifyContent: 'center',
    alignItems: 'center'
  },

  smallImg: {
    height: 150, 
    width: 155
  },

  smallTxt: {
    fontSize: 25,
    color: white,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute'
  },

})