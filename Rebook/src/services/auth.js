import AsyncStorage from '@react-native-community/async-storage';

export const TOKEN_KEY = '@reebok:token';
export const USER = '@reebok:user';

export const isAuthenticated = () => AsyncStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => AsyncStorage.getItem(TOKEN_KEY);

export const getUser = () => AsyncStorage.getItem(USER);

export const handlerLogin = (token, user) => {
  AsyncStorage.multiSet([TOKEN_KEY, token], [USER, JSON.stringify(user)]);
};

export const logout = () => {
  AsyncStorage.clear();
};
