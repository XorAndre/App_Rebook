import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  height: auto;
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
  font-size: 22;
  color: white;
  font-weight: 700;
`;

export const ContainerMont = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: #c23335;
  justify-content: center;
  align-items: center;
  border-top-width: 2px;
  border-color: #ba4237;
`;

export const ContainerDay = styled.View`
  width: 100%;
  height: 30px;
  display: flex;
  background-color: #fbf4f4;
  flex-direction: row;
`;

export const BoxDay = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Day = styled.Text`
  color: grey;
  font-size: 15;
`;

export const ContainerCalendar = styled.View`
  width: 100%;
  height: 220px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
`;

export const BoxNumber = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const DayNumber = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.Text`
  color: grey;
`;

export const ContainerTrainList = styled.ScrollView`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const BoxListTrain = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 5px;
  border-bottom-width: 1px;
  border-color: #b4b4b4;
`;

export const BoxListain = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const BoxCheck = styled.View`
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckImage = styled.View``;

export const BoxTextCheck = styled.Text`
  color: #95989a;
  font-size: 12;
`;

export const BoxAula = styled.View`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const BoxKcal = styled.View`
  width: 50px;
  display: flex;
  justify-content: center;
`;

export const ContainerButtonRe = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonRe = styled.TouchableOpacity`
  width: 120px;
  height: 35px;
  margin-bottom: 10px;
  background-color: #4374b5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`;

export const ButtonRes = styled.TouchableOpacity`
  width: 120px;
  height: 35px;
  margin-bottom: 10px;
  background-color: #b8d54b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`;

export const TextRe = styled.Text`
  color: white;
  font-size: 17;
`;

export const ButtonAv = styled.TouchableOpacity`
  margin-bottom: 5px;
`;

export const TextAv = styled.Text`
  color: #95989a;
  font-size: 12;
`;
