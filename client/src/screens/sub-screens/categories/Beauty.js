import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import beautyStyle from '../../../styles/sub-screens/category/beauty'

const path = "../../../assets/images/main/category/"
export const ScreenBeauty = ({navigation}) => {
  return (
      <View style={beautyStyle.scrollContain}>
        <ScrollView style={beautyStyle.scrollViewStyle} showsVerticalScrollIndicator={false}>

          <TouchableOpacity onPress={() => {
            navigation.navigate('hairdresser')
          }}>
            <View style={beautyStyle.rowView}>
              <Image source={require(path + "hair_brush.png")} style={beautyStyle.icons}></Image>
              <Text style={beautyStyle.txt}>Coiffure</Text>
            </View>
          </TouchableOpacity>

          <View style={beautyStyle.bar}></View>

          <TouchableOpacity>
            <View style={beautyStyle.rowView}>
              <Image source={require(path + "massage.png")} style={beautyStyle.icons}></Image>
              <Text style={beautyStyle.txt}>Massage</Text>
            </View>
          </TouchableOpacity>

          <View style={beautyStyle.bar}></View>

          <TouchableOpacity>
            <View style={beautyStyle.rowView}>
              <Image source={require(path + "beach_umbrella.png")} style={beautyStyle.icons}></Image>
              <Text style={beautyStyle.txt}>Bronzage</Text>
            </View>
          </TouchableOpacity>

          <View style={beautyStyle.bar}></View>

          <TouchableOpacity>
            <View style={beautyStyle.rowView}>
              <Image source={require(path + "nails.png")} style={beautyStyle.icons}></Image>
              <Text style={beautyStyle.txt}>Manucure</Text>
            </View>
          </TouchableOpacity>

          <View style={beautyStyle.bar}></View>

          <TouchableOpacity>
            <View style={beautyStyle.rowView}>
              <Image source={require(path + "make_up.png")} style={beautyStyle.icons}></Image>
              <Text style={beautyStyle.txt}>Maquillage</Text>
              </View>
          </TouchableOpacity>

          <View style={beautyStyle.bar}></View>

          <TouchableOpacity>
            <View style={beautyStyle.rowView}>
              <Image source={require(path + "lotus.png")} style={beautyStyle.icons}></Image>
              <Text style={beautyStyle.txt}>Spa</Text>
              </View>
          </TouchableOpacity>

          <View style={beautyStyle.bar}></View>

          <TouchableOpacity>
            <View style={beautyStyle.rowView}>
              <Image source={require(path + "perfume.png")} style={beautyStyle.icons}></Image>
              <Text style={beautyStyle.txt}>Parfumerie</Text>
            </View>
          </TouchableOpacity>

          <View style={beautyStyle.bar}></View>

          <TouchableOpacity>
            <View style={beautyStyle.rowView}>
              <Image source={require(path + "razor.png")} style={beautyStyle.icons}></Image>
              <Text style={beautyStyle.txt}>Épilation</Text>
            </View>
          </TouchableOpacity>

        </ScrollView>
      </View>
  )
}