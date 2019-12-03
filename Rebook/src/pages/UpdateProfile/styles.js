import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  height: 80px;
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
  top: 27px;
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
  margin-left: 30%;
  margin-top: 70px;
`;
