import React from 'react';
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
import Professor from '~/assets/img/professor.png';

export default function Natacao({navigation}) {
const openDrawer = () => {
    navigation.toggleDrawer();
    };  
  return (
    <Container>
        <Header style={styles.Topo}>
          <Left>
            <Button transparent onPress={openDrawer}>
              <Icon style={styles.cleanText} name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.cleanText}>NATAÇAO</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            <Grid style={styles.content}>
                <Col style={styles.colfix}>
                    <Text style={styles.positionText}>Data</Text>
                </Col>
                <Col style={styles.colProfessor}>
                    <Image source={Professor}></Image>    
                    <Text>NOME PROFE</Text>
                </Col>
                <Col style={styles.colfix}>
                    <Text style={styles.positionText}>Hora</Text>
                </Col>
            </Grid>
        </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
    Topo:{
       backgroundColor: '#C23335',     
    },
    cleanText:{
        color: '#fff',
    },
    colfix:{
        alignItems: 'center',
        position: 'relative',
    },
    positionText:{
        fontSize: 20,
        position: 'absolute',
        top: 50,
    },
    content:{
        marginTop: 30,
    },
    colProfessor:{
        alignItems: 'center',
    }
  });