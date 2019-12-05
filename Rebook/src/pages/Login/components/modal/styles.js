import styled from 'styled-components/native';

export const ContainerModal = styled.Modal`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Fade = styled.View`
  background-color: #2b2b2b;
  opacity: 0.5;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
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
  font-size: 15;
`;

export const BoxModal = styled.View`
  width: 70%;
  height: 210;
  background-color: white;
  border-radius: 20;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonCloseModal = styled.TouchableOpacity`
  width: 40%;
  height: 40;
  background-color: #C23335;
  border-radius: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextError = styled.Text`
  color: #2b2b2b;
  font-size: 17;
`;