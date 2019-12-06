import React from 'react';
<<<<<<< HEAD
import {StyleSheet, StatusBar} from 'react-native';

import {
  Accordion,
  Button,
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Body,
  Icon,
} from 'native-base';
=======
import { Image, StyleSheet, StatusBar, View } from 'react-native';
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
  Accordion,  
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
  Text, 
  Row
} from 'native-base';
import BarsPhoto from '~/assets/img/bars.png';
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f

export default function componentName({navigation}) {
  const openDrawer = () => {
    navigation.toggleDrawer();
<<<<<<< HEAD
  };

  const dataArray = [
    {
      title: 'NATAÇÃO',
      content: 'Lorem ipsum dolor sit amet',
    },
    {
      title: 'CICLE',
      content: 'Lorem ipsum dolor sit amet',
    },
    {
      title: 'CORRIDA',
      content: 'Lorem ipsum dolor sit amet',
    },
    {
      title: 'CROSFIT',
      content: 'Lorem ipsum dolor sit amet',
    },
  ];
  return (
    <Container>
      <StatusBar hidden={true} />
      <Header style={styles.Topo}>
        <Left>
          <Button transparent onPress={openDrawer}>
            <Icon style={styles.clean} name='menu' />
          </Button>
        </Left>
        <Body>
          <Title style={styles.clean}>RESULTADOS</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Accordion
          dataArray={dataArray}
          headerStyle={{backgroundColor: '#fff', color: 'grey'}}
          contentStyle={{backgroundColor: '#fff'}}
        />
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  Topo: {
    backgroundColor: '#C23335',
  },
  clean: {
    color: '#fff',
  },
});
=======
  };   
  const dataArray = [
    { title: "NATAÇÃO", content: "Lorem ipsum dolor sit amet" },
    { title: "CICLE", content: "Lorem ipsum dolor sit amet" },
    { title: "CORRIDA", content: "Lorem ipsum dolor sit amet" },
    { title: "CROSFIT", content: "Lorem ipsum dolor sit amet" },
  ];
  return (
    <Container>
        <StatusBar hidden={true} />
        <Header style={styles.Topo}>
          <Left>
            <Button transparent onPress={openDrawer}>
              <Icon style={styles.clean} name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.clean}>RESULTADOS</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#fff" }}
            contentStyle={{ backgroundColor: "#fff" }}
          />
        </Content>
      </Container>
  );
}
const styles = StyleSheet.create({
    Topo:{
        backgroundColor: '#C23335',
    },
    clean:{
        color: '#fff',
    }
  });
  
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
