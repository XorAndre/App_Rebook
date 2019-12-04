import AsyncStorage from '@react-native-community/async-storage';

export const USER_KEY = '@reebok:user';

export const isSave = () => AsyncStorage.getItem(USER_KEY) !== null;

export const getUser = () => JSON.parse(AsyncStorage.getItem('@reebok:user'));

export const saveUser = user => {
  AsyncStorage.setItem(USER_KEY, user);
};

export const removeUser = () => {
  AsyncStorage.removeItem(USER_KEY);
};
