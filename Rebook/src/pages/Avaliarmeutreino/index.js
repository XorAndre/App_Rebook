import React from 'react';
<<<<<<< HEAD
import {Image, StyleSheet, View} from 'react-native';
import {
  Button,
  Container,
  Col,
  Grid,
  Content,
  Icon,
  Input,
  Text,
=======
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import {
  Bars,
  BoxUser,
  ContainerPhoto,
  UserProfile,
  User,
  VerticalMenu,
  ItemVertical,
  TextVertical,
  VerticalRed,
  VerticalGreen,
  VerticalGrey,
  ContainerCircle,
  Circle,
  TextCircle,
  TextDown,
  ContainerBars,
} from './styles';

import { 
  Button,
  Container,
  Col,
  Header,
  Grid,
  Title, 
  Content, 
  Form,
  Footer, 
  FooterTab, 
  Left, 
  List, 
  ListItem,
  Right, 
  Body, 
  Icon, 
  Input,
  Item,
  Text,
  Picker,
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
} from 'native-base';

import ProfilePhoto from '~/assets/img/professor2.png';

export default function AvaliarTreino({navigation}) {
  const Back = () => {
<<<<<<< HEAD
    navigation.navigate('Treino');
  };
=======
    navigation.navigate('Profile');
  };
  state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
  }
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
  return (
    <Container>
      <View style={styles.Topo}>
        <View style={styles.gridIcon}>
          <Button transparent>
<<<<<<< HEAD
            <Icon style={styles.Icone} name="arrow-back" onPress={Back} />
=======
            <Icon style={styles.Icone} name='arrow-back' onPress={Back} />
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
          </Button>
        </View>
        <View>
          <Text style={styles.TextoTopo}>COMO FOI SEU TREINO HOJE?</Text>
        </View>
<<<<<<< HEAD
        <View />
=======
        <View></View>
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
      </View>
      <View style={styles.TopoButton}>
        <View style={styles.gridTopoButton}>
          <Text style={styles.TextoTopo}>AVALIE SEU PROFESSOR</Text>
        </View>
      </View>
<<<<<<< HEAD
      <Content>
        <Grid>
          <Col style={styles.GridProfile}>
            <Image source={ProfilePhoto} style={styles.Perfil} />
            <Text style={styles.Details}>Caio Olivieri</Text>
            <Text style={styles.DetailsBold}>Musculação</Text>
            <Text style={styles.Details}>Cidade Jardim</Text>
            <Text style={styles.DetailsBold}>12/9</Text>
            <Text>Quarta-Feira</Text>

            <Input style={styles.ComentInput} placeholder="DEIXAR COMENTÁRIO" />
            <Button rounded success style={styles.Button}>
              <Text>ENVIAR</Text>
            </Button>
          </Col>
        </Grid>
      </Content>
=======
     <Content>
       <Grid>
         <Col style={styles.GridProfile}>
           <Image source={ProfilePhoto} style={styles.Perfil} />
           <Text style={styles.Details}>Caio Olivieri</Text>
           <Text style={styles.DetailsBold}>Musculação</Text>
           <Text style={styles.Details}>Cidade Jardim</Text>
           <Text style={styles.DetailsBold}>12/9</Text>
           <Text>Quarta-Feira</Text> 
           
           <Input style={styles.ComentInput} placeholder="DEIXAR COMENTÁRIO" />
           <Button rounded success style={styles.Button}>
            <Text>ENVIAR</Text>
          </Button>
         </Col>
       </Grid>
     </Content>
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
    </Container>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  Topo: {
=======
  Topo:{
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
    alignItems: 'center',
    backgroundColor: '#C23335',
    flexDirection: 'row',
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 15,
  },
<<<<<<< HEAD
  TopoButton: {
=======
  TopoButton:{
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
    alignItems: 'center',
    backgroundColor: '#C23335',
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 5,
  },
<<<<<<< HEAD
  gridIcon: {
    width: '16%',
  },
  gridTopoButton: {
    alignItems: 'center',
    width: '80%',
  },
  GridProfile: {
    alignItems: 'center',
    marginTop: 40,
  },
  Icone: {
    color: '#fff',
    marginTop: 10,
  },
  TextoTopo: {
=======
  gridIcon:{
    width: '16%',
  },
  gridTopoButton:{
    alignItems: 'center',
    width: '80%',
  },
  GridProfile:{
    alignItems: 'center',
    marginTop: 40,
  },
  Icone:{
    color: '#fff',
    marginTop: 10,
  },
  TextoTopo:{
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
<<<<<<< HEAD
  Perfil: {
    height: 120,
    width: 120,
  },
  Details: {
=======
  Perfil:{
    height: 120,
    width: 120,
  },
  Details:{
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
    textTransform: 'uppercase',
  },
<<<<<<< HEAD
  DetailsBold: {
=======
  DetailsBold:{
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10,
    textTransform: 'uppercase',
  },
<<<<<<< HEAD
  Button: {
    marginTop: 15,
  },
  ComentInput: {
    backgroundColor: '#EDEDED',
    borderRadius: 50,
    marginTop: 30,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 10,
    width: '90%',
  },
=======
  Button:{
    marginTop: 15,
  },
 ComentInput:{
   backgroundColor: '#EDEDED',
   borderRadius: 50,
   marginTop: 30,
   paddingBottom: 10,
   paddingLeft: 18,
   paddingRight: 18,
   paddingTop: 10, 
   width: '90%',
 }
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
});
