import React from 'react';
import {StyleSheet} from 'react-native';
import {Bars, BoxUser, User, ContainerBars, ContainerTitle, Title} from './styles';
import {
  Button,
  Container,
  Col,
  Grid,
  Content,
  List,
  ListItem,
  Right,
  Body,
  Text,
} from 'native-base';
import {StatusBar} from 'react-native';
import ImageManha from '~/assets/img/icones/manha.png';
import ImageTarde from '~/assets/img/icones/tarde.png';
import ImageNoite from '~/assets/img/icones/noite.png';
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
      <ContainerTitle>
        <Title>GRADE</Title>
      </ContainerTitle>
      <BoxUser>
        <Grid style={styles.grid}>
          <Col style={styles.col}>
            <User source={ImageManha} style={styles.icon} />
            <Text style={styles.clean}>Manhã</Text>
          </Col>
          <Col style={styles.col}>
            <User source={ImageTarde} style={styles.icon} />
            <Text style={styles.clean}>Tarde</Text>
          </Col>
          <Col style={styles.col}>
            <User source={ImageNoite} style={styles.icon} />
            <Text style={styles.clean}>Noite</Text>
          </Col>
        </Grid>
      </BoxUser>
      <Content>
        <List>
          <ListItem thumbnail>
            <Body>
              <Text>Corrida</Text>
              <Text note numberOfLines={1}>
                60' Runing Waldyr
              </Text>
            </Body>
            <Right>
              <Button rounded danger>
                <Text>LOTADO</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Body>
              <Text>Cycle</Text>
              <Text note numberOfLines={1}>
                60' Cycle Chris
              </Text>
            </Body>
            <Right>
              <Button rounded info>
                <Text>REALIZADO</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Body>
              <Text>Abdominal</Text>
              <Text note numberOfLines={1}>
                60' Sala 1 John
              </Text>
            </Body>
            <Right>
              <Button rounded light>
                <Text>RESERVADO</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Body>
              <Text>Alongamento</Text>
              <Text note numberOfLines={1}>
                60' Sala 2 Valdir
              </Text>
            </Body>
            <Right>
              <Button rounded success>
                <Text>RESERVAR</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Body>
              <Text>Hatha Yoga</Text>
              <Text note numberOfLines={1}>
                60' Zen Sandra
              </Text>
            </Body>
            <Right>
              <Button rounded success>
                <Text>RESERVAR</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Body>
              <Text>Cycle</Text>
              <Text note numberOfLines={1}>
                60' cycle Anselmo
              </Text>
            </Body>
            <Right>
              <Button rounded success>
                <Text>RESERVAR</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Body>
              <Text>Pilate Balls</Text>
              <Text note numberOfLines={1}>
                60' Sala 2 Waldyr
              </Text>
            </Body>
            <Right>
              <Button rounded success>
                <Text>RESERVAR</Text>
              </Button>
            </Right>
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
    marginTop: 45,
  },
  icon: {
    height: 30,
    width: 30,
  },
});
