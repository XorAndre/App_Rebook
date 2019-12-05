import React from 'react';
import { StyleSheet, StatusBar, View, Image } from 'react-native';
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
  Text,
  Thumbnail, 
} from 'native-base';
import BarsPhoto from '~/assets/img/bars.png';
//imagens
import Primeira from '~/assets/img/integracoes/primeira.png';
import fit from '~/assets/img/integracoes/fit.png';
import strava from '~/assets/img/integracoes/strava.png';
//render
export default function Integracoes({navigation}) {
  const openDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <Container>
      <Header style={styles.Topo}>
          <Left>
            <Button transparent onPress={openDrawer}>
              <Icon style={styles.CleanText} name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.CleanText}>INTEGRAÇÕES</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text></Text>
            </Button>
          </Right>
        </Header>
        <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={Primeira} />
              </Left>
              <Body>
                <Text>APPLE HEALTH</Text>
                <Text note numberOfLines={1}></Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon active name="arrow-forward" />
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={fit} />
              </Left>
              <Body>
                <Text>GOOGLE FIT</Text>
                <Text note numberOfLines={1}></Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon active name="arrow-forward" />
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={strava} />
              </Left>
              <Body>
                <Text>STRAVA</Text>
                <Text note numberOfLines={1}></Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon active name="arrow-forward" />
                </Button>
              </Right>
            </ListItem>
          </List>
    </Container>
  );
}
const styles = StyleSheet.create({
  Topo:{
    backgroundColor: '#C23335',
    flexDirection: 'row',
  },
  GridTexto:{
    alignItems: 'center',
    width: '80%',
  },
  CleanText:{
    color: '#fff',
  }
});