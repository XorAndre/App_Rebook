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
  Select,
  ContainerBars,
  Bars,
} from './styles';
import {Text} from 'native-base';
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
            <TextTitle>SELECIONE O MÊS</TextTitle>
          </ContainerTitle>
          <ButtonCloseModal onPress={props.onRequestClose}>
            <TextButtonClose>X</TextButtonClose>
          </ButtonCloseModal>
          <BoxUser>
            <Select>
              <Text style={styles.clean}>JANEIRO</Text>
            </Select>
            <Select>
              <Text style={styles.clean}>FEVEREIRO</Text>
            </Select>
            <Select>
              <Text style={styles.clean}>MARÇO</Text>
            </Select>
            <Select>
              <Text style={styles.clean}>ABRIL</Text>
            </Select>
            <Select>
              <Text style={styles.clean}>MAIO</Text>
            </Select>
            <Select>
              <Text style={styles.clean}>JUNHO</Text>
            </Select>
            <Select>
              <Text style={styles.clean}>JULHO</Text>
            </Select>
            <Select>
              <Text style={styles.clean}>AGOSTO</Text>
            </Select>
            <Select>
              <Text style={styles.clean}>SETEMBRO</Text>
            </Select>
            <Select>
              <Text style={styles.clean}>OUTUBRO</Text>
            </Select>
            <Select>
              <Text style={styles.clean}>NOVEMBRO</Text>
            </Select>
            <Select>
              <Text style={styles.clean}>DEZEMBRO</Text>
            </Select>
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
    backgroundColor: '#7159C1',
  },
  header: {
    backgroundColor: '#7159C1',
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
