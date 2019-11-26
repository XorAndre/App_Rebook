import * as React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    Image, 
    TouchableHighlight,
    TextInput,
    Picker,
  } from 'react-native';

export default class Registro extends React.Component {   
  render() {
    return (
      <View style={styles.containerRegistro}>
        <View style={styles.containerTopo}>
            <View style={styles.containerMenu}>
              <Image source={require('../assets/imgs/menu.svg')} style={styles.Menu} />
            </View>
            <View style={styles.containerTexto}>
                <Text style={styles.textoTopo}>Registro</Text>
            </View>
        </View>
        <View style={styles.containerInputs}>
          <View style={styles.formGroup}>
            <Text style={styles.label}> Nome </Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}> Telefone </Text>
            <TextInput style={styles.input} />           
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}> E-mail </Text>
            <TextInput style={styles.input} />           
          </View>    
          <View style={styles.formGroup}>
          </View>
          <View style={styles.containerButton}>
            <TouchableHighlight style={styles.button} onPress={this.onPress}>
              <Text style={styles.colorButton}> Enviar </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerRegistro:{
      height: 900,
  },
  containerTopo:{
      backgroundColor: '#C23335',
      display: 'flex',
      flexDirection: 'row',
      height: 112,
      paddingTop: 50,
  },
  containerMenu:{
    width: '35%',  
  },
  Menu:{
    height: 30,
    position: 'absolute',
    top: 2,
    width: 30,
  },
  containerTexto:{
    width: '80%',  
  },    
  textoTopo:{
    color: '#fff',
    fontSize: 30,  
    fontWeight: 'bold',  
    textTransform: 'uppercase',  
  },
  formGroup:{
      margin: 30,
  },
  label:{
      fontSize: 16,
      textTransform: 'uppercase', 
  },    
  input:{
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: '#333',
      borderWidth: 2,
      padding: 15,
  },
  containerButton:{
      display: 'flex',
      alignItems: 'center',
      marginTop: 30,
  },
  button:{
      backgroundColor: '#B8D54B',
      borderRadius: 80,
      paddingBottom: 20,
      paddingLeft: 66,
      paddingTop: 20,
      width: 200,
  },    
  colorButton:{
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'uppercase',  
},
text:{
  fontSize: 30,
  alignSelf: 'center',
  color: 'red'
 }    
});