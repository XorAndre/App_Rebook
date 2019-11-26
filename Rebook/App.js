import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createDrawerNavigator, DrawerItems } from 'react-navigation'
//Screens
import PerfilAluno from './src/pages/PerfilAluno'
import PerfilProfessor from './src/pages/PerfilProfessor'
//Render
export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView>
    <View style={styles.Header}>
      <View style={styles.container}>
        <View style={styles.GridImage}>
          <Image source={require('./src/assets/imgs/perfis/user.png')} style={styles.imagemMenu} />
        </View>
        <View style={styles.GridText}>
          <Text style={styles.textName}>NOME</Text>
          <Text style={styles.textCodigo}>000001</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.GridTextBorder}>
          <Text style={styles.textName}>NOME</Text>
          <Text style={styles.textCodigo}>000001</Text>
        </View>
        <View style={styles.GridText}>
          <Text style={styles.textName}>NOME</Text>
          <Text style={styles.textCodigo}>000001</Text>
        </View>
      </View>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  PerfilAluno:PerfilAluno,
  PerfilProfessor:PerfilProfessor
}, {
  contentComponent: CustomDrawerComponent
})

//Estilo
const styles = StyleSheet.create({
   Header:{
    backgroundColor: '#C23335',
    height: 200,
   },
   container:{
    flexDirection: 'row',
    padding: 40,
   },
   GridImage:{
    width: '50%',
   },
   GridText:{
    alignItems: 'center',
    marginTop: 15,
    width: '50%',
   },
   imagemMenu:{
    marginBottom: 40,
   },
   textName:{
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
   },
   textCodigo:{
    color: '#fff',
    fontSize: 19,
   } 
});