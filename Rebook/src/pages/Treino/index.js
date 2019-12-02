import React from 'react';
import {StyleSheet} from 'react-native';
import {Bars, BoxUser, User, ContainerBars} from './styles';
import {
  Button,
  Container,
  Col,
  Grid,
  Content,
  List,
  ListItem,
  Right,
  Body,
  Text,
} from 'native-base';
import {StatusBar} from 'react-native';
import ImageManha from '~/assets/img/icones/manha.png';
import ImageTarde from '~/assets/img/icones/tarde.png';
import ImageNoite from '~/assets/img/icones/noite.png';
import BarsPhoto from '~/assets/img/bars.png';

export default function Profile({navigation}) {
  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <Container>
      <StatusBar hidden={true} />
      <ContainerBars onPress={openDrawer}>
        <Bars source={BarsPhoto} />
      </ContainerBars>
      <BoxUser>
        <Grid style={styles.grid}>
          <Col style={styles.col}>
            
          </Col>
        </Grid>
      </BoxUser>
      <Content>
        <List>
          <ListItem thumbnail>
            <Body>
              <Text>Corrida</Text>
              <Text note numberOfLines={1}>
                60' Runing Waldyr
              </Text>
            </Body>
            <Right>
              <Button rounded danger>
                <Text>LOTADO</Text>
              </Button>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  col: {
    alignItems: 'center',
  },
  clean: {
    color: '#fff',
  },
  grid: {
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    height: 30,
    width: 30,
  },
});
