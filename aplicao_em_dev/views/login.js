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
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 128,
    width: 128,
  },
  containerInputs:{
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    position: 'relative', 
  },
  containerButton:{
    alignItems: 'center',
    marginTop: 37,  
  },
  formGroup:{
    alignItems: 'flex-start',  
    position: 'relative',
    top: '5',
  },
  label:{
    color: '#fff',
    fontSize: 17,
    marginTop: 23,
  },
  input: {
    borderBottomColor: 'white',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    color: 'white',
    padding: 6,
    width: 240,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 80,
    display: 'inlineBlock',
    marginTop: 18,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 35,
    paddingRight: 35,
  },
  colorButton: {
    color: '#AF393E',
  }
});
