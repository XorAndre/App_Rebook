import React from 'react';
import {StatusBar, Text} from 'react-native';
import {
  ContainerHeader,
  TextHeader,
  Bars,
  ProfilePhoto,
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
import BarsPhoto from '~/assets/img/back.png';
import User from '~/assets/img/user.png';

export default function UpdateProfile({navigation}) {
  const Back = () => {
    navigation.navigate('Profile');
  };

  return (
    <Container>
      <StatusBar hidden={true} barStyle="light-content" />
      <ContainerHeader>
        <ContainerBars onPress={Back}>
          <Bars source={BarsPhoto} />
        </ContainerBars>
      </ContainerHeader>
      <Content>
        <Grid>
          <Col>
            <ProfilePhoto source={User} />
          </Col>
        </Grid>
        <List>
          <ListItem>
            <Left>
              <Text>Seu nome: </Text>
            </Left>
            <Right>
              <Text>Aterar</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Seu peso: </Text>
            </Left>
            <Right>
              <Text>Aterar</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Sua altura: </Text>
            </Left>
            <Right>
              <Text>Aterar</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}
