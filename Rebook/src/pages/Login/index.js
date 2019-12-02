/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  ContainerInput,
  ContainerButton,
  InputEmail,
  InputPassword,
  ResetPassword,
  TextReset,
  ButtonRegister,
  TextRegister,
  TextRegisterNew,
  ContainerLogo,
  Logo,
  ContainerButtonLogin,
} from './styles';
import api from '~/services/api';
import ButtonRadius from '~/components/buttonRadius';
import Modal from './components/modal';
import Reebok from '~/assets/img/logo.png';
import AsyncStorage from '@react-native-community/async-storage';

function login({navigation}) {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const auth = async () => {
    try {
      const response = await api.post('/login', {email, password});
      const {token, user} = response.data;

      await AsyncStorage.multiSet([
        ['@reebok:token', token],
        ['@reebok:user', JSON.stringify(user)],
      ]);

      navigation.navigate('Profile');
    } catch (response) {
      await setError(response.data.error);

      setModal(true);
    }
  };

  const registerPage = () => {
    navigation.navigate('Register');
  };

  return (
    <Container>
      <StatusBar hidden={false} barStyle="light-content" />
      <ContainerLogo>
        <Logo source={Reebok} />
      </ContainerLogo>
      <ContainerInput>
        <InputEmail
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu email"
          placeholderTextColor="#fff"
          value={email}
          onChangeText={setEmail}
        />
        <InputPassword
          placeholder="Digite sua senha"
          placeholderTextColor="#fff"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </ContainerInput>
      <ContainerButton>
        <ResetPassword>
          <TextReset>Esqueceu a senha?</TextReset>
        </ResetPassword>
        <ContainerButtonLogin>
          <ButtonRadius onPress={auth} textButton="Entrar" />
        </ContainerButtonLogin>
        <ButtonRegister onPress={registerPage}>
          <TextRegisterNew>Ainda não se registrou?</TextRegisterNew>
          <TextRegister>registre-se aqui</TextRegister>
        </ButtonRegister>
      </ContainerButton>
      <Modal visible={modal} error={error} onRequestClose={closeModal} />
    </Container>
  );
}

export default login;
