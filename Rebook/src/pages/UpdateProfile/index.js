import React from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  ContainerHeader,
  TextHeader,
  Bars,
  ProfilePhoto,
  ContainerBars,
} from './styles';
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
        <TextHeader>EDITAR PERFIL</TextHeader>
      </ContainerHeader>
      <ProfilePhoto source={User} />
    </Container>
  );
}
