import {StyleSheet} from 'react-native'
import { black, white } from '../../colors'

export default beautyStyle = StyleSheet.create({
  scrollContain: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: white
  },

  icons: {
    width: 40,
    height: 40,
    marginRight: 65
  },

  txt: {
    fontWeight: 'bold',
    fontSize: 20
  },

  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 20,
    left: 50
    
  },

  bar: {
    height: 1,
    width: 282,
    backgroundColor: black,
    borderRadius: 50,
    marginLeft: 25,
  },

  scrollViewStyle: {
    marginVertical: '2%',
    marginLeft: -20
  }
})