import React from 'react';
<<<<<<< HEAD
import {StyleSheet} from 'react-native';
import {Container, Bars, BoxUser, ContainerBars} from './styles';
import {Col, Grid, Content, Form, Input, Text} from 'native-base';
=======
import { StyleSheet, View } from 'react-native';
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
} from 'native-base';


>>>>>>> 746ce7473ed10f45183e14297ff4246ba2080dc8
import {StatusBar} from 'react-native';
import ProfilePhoto from '~/assets/img/user.png';
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
              <Text style={styles.clean}>AJUDA</Text>
            </Col>
          </Grid>
        </Content>
      </BoxUser>
      <Content>
        <Grid>
          <Col>
<<<<<<< HEAD
            <Form>
              <Text>Ajuda</Text>
              <Input style={styles.textArea} />
=======
            <Form style={styles.Form}>
              <Text style={styles.text}>Precisa de alguma ajuda?</Text>
              <Input style={styles.textArea} />
              <Button style={styles.button} rounded success>
                <Text>ENVIAR</Text>
              </Button>
>>>>>>> 746ce7473ed10f45183e14297ff4246ba2080dc8
            </Form>
          </Col>
        </Grid>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  col:{
<<<<<<< HEAD
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
 textArea:{
  height: 120,
 }
=======
    alignItems: 'center', 
  },
  clean:{
    color: '#fff',
    fontSize: 23,
  },
  grid:{
    alignItems: 'center', 
    marginTop: 20,
  },
  icon:{
    height: 30,
    width: 30,
  },
  Form:{
    alignItems: 'center',
    margin: '1.5%',
    width: '97%',
  },
  text:{
    fontSize: 22,
    padding: 8,
    textTransform: 'uppercase',
  },
  textArea:{
    backgroundColor: '#EDEDED',
    borderColor: '#95989A',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    height: 200,
    width: '100%',
  },
  button:{
    marginTop: 20,
  }
>>>>>>> 746ce7473ed10f45183e14297ff4246ba2080dc8
});
