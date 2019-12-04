import React from 'react';
import {
  Container,
  Bars,
  BoxUser,
  ContainerPhoto,
  UserProfile,
  User,
  VerticalMenu,
  ItemVertical,
  TextVertical,
  VerticalRed,
  VerticalGreen,
  VerticalGrey,
  ContainerCircle,
  Circle,
  TextCircle,
  TextDown,
  ContainerBars,
  Buttin,
  TextButtin,
} from './styles';
import {StatusBar} from 'react-native';
import ProfilePhoto from '~/assets/img/user.png';
import BarsPhoto from '~/assets/img/bars.png';

export default function Profile({navigation}) {
  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  const updateUser = () => {
    navigation.navigate('UpdateProfile');
  };

  return (
    <Container>
      <StatusBar hidden={true} />
      <ContainerBars onPress={openDrawer}>
        <Bars source={BarsPhoto} />
      </ContainerBars>
      <BoxUser>
        <ContainerPhoto>
          <UserProfile onPress={updateUser}>
            <User source={ProfilePhoto} />
          </UserProfile>
          <Buttin onPress={updateUser}>
            <TextButtin>Editar Perfil</TextButtin>
          </Buttin>
        </ContainerPhoto>
      </BoxUser>
      <VerticalMenu>
        <ItemVertical>
          <TextVertical>Dia</TextVertical>
          <VerticalRed />
        </ItemVertical>
        <ItemVertical>
          <TextVertical>Semana</TextVertical>
          <VerticalGreen />
        </ItemVertical>
        <ItemVertical>
          <TextVertical>Mês</TextVertical>
          <VerticalGrey />
        </ItemVertical>
      </VerticalMenu>
      <ContainerCircle>
        <Circle>
          <TextCircle>500</TextCircle>
          <TextDown>kcal</TextDown>
        </Circle>
      </ContainerCircle>
    </Container>
  );
}
