import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const SubContainer = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
`;

export const ContainerUser = styled.View`
  width: 100%;
  height: 180;
  background-color: #c23335;
  align-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 120;
  height: 120;
  border-radius: 999;
  margin-top: 30;
  margin-bottom: 15;
`;

export const Name = styled.Text`
  font-size: 20;
  color: #727272;
  margin-bottom: 15;
  color: white;
`;

export const ContainerNav = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 30;
  padding-top: 17;
`;

export const Link = styled.TouchableOpacity`
  flex: 1;
`;

export const LinkName = styled.Text`
  font-size: 21;
  color: #9a9a9a;
  margin-top: 15;
  margin-bottom: 15;
`;

export const ContainerLogout = styled.TouchableOpacity`
  width: 100%;
  height: 70;
  border-top-width: 1;
  border-top-color: #f6f6f6;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoutName = styled.Text`
  font-size: 20;
  color: #727272;
  opacity: 0.5;
  margin-left: 30;
`;

export const ContainerImage = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ImageProfile = styled.Image`
  width: 80px;
  height: 80px;
  margin-left: 30;
`;

export const ContainerInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-bottom: 10;
`;

export const Kg = styled.Text`
  color: white;
  font-size: 20;
`;

export const Alt = styled.Text`
  color: white;
  font-size: 20;
`;

export const Border = styled.View`
  width: 1px;
  height: 30px;
  background-color: white;
`;

export const InfoItem = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerName = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Id = styled.Text`
  color: white;
  font-size: 19;
`;
