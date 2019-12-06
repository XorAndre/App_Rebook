import React from 'react';
import {Text} from 'react-native';
import {
  Container,
  ContainerBars,
  Bars,
  BoxUser,
  TitleTrain,
  ContainerForm,
  Select,
  Input,
  ContainerDuo,
  Form,
  Button,
  TextButton,
} from './styles';
import BarsPhoto from '~/assets/img/bars.png';

export default function escolhaPerson({navigation}) {
  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <Container>
      <ContainerBars onPress={openDrawer}>
        <Bars source={BarsPhoto} />
      </ContainerBars>
      <BoxUser>
        <TitleTrain>ESCOLHA SEU PERSONAL</TitleTrain>
      </BoxUser>
      <ContainerForm>
        <Form>
          <Text>
            Em qual unidade você realizará seus treinos com maior frequência?
          </Text>
          <Select>
            <Text style={{color: 'white'}}>CIDADE JARDIM</Text>
          </Select>
          <Text>Atividade física</Text>
          <Select>
            <Text style={{color: 'white'}}>ATIVO</Text>
          </Select>
          <Input placeholder="ATIVIDADE" />
          <Text>Você tem alguma retrição médica para a pratica de atividades físicas?</Text>
          <Select>
            <Text style={{color: 'white'}}>SIM</Text>
          </Select>
          <Input placeholder="QUAL?" />
          <Text>Em qual data pretende começar as atividades?</Text>
          <Input placeholder="DATA" />
          <Text>Selecione os seus dois objetivos principais</Text>
          <ContainerDuo>
            <Select>
              <Text style={{color: 'white'}}>PRINCIPAL</Text>
            </Select>
            <Select>
              <Text style={{color: 'white'}}>SECUNDARIO</Text>
            </Select>
          </ContainerDuo>
          <Text>Faça o mesmo com suas atividades de preferência</Text>
          <ContainerDuo>
            <Select>
              <Text style={{color: 'white'}}>PRINCIPAL</Text>
            </Select>
            <Select>
              <Text style={{color: 'white'}}>SECUNDARIO</Text>
            </Select>
          </ContainerDuo>
          <Text>Horários</Text>
          <ContainerDuo>
            <Select>
              <Text style={{color: 'white'}}>Opção 1</Text>
            </Select>
            <Select>
              <Text style={{color: 'white'}}>Opção 2</Text>
            </Select>
          </ContainerDuo>
          <Text>Quero alguém específico</Text>
          <Input placeholder="QUEM?" />
          <Button>
            <TextButton>ENVIAR</TextButton>
          </Button>
        </Form>
      </ContainerForm>
    </Container>
  );
}
