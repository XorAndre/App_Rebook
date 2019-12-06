import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  height: auto;
  align-items: center;
`;

export const ContainerBars = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bars = styled.Image`
  width: 25px;
  height: 20px;
  position: relative;
`;

export const BoxUser = styled.View`
  width: 100%;
  height: 80;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #c23335;
`;

export const TitleTrain = styled.Text`
  font-size: 18;
  color: white;
  font-weight: 700;
`;

export const ContainerForm = styled.ScrollView`
`;

export const Form = styled.View`
  align-items: center;
`;

export const Select = styled.TouchableOpacity`
  width: 160px;
  height: 30px;
  border-radius: 20px;
  border-width: 1px;
  border-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: grey;

`;

export const Input = styled.TextInput`
  width: 200px;
  height: 20px;
  border-bottom-color: grey;
  border-bottom-width: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ContainerDuo = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #B8D54B;
  margin-bottom: 30px;
  border-radius: 40px;
`;

export const TextButton = styled.Text`
  color: white;
`;
