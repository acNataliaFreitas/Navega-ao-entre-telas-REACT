import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Cabecalho = () => {
    return (
      <View style={estilos.containerCabecalho}>
          <Text style={estilos.texto}>Lighteria</Text>
          <Image style={estilos.imagem} source={require('../img/compras.png')}/>
      </View>
    );
};
const estilos= StyleSheet.create({
  containerCabecalho:{
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  texto:{
    fontSize: 32,
    color: 'red'
  },
  imagem:{
    width: 50,
    height: 50
  }
});
export default Cabecalho;