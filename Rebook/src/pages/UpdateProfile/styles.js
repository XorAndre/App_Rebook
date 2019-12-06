import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  height: 70px;
  background-color: #c23335;
  padding-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const TextHeader = styled.Text`
  color: white;
  font-size: 20;
  font-weight: 500;
`;

export const ContainerBars = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bars = styled.Image`
  width: 10px;
  height: 20px;
  position: relative;
`;

export const ProfilePhoto = styled.Image`
  width: 130px;
  height: 130px;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const ContainerTitle = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -7px;
`;

export const TitleUpdate = styled.Text`
  color: white;
  font-size: 21;
`;

export const ContainerButton = styled.View`
  width: 100%;
  height: auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonSave = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  background-color: #b8d54b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`;
