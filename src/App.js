/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {foto} from 'react-native';
import Card from './components/Card/index.js';


const App = () => {

  function handleRedeSocial(rede_social){
    switch(rede_social){

      case 'linkedin':
           Alert.alert('Meu Linkedin','https://linkedin.com/in/leonardo-maximino-18567255')
      break
      case 'github':
           Alert.alert('Meu Github','https://github.com/lmbernardo7520112')
      break
      case 'facebook':
           Alert.alert('Meu Facebook','https://www.facebook.com/leonardo.maximinobernardo/')
      break
    }
  }
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
           <Image source={require('./assets/foto.jpg')} style={style.foto} />
           <Text style={style.nome}>LEONARDO MAXIMINO BERNARDO</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
            <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
            <Icon name="facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
            <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <Card titulo="Experiências Profissionais">
             <Text style={style.card_content_text}>SEECT/PB</Text>
             <Text style={style.card_content_text}>IFRN</Text>
        </Card>
        
      </View>
    </>
  );
};

const style = StyleSheet.create({
   page: {
     backgroundColor: '#E7E7E7',
     flex: 1,
     alignItems: 'center',
   },
   container_cabecalho: {
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 30
   },
   foto: {
     width: 250,
     height: 250,
     borderRadius: 125
   },
   nome: {
     fontSize: 20,
     marginTop: 5,
     fontWeight: 'bold'
   },
   funcao: {
     color: '#939393',
     marginTop: 10
   },
   reders_sociais: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     width: '100%',
     marginTop: 20
   },
   card_content_text: {
    color: '#939393',
    marginBottom: 10
   }
   

})



export default App;
