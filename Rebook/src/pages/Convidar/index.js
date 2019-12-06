import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
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
  CheckBox,
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
  Text
} from 'native-base';


import {StatusBar} from 'react-native';
import ProfilePhoto from '~/assets/img/user.png';
import BarsPhoto from '~/assets/img/bars.png';
import Alessandra from '~/assets/img/perfis/alessandra.png';
import Artur from '~/assets/img/perfis/artur.png';
import Lucas from '~/assets/img/perfis/lucas.png';
import Enzo from '~/assets/img/perfis/enzo.png';
import Luiza from '~/assets/img/perfis/luiza.png';
import Maria from '~/assets/img/perfis/maria.png';
import Vitoria from '~/assets/img/perfis/vitoria.png';
import Leonardo from '~/assets/img/perfis/leonardo.png';

export default function Profile({navigation}) {
  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  const updateUser = () => {
    console.log('atualizar');
  };

  return (
    <Container>
      <StatusBar hidden={true} />
      <ContainerBars onPress={openDrawer}>
        <Bars source={BarsPhoto} />
      </ContainerBars>
      <BoxUser>
        <Content>
          <Grid style={styles.grid}>
            <Col style={styles.col}>
              <Text style={styles.clean}>
                INDIQUE UM AMIGO PARA TREINAR UM DIA COM VOCÊ
              </Text>
            </Col>
          </Grid>
        </Content>
      </BoxUser>
      <Content>
        <Grid>
          <Col>
            <Item style={styles.ContainerInput}>
              <Icon name="ios-search" />
              <Input placeholder="Pesquisar por amigos" />
              <Icon name="ios-people" />
            </Item>
          </Col>
        </Grid>
        <View style={styles.ContainerGrid}>
          <View style={styles.gridCheck}>
            <CheckBox checked={true} color="green"/>
          </View>
          <View style={styles.foto}>
            <Image source={Lucas}/>
          </View>
          <View style={styles.texto}>
            <Text style={styles.name}>LUCCA</Text>
          </View>
        </View>
        <View style={styles.ContainerGrid}>
          <View style={styles.gridCheck}>
            <CheckBox checked={false} color="green"/>
          </View>
          <View style={styles.foto}>
            <Image source={Alessandra}/>
          </View>
          <View style={styles.texto}>
            <Text style={styles.name}>ALESSANDRA</Text>
          </View>
        </View>
        <View style={styles.ContainerGrid}>
          <View style={styles.gridCheck}>
            <CheckBox checked={false} color="green"/>
          </View>
          <View style={styles.foto}>
            <Image source={Vitoria}/>
          </View>
          <View style={styles.texto}>
            <Text style={styles.name}>VICTÓRIA</Text>
          </View>
        </View>
        <View style={styles.ContainerGrid}>
          <View style={styles.gridCheck}>
            <CheckBox checked={false} color="green"/>
          </View>
          <View style={styles.foto}>
            <Image source={Artur}/>
          </View>
          <View style={styles.texto}>
            <Text style={styles.name}>ARTHUR</Text>
          </View>
        </View>
        <View style={styles.ContainerGrid}>
          <View style={styles.gridCheck}>
            <CheckBox checked={true} color="green"/>
          </View>
          <View style={styles.foto}>
            <Image source={Maria}/>
          </View>
          <View style={styles.texto}>
            <Text style={styles.name}>MARIA JÚLIA</Text>
          </View>
        </View>
        <View style={styles.ContainerGrid}>
          <View style={styles.gridCheck}>
            <CheckBox checked={false} color="green"/>
          </View>
          <View style={styles.foto}>
            <Image source={Luiza}/>
          </View>
          <View style={styles.texto}>
            <Text style={styles.name}>LUIZA</Text>
          </View>
        </View>
        <View style={styles.ContainerGrid}>
          <View style={styles.gridCheck}>
            <CheckBox checked={false} color="green"/>
          </View>
          <View style={styles.foto}>
            <Image source={Enzo}/>
          </View>
          <View style={styles.texto}>
            <Text style={styles.name}>ENZO</Text>
          </View>
        </View>
        <View style={styles.ContainerGrid}>
          <View style={styles.gridCheck}>
            <CheckBox checked={true} color="green"/>
          </View>
          <View style={styles.foto}>
            <Image source={Leonardo}/>
          </View>
          <View style={styles.texto}>
            <Text style={styles.name}>LEONARDO</Text>
          </View>
        </View>
        <Grid>
          <Col style={styles.ButtonAlign}>
            <Button rounded success>
              <Text>ENVIAR</Text>
            </Button>
          </Col>
        </Grid>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  col:{
    alignItems: 'center',
  },
  clean:{
    color: '#fff',
  },
  grid:{
    alignItems: 'center',
    marginTop: 20,
  },
 icon:{
  height: 30,
  width: 30,
 },
 ContainerInput:{
  alignItems: 'center',
  marginLeft: 20,
  width: '90%',
 },
 ContainerGrid:{
  flexDirection: 'row',
  marginTop: 30,
  width: '90%',
 },
 gridCheck:{
   alignItems: 'center',
   marginTop: 13,
   width: '14%',
 },
 name:{
   marginLeft: 10,
   marginTop: 10,
 },
 ButtonAlign:{
   alignItems: 'center',
   marginTop: 10,
 }
});
