import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
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
            <Form style={styles.Form}>
              <Text style={styles.text}>Precisa de alguma ajuda?</Text>
              <Input style={styles.textArea} />
              <Button style={styles.button} rounded success>
                <Text>ENVIAR</Text>
              </Button>
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
});
