import * as React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    Image, 
    TouchableHighlight,
    TextInput,
    createAppContainer,
    createDrawerNavagitor
  } from 'react-native';  
//Reder    
export default class Resultados extends React.Component {
  static navigationOptions = { 
    drawerLabel: "RESULTADOS"    
  }    
  render() {
    return (
      <View style={styles.containerRegistro}>
            
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
      height: 260,
      paddingTop: 50,
  }   
});