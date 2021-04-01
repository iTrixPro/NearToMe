import React from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Header from "../../../component/header"
import hairdresserStyle from "../../../styles/sub-screens/category/hairdresser"
const path = "../../../assets/images/main/category/";

export const ScreenHairdresser = (props) => {
  return (
    <View style={hairdresserStyle.form}>
    <Header userFullName = {props.userFullName}></Header>
      <View style={hairdresserStyle.content}>
        <View style={hairdresserStyle.buttons}>
          <View style={hairdresserStyle.title}>
            <Image source={require(path + "hair_brush.png")} style={hairdresserStyle.titleIcon}></Image>
            <Text style={hairdresserStyle.txtTitle}>Coiffure</Text>
          </View>
          <TouchableOpacity style={hairdresserStyle.backBtn}>
            <Image source={require(path + "filter.png")} style={hairdresserStyle.backBtnImg}></Image>
          </TouchableOpacity>
        </View>
        <ScrollView style={hairdresserStyle.userList} showsVerticalScrollIndicator= {false}>
          <TouchableOpacity style={hairdresserStyle.userBtn}>
            <Image source={require(path + "user_icon.png")} style={hairdresserStyle.userBtnIcon}></Image>
            <Text style={hairdresserStyle.txt}>Harold Schwarzenegger</Text>
          </TouchableOpacity>

          <TouchableOpacity style={hairdresserStyle.userBtn} onPress={() => {
            props.navigation.navigate('particulier')
          }}>
            <Image source={require(path + "user_icon.png")} style={hairdresserStyle.userBtnIcon}></Image>
            <Text style={hairdresserStyle.txt}>Amid Eon</Text>
          </TouchableOpacity>

          <TouchableOpacity style={hairdresserStyle.userBtn}>
            <Image source={require(path + "user_icon.png")} style={hairdresserStyle.userBtnIcon}></Image>
            <Text style={hairdresserStyle.txt}>Pierre-Nicolas Teurre</Text>
          </TouchableOpacity>

          <TouchableOpacity style={hairdresserStyle.userBtn}>
            <Image source={require(path + "user_icon.png")} style={hairdresserStyle.userBtnIcon}></Image>
            <Text style={hairdresserStyle.txt}>Pierre Pheuillecizo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={hairdresserStyle.userBtn}>
            <Image source={require(path + "user_icon.png")} style={hairdresserStyle.userBtnIcon}></Image>
            <Text style={hairdresserStyle.txt}>Marie Eau</Text>
          </TouchableOpacity>

          <TouchableOpacity style={hairdresserStyle.userBtn}>
            <Image source={require(path + "user_icon.png")} style={hairdresserStyle.userBtnIcon}></Image>
            <Text style={hairdresserStyle.txt}>Harold Schwarzenegger</Text>
          </TouchableOpacity>

          <TouchableOpacity style={hairdresserStyle.userBtn}>
            <Image source={require(path + "user_icon.png")} style={hairdresserStyle.userBtnIcon}></Image>
            <Text style={hairdresserStyle.txt}>Amid Eon</Text>
          </TouchableOpacity>

          <TouchableOpacity style={hairdresserStyle.userBtn}>
            <Image source={require(path + "user_icon.png")} style={hairdresserStyle.userBtnIcon}></Image>
            <Text style={hairdresserStyle.txt}>Pierre-Nicolas Teurre</Text>
          </TouchableOpacity>

          <TouchableOpacity style={hairdresserStyle.userBtn}>
            <Image source={require(path + "user_icon.png")} style={hairdresserStyle.userBtnIcon}></Image>
            <Text style={hairdresserStyle.txt}>Pierre Pheuillecizo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={hairdresserStyle.userBtn}>
            <Image source={require(path + "user_icon.png")} style={hairdresserStyle.userBtnIcon}></Image>
            <Text style={hairdresserStyle.txt}>Marie Eau</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}