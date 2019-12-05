import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Bars, BoxUser, User, ContainerBars, ContainerTitle, Title, ContainerDay, BoxDay, ButtonPlus, BoxTab, Tab} from './styles';
import {
  Container,
  Left,
  Right,
  Body,
  Button,
  List,
  ListItem,
  Text,
  Content,
} from 'native-base';
import {StatusBar} from 'react-native';
import ImageManha from '~/assets/img/icones/manha.png';
import ImageTarde from '~/assets/img/icones/tarde.png';
import ImageNoite from '~/assets/img/icones/noite.png';
import BarsPhoto from '~/assets/img/bars.png';
import grid from '~/hooks/grid';
import Modal from './modal';

export default function Profile({navigation}) {
  const [modal, setModal] = useState(true);
  const [error, setError] = useState('false');

  const openModal = () => {
    setModal(true);

    setError('oe');
  };

  const closeModal = () => {
    setModal(false);
  };

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
        <ContainerDay>
          <BoxDay>
            <User source={ImageManha} style={styles.icon} />
            <Text style={styles.clean}>Manhã</Text>
          </BoxDay>
          <BoxDay>
            <User source={ImageTarde} style={styles.icon} />
            <Text style={styles.clean}>Tarde</Text>
          </BoxDay>
          <BoxDay>
            <User source={ImageNoite} style={styles.icon} />
            <Text style={styles.clean}>Noite</Text>
          </BoxDay>
          <ButtonPlus onPress={openModal}>
            <Text style={styles.plus}>+</Text>
          </ButtonPlus>
        </ContainerDay>
        <BoxTab>
          <Tab style={styles.roud}>
            <Text style={styles.red}>SEG</Text>
            <Text style={styles.red}>12</Text>
          </Tab>
          <Tab style={styles.col}>
            <Text style={styles.clean}>TER</Text>
            <Text style={styles.clean}>13</Text>
          </Tab>
          <Tab style={styles.col}>
            <Text style={styles.clean}>QUA</Text>
            <Text style={styles.clean}>14</Text>
          </Tab>
          <Tab style={styles.col}>
            <Text style={styles.clean}>QUI</Text>
            <Text style={styles.clean}>15</Text>
          </Tab>
          <Tab style={styles.col}>
            <Text style={styles.clean}>SEX</Text>
            <Text style={styles.clean}>16</Text>
          </Tab>
          <Tab style={styles.col}>
            <Text style={styles.clean}>SAB</Text>
            <Text style={styles.clean}>17</Text>
          </Tab>
          <Tab style={styles.col}>
            <Text style={styles.clean}>DOM</Text>
            <Text style={styles.clean}>18</Text>
          </Tab>
        </BoxTab>
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
      <Modal visible={modal} error={error} onRequestClose={closeModal} />
    </Container>
  );
}

const styles = StyleSheet.create({
  col: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  clean: {
    color: '#fff',
    fontSize: 12,
  },
  red: {
    color: '#2b2b2b',
    fontSize: 12,
  },
  grid: {
    alignItems: 'center',
    marginTop: 45,
  },
  icon: {
    height: 30,
    width: 30,
  },
  roud: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
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
  plus: {
    fontSize: 20,
    color: 'white',
    top: -2,
  },
});
