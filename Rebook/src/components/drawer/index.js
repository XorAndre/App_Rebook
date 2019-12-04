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

const CustomDrawerContentComponent = ({navigation}) => {
  const [profile] = useState({
    dbid: '182798',
    name: 'Erik Douglas Tereza',
    age: '37 anos, 5 meses e 16 dias',
    birth: '1982-06-17',
    email: 'erik.tereza@edtereza.com.br',
    gender: 'M',
    nickname: 'Erik D.',
    peso: '67',
    height: '178',
    phone: {
      home: {
        code: '',
        number: '',
      },
      work: {
        code: '11',
        number: '3759-7878',
      },
      mobile: {
        code: '11',
        number: '94012-6763',
      },
    },
  });

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
<<<<<<< HEAD

  const Ajuda = () => {
    navigation.navigate('Ajuda');
  };

  const Integracoes = () => {
    navigation.navigate('Integracoes');
  };

=======
  const Ajuda = async () => {
    navigation.navigate('Ajuda');
  };
  const Integrations = async () => {
    navigation.navigate('Integrations');
  };  
>>>>>>> 746ce7473ed10f45183e14297ff4246ba2080dc8
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
                <Alt>{`${profile.height}Kg`}</Alt>
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
            <Link onPress={Ajuda}>
              <LinkName>Ajuda</LinkName>
            </Link>
<<<<<<< HEAD
            <Link onPress={Integracoes}>
=======
            <Link onPress={Integrations}>
>>>>>>> 746ce7473ed10f45183e14297ff4246ba2080dc8
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
