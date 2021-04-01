import {StyleSheet} from 'react-native'
import { black, white } from '../colors'

export default agendaStyle = StyleSheet.create({

  container: {
    backgroundColor: white
  },

  headContainer: {
    alignItems: 'flex-start',
    top: "5%"
  },
  
  head: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    left: 45,
    width: "70%",
    borderBottomColor: black,
    borderBottomWidth: 1
  },

  icon: {
    width: 25,
    height: 25,
    marginRight: 20
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20, 
    marginBottom: 15
  },

  block: {
    height: "100%",
    top: "5%",
    left: "17%"
  },

  scrollContain: {
    height: 10
  },

  textArea: {
    marginTop: "5%"
  },

  date: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: "2%"
  },

  txt: {
    fontSize: 11,
    marginLeft: "1%"
  }

})