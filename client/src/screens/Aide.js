import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Header"
import aideStyle from '../styles/aide/aide'

export default function App() {
  return (
      <View style={aideStyle.screen}>
        <Header></Header>
        <View style={aideStyle.container}>
          <View style={aideStyle.containerAide}>
            <View>
              <Text style={aideStyle.h1}>Aide</Text>
              <Text style={aideStyle.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam, felis eu scelerisque lobortis, neque leo iaculis enim, id convallis tellus nunc et tellus. Nullam vehicula lacus mauris, non finibus urna ullamcorper vel. Praesent consequat, lacus nec viverra vehicula, velit nisi sollicitudin enim, ac vehicula quam libero a massa. Donec sit amet faucibus justo. Curabitur pharetra odio nec scelerisque congue. Vestibulum nec imperdiet metus. Mauris posuere velit eu placerat consequat. Morbi ligula orci, bibendum non sollicitudin at, fermentum sed mi. Praesent a eros molestie, viverra metus in, interdum ante. Aenean a tempor lorem. Nam in nibh sed leo pellentesque egestas. Quisque hendrerit auctor orci, id pretium enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed hendrerit ligula nulla, et cursus mi convallis vitae.</Text>
            </View>
            <View style={aideStyle.dots}>
              <View style={aideStyle.dotSelected}></View>
              <View style={aideStyle.dot}></View>
              <View style={aideStyle.dot}></View>
            </View>
          </View>
        </View>  
      </View>
  );
}