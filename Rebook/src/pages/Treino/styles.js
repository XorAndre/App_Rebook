import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
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
  height: 170;
  background-color: #c23335;
`;


export const ContainerPhoto = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const UserProfile = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
`;

export const User = styled.Image`
  width: 80px;
  height: 80px;
`;

export const VerticalMenu = styled.View`
  display: flex;
  width: 80%;
  height: 120px;
  flex-direction: row;
`;

export const ItemVertical = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextVertical = styled.Text`
  color: grey;
  font-size: 20;
`;

export const VerticalRed = styled.View`
  width: 24px;
  height: 24px;
  background-color: #f24979;
  margin-top: 10px;
  border-radius: 9999px;
`;

export const VerticalGreen = styled.View`
  width: 24px;
  height: 24px;
  background-color: #b8d54b;
  margin-top: 10px;
  border-radius: 9999px;
`;

export const VerticalGrey = styled.View`
  width: 24px;
  height: 24px;
  background-color: #8c8c8c;
  margin-top: 10px;
  border-radius: 9999px;
`;

export const ContainerCircle = styled.View`
  display: flex;
  padding-top: 20px;
`;

export const Circle = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 9999px;
  border-width: 3px;
  border-color: #f24979;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextCircle = styled.Text`
  color: #f24979;
  font-size: 25;
`;

export const TextDown = styled.Text`
  color: #f24979;
  font-size: 25;
`;


