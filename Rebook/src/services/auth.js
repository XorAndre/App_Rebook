import AsyncStorage from '@react-native-community/async-storage';

export const getUser = user => JSON.parse(AsyncStorage.getItem(user));
