import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  Button,
  Container,
  Col,
  Grid,
  Content,
  Icon,
  Input,
  Text,
} from 'native-base';

import ProfilePhoto from '~/assets/img/professor2.png';

export default function AvaliarTreino({navigation}) {
  const Back = () => {
    navigation.navigate('Treino');
  };
  return (
    <Container>
      <View style={styles.Topo}>
        <View style={styles.gridIcon}>
          <Button transparent>
            <Icon style={styles.Icone} name="arrow-back" onPress={Back} />
          </Button>
        </View>
        <View>
          <Text style={styles.TextoTopo}>COMO FOI SEU TREINO HOJE?</Text>
        </View>
        <View />
      </View>
      <View style={styles.TopoButton}>
        <View style={styles.gridTopoButton}>
          <Text style={styles.TextoTopo}>AVALIE SEU PROFESSOR</Text>
        </View>
      </View>
      <Content>
        <Grid>
          <Col style={styles.GridProfile}>
            <Image source={ProfilePhoto} style={styles.Perfil} />
            <Text style={styles.Details}>Caio Olivieri</Text>
            <Text style={styles.DetailsBold}>Musculação</Text>
            <Text style={styles.Details}>Cidade Jardim</Text>
            <Text style={styles.DetailsBold}>12/9</Text>
            <Text>Quarta-Feira</Text>

            <Input style={styles.ComentInput} placeholder="DEIXAR COMENTÁRIO" />
            <Button rounded success style={styles.Button}>
              <Text>ENVIAR</Text>
            </Button>
          </Col>
        </Grid>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  Topo: {
    alignItems: 'center',
    backgroundColor: '#C23335',
    flexDirection: 'row',
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 15,
  },
  TopoButton: {
    alignItems: 'center',
    backgroundColor: '#C23335',
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 5,
  },
  gridIcon: {
    width: '16%',
  },
  gridTopoButton: {
    alignItems: 'center',
    width: '80%',
  },
  GridProfile: {
    alignItems: 'center',
    marginTop: 40,
  },
  Icone: {
    color: '#fff',
    marginTop: 10,
  },
  TextoTopo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  Perfil: {
    height: 120,
    width: 120,
  },
  Details: {
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
    textTransform: 'uppercase',
  },
  DetailsBold: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10,
    textTransform: 'uppercase',
  },
  Button: {
    marginTop: 15,
  },
  ComentInput: {
    backgroundColor: '#EDEDED',
    borderRadius: 50,
    marginTop: 30,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 10,
    width: '90%',
  },
});
