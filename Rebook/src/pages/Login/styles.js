import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #c23335;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const ContainerInput = styled.View`
  width: 100%;
  flex: 1;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  padding-left: 33px;
  padding-right: 33px;
  justify-content: space-between;
`;

export const ContainerButton = styled.View`
  width: 100%;
  flex: 2;
  flex-direction: column;
  background-color: transparent;
  display: flex;
  padding-left: 33px;
  padding-right: 33px;
  justify-content: space-around;
`;

export const InputEmail = styled.TextInput`
  height: 46;
  align-self: stretch;
  background-color: #c23335;
  border-bottom-width: 1px;
  border-color: #fff;
  padding-left: 0;
  font-size: 16;
  padding-right: 0;
  color: #fff;
`;

export const InputPassword = styled.TextInput`
  height: 46;
  align-self: stretch;
  background-color: #c23335;
  border-bottom-width: 1px;
  border-color: #fff;
  padding-left: 0;
  font-size: 16;
  padding-right: 0;
  color: #fff;
`;

export const TextBack = styled.Text`
  color: #47affc;
`;

export const ResetPassword = styled.TouchableOpacity`
  text-align: right;
`;

export const ButtonRegister = styled.TouchableOpacity`
  height: 46;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

export const TextRegister = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 16;
`;

export const TextRegisterNew = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 16;
  margin-right: 5px;
`;

export const TextReset = styled.Text`
  text-align: right;
  color: #fff;
`;

export const ContainerPier = styled.View`
  flex: 2;
  display: flex;
  width: 100%;
`;

export const Logo = styled.Image`
  width: 125px;
  height: 125px;
  position: relative;
`;

export const ContainerLogo = styled.View`
  flex: 1.7;
  align-items: center;
  justify-content: center;
`;

export const ContainerButtonLogin = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
