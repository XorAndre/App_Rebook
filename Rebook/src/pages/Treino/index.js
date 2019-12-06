import React, {useState} from 'react';
import {
  Container,
<<<<<<< HEAD
  Bars,
  BoxUser,
  TitleTrain,
  ContainerBars,
  ContainerMont,
  ContainerDay,
  BoxDay,
  Day,
  ContainerCalendar,
  BoxNumber,
  DayNumber,
  Number,
  ContainerTrainList,
  BoxListTrain,
  BoxCheck,
  BoxKcal,
  BoxTextCheck,
  BoxAula,
  ButtonRe,
  ButtonRes,
  TextRe,
  ContainerButtonRe,
  TextAv,
  ButtonAv,
  BoxListain,
} from './styles';
import {CheckBox} from 'native-base';
import {StatusBar, StyleSheet} from 'react-native';
=======
  Col,
  Grid,
  Content,
  CheckBox,
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
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
import BarsPhoto from '~/assets/img/bars.png';
import Modal from './components/modal';

export default function Profile({navigation}) {
  const [modal, setModal] = useState(false);

  const openDrawer = () => {
    navigation.toggleDrawer();
  };
  const Natacao = () => {
    navigation.navigate('Natacao');
  };
  const AvaliarTreino = () => {
    navigation.navigate('AvaliarTreino');
  };
  const Circulo = () => {
    navigation.navigate('Circulo');
  };
<<<<<<< HEAD

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

=======
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
  return (
    <Container>
      <StatusBar hidden={true} />
      <ContainerBars onPress={openDrawer}>
        <Bars source={BarsPhoto} />
      </ContainerBars>
      <BoxUser>
<<<<<<< HEAD
        <TitleTrain>TREINO</TitleTrain>
      </BoxUser>
      <ContainerMont onPress={openModal}>
        <TitleTrain>SETEMBRO</TitleTrain>
      </ContainerMont>
      <ContainerDay>
        <BoxDay>
          <Day>SEG</Day>
        </BoxDay>
        <BoxDay>
          <Day>TER</Day>
        </BoxDay>
        <BoxDay>
          <Day>QUA</Day>
        </BoxDay>
        <BoxDay>
          <Day>QUI</Day>
        </BoxDay>
        <BoxDay>
          <Day>SEX</Day>
        </BoxDay>
        <BoxDay>
          <Day>SAB</Day>
        </BoxDay>
        <BoxDay>
          <Day>DOM</Day>
        </BoxDay>
      </ContainerDay>
      <ContainerCalendar>
        <BoxNumber>
          <DayNumber />
          <DayNumber />
          <DayNumber />
          <DayNumber />
          <DayNumber />
          <DayNumber>
            <Number>1</Number>
          </DayNumber>
          <DayNumber>
            <Number>2</Number>
          </DayNumber>
        </BoxNumber>
        <BoxNumber>
          <DayNumber>
            <Number>3</Number>
          </DayNumber>
          <DayNumber>
            <Number>4</Number>
          </DayNumber>
          <DayNumber>
            <Number>5</Number>
          </DayNumber>
          <DayNumber>
            <Number>6</Number>
          </DayNumber>
          <DayNumber>
            <Number>7</Number>
          </DayNumber>
          <DayNumber>
            <Number>8</Number>
          </DayNumber>
          <DayNumber>
            <Number>9</Number>
          </DayNumber>
        </BoxNumber>
        <BoxNumber>
          <DayNumber>
            <Number>10</Number>
          </DayNumber>
          <DayNumber>
            <Number>11</Number>
          </DayNumber>
          <DayNumber>
            <Number>12</Number>
          </DayNumber>
          <DayNumber>
            <Number>13</Number>
          </DayNumber>
          <DayNumber>
            <Number>14</Number>
          </DayNumber>
          <DayNumber>
            <Number>15</Number>
          </DayNumber>
          <DayNumber>
            <Number>16</Number>
          </DayNumber>
        </BoxNumber>
        <BoxNumber>
          <DayNumber>
            <Number>17</Number>
          </DayNumber>
          <DayNumber>
            <Number>18</Number>
          </DayNumber>
          <DayNumber>
            <Number>19</Number>
          </DayNumber>
          <DayNumber>
            <Number>20</Number>
          </DayNumber>
          <DayNumber>
            <Number>21</Number>
          </DayNumber>
          <DayNumber>
            <Number>22</Number>
          </DayNumber>
          <DayNumber>
            <Number>23</Number>
          </DayNumber>
        </BoxNumber>
        <BoxNumber>
          <DayNumber>
            <Number>24</Number>
          </DayNumber>
          <DayNumber>
            <Number>25</Number>
          </DayNumber>
          <DayNumber>
            <Number>26</Number>
          </DayNumber>
          <DayNumber>
            <Number>27</Number>
          </DayNumber>
          <DayNumber>
            <Number>28</Number>
          </DayNumber>
          <DayNumber>
            <Number>29</Number>
          </DayNumber>
          <DayNumber>
            <Number>30</Number>
          </DayNumber>
        </BoxNumber>
      </ContainerCalendar>
      <ContainerTrainList>
        <BoxListain>
          <BoxCheck />
          <BoxAula>
            <BoxTextCheck>AULA</BoxTextCheck>
          </BoxAula>
          <BoxKcal>
            <BoxTextCheck>KCAL</BoxTextCheck>
          </BoxKcal>
          <ContainerButtonRe />
        </BoxListain>
        <BoxListTrain>
          <BoxCheck>
            <CheckBox style={styles.check} checked={true} color="green" />
            <BoxTextCheck>12 QUA</BoxTextCheck>
            <BoxTextCheck>8:00</BoxTextCheck>
          </BoxCheck>
          <BoxAula>
            <BoxTextCheck>VILA OLÍMPIA</BoxTextCheck>
            <BoxTextCheck>MUSCULAÇÃO</BoxTextCheck>
            <BoxTextCheck>EVANDRO</BoxTextCheck>
          </BoxAula>
          <BoxKcal>
            <BoxTextCheck>450</BoxTextCheck>
            <BoxTextCheck>KCAL</BoxTextCheck>
          </BoxKcal>
          <ContainerButtonRe>
            <ButtonRe>
              <TextRe>REALIZADO</TextRe>
            </ButtonRe>
            <ButtonAv onPress={AvaliarTreino}>
              <TextAv>AVALIAR</TextAv>
            </ButtonAv>
          </ContainerButtonRe>
        </BoxListTrain>
        <BoxListTrain>
          <BoxCheck>
            <CheckBox style={styles.check} checked={true} color="green" />
            <BoxTextCheck>12 QUA</BoxTextCheck>
            <BoxTextCheck>10:00</BoxTextCheck>
          </BoxCheck>
          <BoxAula>
            <BoxTextCheck>VILA OLÍMPIA</BoxTextCheck>
            <BoxTextCheck>ESTEIRA</BoxTextCheck>
            <BoxTextCheck>EVANDRO</BoxTextCheck>
          </BoxAula>
          <BoxKcal>
            <BoxTextCheck>350</BoxTextCheck>
            <BoxTextCheck>KCAL</BoxTextCheck>
          </BoxKcal>
          <ContainerButtonRe>
            <ButtonRe>
              <TextRe>REALIZADO</TextRe>
            </ButtonRe>
            <ButtonAv onPress={Natacao}>
              <TextAv>AVALIADO</TextAv>
            </ButtonAv>
          </ContainerButtonRe>
        </BoxListTrain>
        <BoxListTrain>
          <BoxCheck>
            <CheckBox style={styles.check} checked={false} color="green" />
            <BoxTextCheck>17 SEG</BoxTextCheck>
            <BoxTextCheck>9:00</BoxTextCheck>
          </BoxCheck>
          <BoxAula>
            <BoxTextCheck>CIDADE JARDIM</BoxTextCheck>
            <BoxTextCheck>NATAÇÃO</BoxTextCheck>
            <BoxTextCheck>WANDERLEI</BoxTextCheck>
          </BoxAula>
          <BoxKcal>
            <BoxTextCheck>450</BoxTextCheck>
            <BoxTextCheck>KCAL</BoxTextCheck>
          </BoxKcal>
          <ContainerButtonRe>
            <ButtonRes>
              <TextRe>RESERVAR</TextRe>
            </ButtonRes>
          </ContainerButtonRe>
        </BoxListTrain>
        <BoxListTrain>
          <BoxCheck>
            <CheckBox style={styles.check} checked={false} color="green" />
            <BoxTextCheck>19 QUA</BoxTextCheck>
            <BoxTextCheck>8:30</BoxTextCheck>
          </BoxCheck>
          <BoxAula>
            <BoxTextCheck>CIDADE JARDIM</BoxTextCheck>
            <BoxTextCheck>CYCLE</BoxTextCheck>
            <BoxTextCheck>ANSELMO</BoxTextCheck>
          </BoxAula>
          <BoxKcal>
            <BoxTextCheck>450</BoxTextCheck>
            <BoxTextCheck>KCAL</BoxTextCheck>
          </BoxKcal>
          <ContainerButtonRe>
            <ButtonRes>
              <TextRe>RESERVAR</TextRe>
            </ButtonRes>
          </ContainerButtonRe>
        </BoxListTrain>
      </ContainerTrainList>
      <Modal visible={modal} onRequestClose={closeModal} />
=======
        <Grid style={styles.grid}>
          <Col style={styles.col}></Col>
        </Grid>
      </BoxUser>
      <Content>
        <Grid style={styles.gridListTopo}>
          <Col></Col>
          <Col><Text tyle={styles.textGrid}>AULA</Text></Col>
          <Col><Text tyle={styles.textGrid}>KGAL</Text></Col>
          <Col></Col>
        </Grid>
        <Grid style={styles.gridList}>
          <Col style={styles.columnCheck}>
            <CheckBox checked={true} color="green"/>
            <Text>12 Quar</Text>
          </Col>
          <Col>
            <Text>Vila Olimpia</Text>
            <Text>MUSCULAÇÃO</Text>
            <Text>Evandro</Text>
          </Col>
          <Col style={styles.columnMeio}><Text>450CKAL</Text></Col>
          <Col>
            <Button small rounded>
              <Text>REALIZADO</Text>
            </Button>
            <Text onPress={AvaliarTreino}>Avaliar</Text>
          </Col>
        </Grid>
        <Grid style={styles.gridList}>
          <Col style={styles.columnCheck}>
            <CheckBox checked={true} color="green"/>
            <Text>12 Quar</Text>
          </Col>
          <Col>
            <Text>Vila Olimpia</Text>
            <Text>ESTEIRA</Text>
          </Col>
          <Col style={styles.columnMeio}><Text>350CKAL</Text></Col>
          <Col>
            <Button small rounded>
              <Text>REALIZADO</Text>
            </Button>
          </Col>
        </Grid>
        <Grid style={styles.gridList}>
          <Col style={styles.columnCheck}>
            <CheckBox checked={false} color="green"/>
            <Text>12 Quar</Text>
          </Col>
          <Col>
            <Text>CIDADE JARDIM</Text>
            <Text>NATAÇÃO</Text>
            <Text>WANDERLEI</Text>
          </Col>
          <Col style={styles.columnMeio}><Text>450CKAL</Text></Col>
          <Col>
            <Button small rounded success onPress={Natacao}>
              <Text>RESERVAR</Text>
            </Button>
          </Col>
        </Grid>
        <Grid style={styles.gridList}>
          <Col style={styles.columnCheck}>
            <CheckBox checked={false} color="green"/>
            <Text>12 Quar</Text>
          </Col>
          <Col>
            <Text>CIDADE JARDIM</Text>
            <Text>CYCLE</Text>
            <Text>Anselmo</Text>
          </Col>
          <Col style={styles.columnMeio}><Text>450CKAL</Text></Col>
          <Col>
            <Button small rounded success onPress={Circulo}>
              <Text>RESERVAR</Text>
            </Button>
          </Col>
        </Grid>
        <Grid>
          
        </Grid>
      </Content>
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
    </Container>
  );
}
const styles = StyleSheet.create({
<<<<<<< HEAD
  check: {
    position: 'relative',
    marginRight: 20,
=======
  gridListTopo:{
    marginTop: 40,
  },
  gridList:{
    borderBottomColor: '#95989A',
    borderLeftColor: '#fff',
    borderTopColor: '#fff',
    borderRightColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 0.28,
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  col: {
    alignItems: 'center',
  },
  columnCheck:{
    width: '18%',
  },
  columnMeio:{
    alignItems: 'center',
    flex: 1,
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
>>>>>>> 8f701d6c03b4d8b7efd906b21e01790cfe521e0f
  },
  textGrid:{
    fontSize: 20,
    fontWeight: 'bold',
  },
});
