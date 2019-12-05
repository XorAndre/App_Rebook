import React from 'react';
import {StyleSheet} from 'react-native';
import {Bars, BoxUser, User, ContainerBars, ContainerTitle, Title} from './styles';
import {
  Container,
  Header,
  Col,
  Grid,
  Left,
  Right,
  Body,
  Button,
  Icon,
  View,
  Fab,
  List,
  ListItem,
  Thumbnail,
  Text,
  Badge,
  Content,
  Tab,
  Tabs,
  TabHeading,
  Card,
  CardItem
} from 'native-base';
import {StatusBar} from 'react-native';
import ImageManha from '~/assets/img/icones/manha.png';
import ImageTarde from '~/assets/img/icones/tarde.png';
import ImageNoite from '~/assets/img/icones/noite.png';
import BarsPhoto from '~/assets/img/bars.png';
import grid from '~/hooks/grid';

export default function Profile({navigation}) {
  const openDrawer = () => {
    navigation.toggleDrawer();
  };



  const data = grid();

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
          {data.map((data, index) => (
            <ListItem thumbnail key={data._id}>
              <Left>
                <Text>{data.Horario}</Text>
              </Left>
              <Body>
                <Text>{data.NomeAula}</Text>
                <Text note numberOfLines={1}>
                  {`${data.Sala} ${data.NomeAula} ${data.Professor}`}
                </Text>
              </Body>
              <Right>
                {data.status == 'lotado' ?
                ( <Button rounded danger>
                    <Text>LOTADO</Text>
                  </Button>
                ) : (
                  <Button rounded success>
                    <Text>RESERVAR</Text>
                  </Button>
                )}
              </Right>
            </ListItem>
          ))}
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
  tabHeading: {
    backgroundColor: "#7159C1",
  },
  header: {
    backgroundColor: "#7159C1",
  },
  container: {
    flex: 1,
  },
});
