import React, {Fragment} from 'react';
import {
  Container,
  SubContainer,
  ContainerUser,
  Name,
  ContainerNav,
  Link,
  LinkName,
  ContainerLogout,
  LogoutName,
  ContainerInfo,
  Kg,
  Alt,
  InfoItem,
  Border,
  ContainerImage,
  ImageProfile,
  ContainerName,
  Id,
} from './styles';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {withNavigation} from 'react-navigation';
import User from '~/assets/img/user.png';

const CustomDrawerContentComponent = ({navigation}) => {
  const Logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  const Grade = async () => {
    navigation.navigate('Grade');
  };

  const Treino = async () => {
    navigation.navigate('Treino');
  };

  const Convidar = async () => {
    navigation.navigate('Convidar');
  };

  const Profile = async () => {
    navigation.navigate('Profile');
  };

  return (
    <Fragment>
      <Container>
        <StatusBar hidden={true} />
        <SubContainer>
          <ContainerUser>
            <ContainerImage onPress={Profile}>
              <ImageProfile source={User} />
              <ContainerName>
                <Name>Erik</Name>
                <Id>000001</Id>
              </ContainerName>
            </ContainerImage>
            <ContainerInfo>
              <InfoItem>
                <Kg>67kg</Kg>
              </InfoItem>
              <Border />
              <InfoItem>
                <Alt>178cm</Alt>
              </InfoItem>
            </ContainerInfo>
          </ContainerUser>
          <ContainerNav>
            <Link onPress={Grade}>
              <LinkName>Grade</LinkName>
            </Link>
            <Link onPress={Treino}>
              <LinkName>Treino</LinkName>
            </Link>
            <Link>
              <LinkName>Resultados</LinkName>
            </Link>
            <Link>
              <LinkName>Escolha seu</LinkName>
            </Link>
            <Link onPress={Convidar}>
              <LinkName>Convidar</LinkName>
            </Link>
            <Link>
              <LinkName>Ajuda</LinkName>
            </Link>
            <Link>
              <LinkName>Integrações</LinkName>
            </Link>
          </ContainerNav>
        </SubContainer>
      </Container>
      <ContainerLogout onPress={Logout}>
        <LogoutName>Logout</LogoutName>
      </ContainerLogout>
    </Fragment>
  );
};

export default withNavigation(CustomDrawerContentComponent);
