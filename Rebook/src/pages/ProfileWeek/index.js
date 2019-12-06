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
  TopText,
  NameText,
  IdText,
  Kg,
  Cm,
} from './styles';
import {StatusBar} from 'react-native';
import ProfilePhoto from '~/assets/img/user.png';
import BarsPhoto from '~/assets/img/bars.png';
import usuario from '~/hooks/profile';

export default function ProfileWeek({navigation}) {
  const data = usuario();

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  const updateUser = () => {
    navigation.navigate('UpdateProfile');
  };

  const navigateDay = () => {
    navigation.navigate('Profile');
  };

  const navigateMount = () => {
    navigation.navigate('ProfileMount');
  };

  return (
    <Container>
      <StatusBar hidden={true} />
      <ContainerBars onPress={openDrawer}>
        <Bars source={BarsPhoto} />
      </ContainerBars>
      <BoxUser>
        <ContainerPhoto>
          <TopText>
            <NameText>{data.name}</NameText>
            <IdText>{data.dbid}</IdText>
          </TopText>
          <Kg>{`${data.peso}Kg`}</Kg>
          <Cm>{`${data.height}Cm`}</Cm>
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
          <VerticalRed onPress={navigateDay} />
        </ItemVertical>
        <ItemVertical>
          <TextVertical>Semana</TextVertical>
          <VerticalGreen />
        </ItemVertical>
        <ItemVertical>
          <TextVertical>Mês</TextVertical>
          <VerticalGrey onPress={navigateMount} />
        </ItemVertical>
      </VerticalMenu>
      <ContainerCircle>
        <Circle>
          <TextCircle>1580</TextCircle>
          <TextDown>kcal</TextDown>
        </Circle>
      </ContainerCircle>
    </Container>
  );
}
