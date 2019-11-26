import * as React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    Image, 
    TouchableHighlight,
    TextInput
  } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/imgs/logo_login.png')} />
        <View style={styles.containerInputs}>
          <View style={styles.formGroup}>
            <Text style={styles.label}> Usuário </Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}> Senha </Text>
            <TextInput style={styles.input} />           
          </View>
          <View style={styles.containerButton}>
            <TouchableHighlight style={styles.button} onPress={this.onPress}>
              <Text style={styles.colorButton}> Entrar </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center',
    backgroundColor: '#AF393E',
    justifyContent: 'center',
    minHeight: '100%',
    padding: 80,
  },
  logo: {
    height: 128,
    width: 128,
  },
  containerInputs:{
      marginTop: 40,
      width: 300,
  },
  formGroup:{
      margin: 10,
  },   
  label:{
      color: 'white',
      fontSize: 18,
  },
  input:{
      backgroundColor: 'transparent',
      borderBottomColor: 'white',
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderWidth: 2,
      padding: 10,
  },
  containerButton:{
      alignItems: 'center',
  },
  button:{
      backgroundColor: 'white',
      borderRadius: 50,
      marginTop: 20,
      padding: 15,
  },
  colorButton:{
      color: '#AF393E',
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'uppercase',
  }    
});