import React from 'react';
<<<<<<< HEAD
import {StyleSheet} from 'react-native';
import {Bars, BoxUser, User, ContainerBars} from './styles';
import {
  Container,
  Col,
  Grid,
  Content,
  Left,
  List,
  ListItem,
  Right,
  Body,
  Text,
} from 'native-base';

import {StatusBar} from 'react-native';
import ProfilePhoto from '~/assets/img/user.png';
=======
import { StyleSheet, View, Text } from 'react-native';
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
} from 'native-base';


import {StatusBar} from 'react-native';
import Photo from '~/assets/img/user.png';
>>>>>>> 746ce7473ed10f45183e14297ff4246ba2080dc8
import BarsPhoto from '~/assets/img/bars.png';

export default function Profile({navigation}) {
  const openDrawer = () => {
    navigation.toggleDrawer();
  };

<<<<<<< HEAD
=======
  const updateUser = () => {
    console.log('atualizar');
  };

>>>>>>> 746ce7473ed10f45183e14297ff4246ba2080dc8
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
<<<<<<< HEAD
        <Grid>
          <Col />
        </Grid>
        <List>
          <ListItem>
            <Left>
              <User source={ProfilePhoto} />
            </Left>
            <Body>
              <Text>LUCCA</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem>
            <Left>
              <User source={ProfilePhoto} />
            </Left>
            <Body>
              <Text>ARTHUR</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem>
            <Left>
              <User source={ProfilePhoto} />
            </Left>
            <Body>
              <Text>ENZO</Text>
            </Body>
            <Right />
          </ListItem>
        </List>
=======
        <List>
            <ListItem>
              <Left>
                <User source={Photo} />
              </Left>
              <Body>
                <Text>LUCCA</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <User source={Photo} />
              </Left>
              <Body>
                <Text>ARTHUR</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <User source={Photo} />
              </Left>
              <Body>
                <Text>ENZO</Text>
              </Body>
              <Right>
                
              </Right>
            </ListItem>
          </List>
>>>>>>> 746ce7473ed10f45183e14297ff4246ba2080dc8
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  col: {
    alignItems: 'center',
  },
  clean: {
    color: '#fff',
  },
  grid: {
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    height: 30,
    width: 30,
  },
=======
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
 }
>>>>>>> 746ce7473ed10f45183e14297ff4246ba2080dc8
});
