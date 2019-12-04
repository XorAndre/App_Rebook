import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Bars, BoxUser, ContainerBars} from './styles';
import {Col, Grid, Content, Form, Input, Text} from 'native-base';
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
              <Text style={styles.clean}>AJUDA</Text>
            </Col>
          </Grid>
        </Content>
      </BoxUser>
      <Content>
        <Grid>
          <Col>
            <Form>
              <Text>Ajuda</Text>
              <Input style={styles.textArea} />
            </Form>
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
 textArea:{
  height: 120,
 }
});
