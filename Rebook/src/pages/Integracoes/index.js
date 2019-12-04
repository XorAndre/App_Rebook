import React from 'react';
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
import BarsPhoto from '~/assets/img/bars.png';

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
 }
});
