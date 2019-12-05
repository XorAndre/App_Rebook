/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
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
import UserProfile from '~/hooks/profile';

const CustomDrawerContentComponent = ({navigation}) => {
  const profile = UserProfile();

  const Logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  const Grade = () => {
    navigation.navigate('Grade');
  };

  const Treino = () => {
    navigation.navigate('Treino');
  };

  const Convidar = () => {
    navigation.navigate('Convidar');
  };

  const Profile = () => {
    navigation.navigate('Profile');
  };

  const Ajuda = () => {
    navigation.navigate('Ajuda');
  };
  
  const Integrations = async () => {
    navigation.navigate('Integrations');
  };  

  return (
    <React.Fragment>
      <Container>
        <StatusBar hidden={true} />
        <SubContainer>
          <ContainerUser>
            <ContainerImage onPress={Profile}>
              <ImageProfile source={User} />
              <ContainerName>
                <Name>{profile.name}</Name>
                <Id>{profile.dbid}</Id>
              </ContainerName>
            </ContainerImage>
            <ContainerInfo>
              <InfoItem>
                <Kg>{`${profile.peso}Kg`}</Kg>
              </InfoItem>
              <Border />
              <InfoItem>
                <Alt>{`${profile.height}Cm`}</Alt>
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
              <LinkName>Escolha seu personal</LinkName>
            </Link>
            <Link onPress={Convidar}>
              <LinkName>Convidar</LinkName>
            </Link>
            <Link onPress={Ajuda}>
              <LinkName>Ajuda</LinkName>
            </Link>
            <Link onPress={Integrations}>
              <LinkName>Integrações</LinkName>
            </Link>
          </ContainerNav>
        </SubContainer>
      </Container>
      <ContainerLogout onPress={Logout}>
        <LogoutName>Logout</LogoutName>
      </ContainerLogout>
    </React.Fragment>
  );
};

export default withNavigation(CustomDrawerContentComponent);
