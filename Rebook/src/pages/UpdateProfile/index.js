import React from 'react';
import {StatusBar, Text, StyleSheet} from 'react-native';
import {
  ContainerHeader,
  Bars,
  ProfilePhoto,
  ContainerBars,
  ContainerTitle,
  TitleUpdate,
  ButtonSave,
  ContainerButton,
} from './styles';
import {
  Container,
  Col,
  Grid,
  Content,
  Left,
  List,
  ListItem,
  Right,
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
        <ContainerTitle>
          <TitleUpdate>Editar Perfil</TitleUpdate>
        </ContainerTitle>
      </ContainerHeader>
      <Content>
        <Grid>
          <Col style={styles.flex}>
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
        <ContainerButton>
          <ButtonSave>
            <Text style={styles.clear}>Salvar</Text>
          </ButtonSave>
        </ContainerButton>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clear: {
    color: 'white',
  },
});
