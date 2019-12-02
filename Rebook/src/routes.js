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
    Grade,
    Treino,
    Convidar,
    UpdateProfile,
  },
  {
    initialRouteName: 'Profile',
    headerMode: 'none',
  },
);

const Drawer = createDrawerNavigator(
  {
    AppStack,
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
