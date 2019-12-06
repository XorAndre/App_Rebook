import React from 'react';
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

export default function componentName({navigation}) {
  const openDrawer = () => {
    navigation.toggleDrawer();
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
