import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createDrawerNavigator,DrawerItems } from 'react-navigation'
//Screens
import PerfilAluno from './src/pages/PerfilAluno'
import PerfilProfessor from './src/pages/PerfilProfessor'
//Render
export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  PerfilAluno:PerfilAluno,
  PerfilProfessor:PerfilProfessor
})