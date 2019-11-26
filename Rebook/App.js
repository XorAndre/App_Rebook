/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//Imports
import Login from './pages/Login';
import Registro from './pages/registro';
import Perfil from './pages/perfil';
import PerfilProfessor from './pages/perfilProfessor';
import Start from './pages/start';
import VerificaAluno from './pages/verificaAluno';
//Render
const App: () => React$Node = () => {
  return (
    <>
      <PerfilProfessor />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  }
});

export default App;
