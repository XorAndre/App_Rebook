import * as React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    Image, 
    TouchableHighlight,
    TextInput
  } from 'react-native';

export default class perfilAluno extends React.Component {
  render() {
    return (
      <View style={stylePerfil.topo}>
        <View style={stylePerfil.boxTopo}>
          <Text> 67KG </Text>
        </View>
        <View style={stylePerfil.boxTopo}>
          <Text>Nome</Text>
        </View>
        <View style={stylePerfil.boxTopo}>
          <Text></Text>
        </View>
      </View>
    );
  }
}

const stylePerfil = StyleSheet.create({
  topo:{
    backgroundColor: '#C23335',
    display: 'flex',
    flexDirection: 'row', 
  },
  boxTopo:{
    color: '#fff',
    width: '33.33%',
  }
});
