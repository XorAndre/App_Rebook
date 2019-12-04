import React from 'react';
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
import BarsPhoto from '~/assets/img/bars.png';

export default function Profile({navigation}) {
  const openDrawer = () => {
    navigation.toggleDrawer();
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
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
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
});
