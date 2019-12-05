import React from 'react';
import {StyleSheet} from 'react-native';
import {
  ContainerModal,
  Fade,
  BoxModal,
  ButtonCloseModal,
  ContainerBox,
  TextButtonClose,
  TextError,
} from './styles';

const Modal = props => {
  return (
    <ContainerModal
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onRequestClose}>
      <Fade />
      <ContainerBox>
        <BoxModal>
          <TextError>{props.error}</TextError>
          <ButtonCloseModal onPress={props.onRequestClose}>
            <TextButtonClose>Ok</TextButtonClose>
          </ButtonCloseModal>
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
});

export default Modal;