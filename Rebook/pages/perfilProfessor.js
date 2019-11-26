import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput,
  Picker,
  Button,
} from 'react-native'

export default class PerfilProfessor extends React.Component {   
  render() {
    return (
      <View style={styles.containerRegistro}>
        <View style={styles.containerTopo}>
          <View style={styles.containerImagem}>
           <Image 
             style={styles.imagemProfessor}
             source={{uri:'https://unsplash.it/600/400/?random'}}
           />
          </View>
        </View>
        <View style={styles.containerContent}>
          <View style={styles.containerNome}>
            <Text style={styles.Nome}>
              ANSELMO FERNANDES MARQUES
            </Text>
            <Text style={styles.Detalhes}>
              AVALIAÇÃO 4,0
            </Text>
            <View style={styles.cointaineStar}>
        
            </View>
          </View>
          <View style={styles.containerButton}>
            <TouchableHighlight style={styles.button} onPress={this.onPress}>
              <Text style={styles.colorButton}> Entrar </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.containerCards}>
            <View style={styles.headerCard}>
              <Text style={styles.TextCard}>ELOGIO</Text>
            </View>
            <View style={styles.bodyCard}>
              <View style={styles.cards}>
                <Text style={styles.small}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </Text>
              </View>
              <View style={styles.cards}>
                <Text style={styles.small}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </Text>
              </View>
            </View>
            <View style={styles.bottom}>
              <Text style={styles.TextCard}>CONQUISTA</Text>
              <Image source={require('../assets/icones/trofeu.png')}/>
            </View>
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
      height: 200,
      paddingTop: 50,
  },
  containerImagem:{
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row', 
    marginLeft: '25%',
    width: '50%',
  },
  imagemProfessor:{
    borderRadius: 100,
    height: 200,
    position: 'absolute',
    top: 4, 
    width: 200,
  },
  containerContent:{
    marginTop: 70,
  },
  containerNome:{
    alignItems: 'center', 
    marginTop: 10,
    width: '96%', 
  },
  Nome:{
    fontSize: 20,
  },
  Detalhes:{
    fontSize: 23,
    fontWeight: 'bold', 
  },
  containerButton:{
    marginTop: 5,
  },
  colorButton:{
    alignItems: 'center', 
    backgroundColor: '#B3453E',
    borderRadius: 100,
    color: '#fff',
    fontSize: 17,
    marginLeft: '20%',
    padding: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '50%',
  },
  cointaineStar:{
    alignItems: 'center',
    width: '99%', 
  },
  containerCards:{
    padding: 20,
  },
  bodyCard:{
    flexDirection: 'row', 
  },
  cards:{
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',  
    height: 100,
    margin: 3,
    padding: 8,
    width: '50%',
  },
  TextCard:{
    color: '#8D8D8D',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
    textTransform: 'uppercase',
  },
  bottom:{
    width: '98%',
  }    
});