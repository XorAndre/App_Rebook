import styled from 'styled-components/native';

export const ContainerModal = styled.Modal`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerBox = styled.View`
  background-color: transparent;
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const TextButtonClose = styled.Text`
  color: white;
  font-size: 18;
  top: 0px;
`;

export const BoxModal = styled.View`
  flex: 1;
  width: 100%;
  height: 95%;
  background-color: #c23335;
  position: absolute;
  top: 0;
  border-radius: 20;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonCloseModal = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  background-color: #c23335;
  border-radius: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: white;
  position: absolute;
  top: 35px;
  right: 35px;
  z-index: 10000;
`;

export const TextError = styled.Text`
  color: #2b2b2b;
  font-size: 17;
`;

export const ContainerTitle = styled.View`
  width: 100%;
  position: absolute;
  height: auto;
  top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const TextTitle = styled.Text`
  color: white;
  font-size: 20;
  font-weight: 500;
`;

export const BoxUser = styled.View`
  width: 100%;
  height: auto;
  background-color: #c23335;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
`;

export const ContainerDay = styled.View`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 10px;
`;

export const BoxDay = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const User = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ContainerFiltro = styled.TouchableOpacity`
  position: absolute;
  bottom: -90;
`;

export const Select = styled.TouchableOpacity`
  width: 160px;
  height: 25px;
  border-radius: 20px;
  border-width: 1px;
  border-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const ContainerBars = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bars = styled.Image`
  width: 25px;
  height: 20px;
  position: relative;
`;
