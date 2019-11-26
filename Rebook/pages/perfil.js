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
export default class Perfil extends React.Component {
  static navigationOptions = { 
    drawerLabel: "Perfil Aluno"    
  }    
  render() {
    return (
      <View style={styles.containerRegistro}>
        <View style={styles.containerTopo}>
            <View style={styles.containerTextPerfil}>
                <Text style={styles.textoTopoLeft}>67 KG</Text>
            </View>
            <View style={styles.containerTextoPerfil}>
                <Text style={styles.textoTopo}>NOME</Text>
                <Text style={styles.textoTopoSpan}>000001</Text>
                <Image source={require('../assets/imgs/perfis/user.png')}/>
                <TouchableHighlight style={styles.buttonBranco} onPress={this.onPress}>
                  <Text style={styles.colorButtonClean}> Entrar </Text>
                </TouchableHighlight>               
            </View>
            <View style={styles.containerTextoPerfil}>
                <Text style={styles.textoTopoRight}>178 CM</Text>
            </View>    
        </View>
        <View style={styles.containerContent}>
            <View style={styles.containerCheckbox}>
            </View>        
            <View style={styles.containerCirculo}>
                <View style={styles.circulo}>
                    <Text style={styles.bigNumber}>500</Text>
                    <Text style={styles.smallText}>KCAL</Text>
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
      height: 260,
      paddingTop: 50,
  },
  containerTextPerfil:{
    alignItems: 'center',
    flexDirection: 'column',  
    padding: 18,  
    width: '38.88%',  
  },   
  textoTopo:{
    color: '#fff',
    fontSize: 27,    
    textAlign: 'center',  
    textTransform: 'uppercase',  
  },
  textoTopoSpan:{
    color: '#fff', 
    fontSize: 19,  
    textAlign: 'center',  
  },
  textoTopoLeft:{
    color: '#fff',
    fontSize: 19,  
    position: 'relative',
    left: 40,
    top: 60,  
  }, 
  textoTopoRight:{
    color: '#fff',
    fontSize: 19,  
    position: 'relative',
    left: 10,
    top: 80,  
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
  buttonBranco:{
      backgroundColor: '#fff',
      borderRadius: 80,
      marginTop: 10,
  },          
  colorButton:{
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'uppercase',  
},
colorButtonClean:{
    color: '#B3453E',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    textTransform: 'uppercase',  
},    
text:{
  fontSize: 30,
  alignSelf: 'center',
  color: 'red'
 },
containerContent:{
    padding: 10,
},    
containerCheckbox:{
    flexDirection: 'row',
    height: 60,
    margin: 'auto',
    width: '100%',
},
containerCirculo:{
    alignItems: 'center',
    marginTop: 1,
    width: '100%',
},
circulo:{
    alignItems: 'center',
    borderRadius: 100,
    borderColor: "#F24979",
    borderStyle: 'solid',
    borderWidth: 4,
    height: 160,
    width: 160,
},
bigNumber:{
    color: '#F24979',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
},
smallText:{
    color: '#F24979',
    fontSize: 15,
}    
});