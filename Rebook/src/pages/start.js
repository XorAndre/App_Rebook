import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput,
} from 'react-native'

export default class Start extends React.Component {   
  render() {
    return (
      <View style={styles.containerRegistro}>
        <View style={styles.containerTopo}>
            <View style={styles.containerMenu}>
            
            </View>
            <View style={styles.containerTexto}>
                <Text style={styles.textoTopo}>Registro</Text>
            </View>
        </View>
        <View style={styles.containerInputs}>
          <View style={styles.formGroup}>
            <Text style={styles.label}> VOCÊ JÁ É ALUNO (A) REEBOK? </Text>
          </View>    
          <View style={styles.containerButton}>
            <TouchableHighlight style={styles.buttonVerde} onPress={this.onPress}>
              <Text style={styles.colorButton}> Sim </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonCinza} onPress={this.onPress}>
              <Text style={styles.colorButton}> Ainda Não </Text>
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
    fontSize: 22,
    textAlign: 'center',  
  },      
  containerButton:{
      display: 'flex',
      alignItems: 'center',
      marginTop: 30,
  },
  buttonVerde:{
      backgroundColor: '#B8D54B',
      borderRadius: 80,
      paddingBottom: 20,
      paddingLeft: 80,
      paddingTop: 20,
      width: 200,
  },    
  buttonCinza:{
      backgroundColor: '#C1C1C1',
      borderRadius: 80,
      marginTop: 10,
      paddingBottom: 20,
      paddingLeft: 45,
      paddingTop: 20,
      width: 180,
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