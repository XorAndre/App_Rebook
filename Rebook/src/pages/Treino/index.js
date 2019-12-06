import React, {useState} from 'react';
import {
  Container,
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

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <Container>
      <StatusBar hidden={true} />
      <ContainerBars onPress={openDrawer}>
        <Bars source={BarsPhoto} />
      </ContainerBars>
      <BoxUser>
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
    </Container>
  );
}

const styles = StyleSheet.create({
  check: {
    position: 'relative',
    marginRight: 20,
  },
});
