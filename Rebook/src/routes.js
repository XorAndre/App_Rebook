import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import DrawerConfig from '~/components/drawer';
import Profile from '~/pages/Profile';
import Splash from '~/pages/Splash';
import Login from '~/pages/Login';
import Home from '~/pages/Home';
import Grade from '~/pages/Grade';
import Treino from '~/pages/Treino';
import Convidar from '~/pages/Convidar';
import UpdateProfile from '~/pages/UpdateProfile';
import Circulo from '~/pages/Circulo';
import Ajuda from '~/pages/Ajuda';
import Integrations from '~/pages/Integracoes';
import AvaliarTreino from '~/pages/Avaliarmeutreino';
import Natacao from '~/pages/Natacao';
import ProfileWeek from '~/pages/ProfileWeek';
import ProfileMount from '~/pages/ProfileMount';
import Resultados from '~/pages/Resultados';
const AuthStack = createStackNavigator(
  {
    Login,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const AppStack = createStackNavigator(
  {
    Home,
    Profile,
    Treino,
    Convidar,
    UpdateProfile,
    Ajuda,
    Integrations,
    Grade,
    Circulo,
    AvaliarTreino,
    Natacao,
    Resultados,
  },
  {
    initialRouteName: 'Profile',
    headerMode: 'none',
  },
);

const Week = createStackNavigator(
  {
    ProfileWeek,
  },
  {
    initialRouteName: 'ProfileWeek',
    headerMode: 'none',
  },
);

const Mount = createStackNavigator(
  {
    ProfileMount,
  },
  {
    initialRouteName: 'ProfileMount',
    headerMode: 'none',
  },
);

const Drawer = createDrawerNavigator(
  {
    AppStack,
    Week,
    Mount,
  },
  {
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    drawerType: 'front',
    edgeWidth: 10,
    contentComponent: DrawerConfig,
    drawerWidth: '80%',
  },
);

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: Splash,
      App: Drawer,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default Routes;
