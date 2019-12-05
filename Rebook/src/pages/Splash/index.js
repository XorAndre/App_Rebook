import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Container, Logo} from './styles';
import Reebok from '~/assets/img/logo.png';
import AsyncStorage from '@react-native-community/async-storage';

export default function Splash({navigation}) {
  useEffect(() => {
    AsyncStorage.getItem('@reebok:token').then(user => {
      if (user) {
        navigation.navigate('Profile');
      } else {
        navigation.navigate('Login');
      }
    });
  });

  return (
    <Container>
      <StatusBar hidden={true} barStyle="light-content" />
      <Logo source={Reebok} />
    </Container>
  );
}
