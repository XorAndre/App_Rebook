import React from 'react';
import {StyleSheet} from 'react-native';
import {Bars, BoxUser, User, ContainerBars} from './styles';
import {
  Button,
  Container,
  Col,
  Grid,
  Content,
  CheckBox,
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
  const Natacao = () => {
    navigation.navigate('Natacao');
  };
  const AvaliarTreino = () => {
    navigation.navigate('AvaliarTreino');
  };
  return (
    <Container>
      <StatusBar hidden={true} />
      <ContainerBars onPress={openDrawer}>
        <Bars source={BarsPhoto} />
      </ContainerBars>
      <BoxUser>
        <Grid style={styles.grid}>
          <Col style={styles.col}></Col>
        </Grid>
      </BoxUser>
      <Content>
        <Grid style={styles.gridListTopo}>
          <Col></Col>
          <Col><Text tyle={styles.textGrid}>AULA</Text></Col>
          <Col><Text tyle={styles.textGrid}>KGAL</Text></Col>
          <Col></Col>
        </Grid>
        <Grid style={styles.gridList}>
          <Col style={styles.columnCheck}>
            <CheckBox checked={true} color="green"/>
            <Text>12 Quar</Text>
          </Col>
          <Col>
            <Text>Vila Olimpia</Text>
            <Text>MUSCULAÇÃO</Text>
            <Text>Evandro</Text>
          </Col>
          <Col style={styles.columnMeio}><Text>450CKAL</Text></Col>
          <Col>
            <Button small rounded>
              <Text>REALIZADO</Text>
            </Button>
            <Text onPress={AvaliarTreino}>Avaliar</Text>
          </Col>
        </Grid>
        <Grid style={styles.gridList}>
          <Col style={styles.columnCheck}>
            <CheckBox checked={true} color="green"/>
            <Text>12 Quar</Text>
          </Col>
          <Col>
            <Text>Vila Olimpia</Text>
            <Text>ESTEIRA</Text>
          </Col>
          <Col style={styles.columnMeio}><Text>350CKAL</Text></Col>
          <Col>
            <Button small rounded>
              <Text>REALIZADO</Text>
            </Button>
          </Col>
        </Grid>
        <Grid style={styles.gridList}>
          <Col style={styles.columnCheck}>
            <CheckBox checked={false} color="green"/>
            <Text>12 Quar</Text>
          </Col>
          <Col>
            <Text>CIDADE JARDIM</Text>
            <Text>NATAÇÃO</Text>
            <Text>WANDERLEI</Text>
          </Col>
          <Col style={styles.columnMeio}><Text>450CKAL</Text></Col>
          <Col>
            <Button small rounded success onPress={Natacao}>
              <Text>RESERVAR</Text>
            </Button>
          </Col>
        </Grid>
        <Grid style={styles.gridList}>
          <Col style={styles.columnCheck}>
            <CheckBox checked={false} color="green"/>
            <Text>12 Quar</Text>
          </Col>
          <Col>
            <Text>CIDADE JARDIM</Text>
            <Text>CYCLE</Text>
            <Text>Anselmo</Text>
          </Col>
          <Col style={styles.columnMeio}><Text>450CKAL</Text></Col>
          <Col>
            <Button small rounded success>
              <Text>RESERVAR</Text>
            </Button>
          </Col>
        </Grid>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  gridListTopo:{
    marginTop: 40,
  },
  gridList:{
    borderBottomColor: '#95989A',
    borderLeftColor: '#fff',
    borderTopColor: '#fff',
    borderRightColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 0.28,
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  col: {
    alignItems: 'center',
  },
  columnCheck:{
    width: '18%',
  },
  columnMeio:{
    alignItems: 'center',
    flex: 1,
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
  textGrid:{
    fontSize: 20,
    fontWeight: 'bold',
  },
});
