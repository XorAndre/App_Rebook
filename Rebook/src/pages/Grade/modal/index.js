import React from 'react';
import {StyleSheet} from 'react-native';
import {
  ContainerModal,
  BoxModal,
  ButtonCloseModal,
  ContainerBox,
  TextButtonClose,
  ContainerTitle,
  TextTitle,
  BoxUser,
  ContainerDay,
  BoxDay,
  User,
  ContainerFiltro,
  Select,
  ContainerBars,
  Bars,
} from './styles';
import {Text} from 'native-base';
import ImageManha from '~/assets/img/icones/manha.png';
import ImageTarde from '~/assets/img/icones/tarde.png';
import ImageNoite from '~/assets/img/icones/noite.png';
import BarsPhoto from '~/assets/img/bars.png';

const Modal = props => {
  return (
    <ContainerModal
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onRequestClose}>
      <ContainerBox>
        <ContainerBars>
          <Bars source={BarsPhoto} />
        </ContainerBars>
        <BoxModal>
          <ContainerTitle>
            <TextTitle>GRADE</TextTitle>
          </ContainerTitle>
          <ButtonCloseModal onPress={props.onRequestClose}>
            <TextButtonClose>+</TextButtonClose>
          </ButtonCloseModal>
          <BoxUser>
            <Select>
              <Text style={styles.clean}>POR MODALIDADE</Text>
            </Select>
            <Select>
              <Text style={styles.clean}>POR AULA</Text>
            </Select>
            <Select>
              <Text style={styles.clean}>POR DIA</Text>
            </Select>
            <Select>
              <Text style={styles.clean}>PUBLICO</Text>
            </Select>
            <ContainerDay>
              <BoxDay>
                <User source={ImageManha} style={styles.icon} />
                <Text style={styles.clean}>Manhã</Text>
              </BoxDay>
              <BoxDay>
                <User source={ImageTarde} style={styles.icon} />
                <Text style={styles.clean}>Tarde</Text>
              </BoxDay>
              <BoxDay>
                <User source={ImageNoite} style={styles.icon} />
                <Text style={styles.clean}>Noite</Text>
              </BoxDay>
            </ContainerDay>
            <ContainerFiltro>
              <Text style={styles.clean}>Limpar filtro</Text>
            </ContainerFiltro>
          </BoxUser>
        </BoxModal>
      </ContainerBox>
    </ContainerModal>
  );
};

const styles = StyleSheet.create({
  error: {
    width: 50,
    height: 50,
  },
  col: {
    alignItems: 'center',
  },
  clean: {
    color: '#fff',
  },
  grid: {
    alignItems: 'center',
    marginTop: 45,
  },
  icon: {
    height: 30,
    width: 30,
  },
  tabHeading: {
    backgroundColor: "#7159C1",
  },
  header: {
    backgroundColor: "#7159C1",
  },
  container: {
    flex: 1,
  },
  plus: {
    fontSize: 20,
    color: 'white',
    top: -2,
  },
});

export default Modal;
