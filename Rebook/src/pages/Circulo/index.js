import React from 'react';
import { Image, StyleSheet, StatusBar, View } from 'react-native';
import {
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
} from './styles';

import { 
  Button,
  Container,
  Col,
  CheckBox,
  Header,
  Grid,
  Title, 
  Content, 
  Form,
  Footer, 
  FooterTab, 
  Left, 
  List, 
  ListItem,
  Right, 
  Body, 
  Icon, 
  Input,
  Item,
  Text, 
  Row
} from 'native-base';
import Professor from '~/assets/img/professor.png';

export default function Circulo({navigation}) {
const openDrawer = () => {
    navigation.toggleDrawer();
    };  
  return (
    <Container>
        <Header style={styles.Topo}>
          <Left>
            <Button transparent onPress={openDrawer}>
              <Icon style={styles.cleanText} name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.cleanText}>NATAÇÃO</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.ContainerTABS}>
            <Button transparent style={styles.AtiveTABS}>
                <Text style={styles.AtivaColor}>SEG</Text>    
            </Button>
            <Button transparent>
                <Text style={styles.ColorTABS}>TER</Text>    
            </Button>
            <Button transparent>
                <Text style={styles.ColorTABS}>QUA</Text>    
            </Button>
            <Button transparent>
                <Text style={styles.ColorTABS}>QUI</Text>    
            </Button>
            <Button transparent>
                <Text style={styles.ColorTABS}>SEX</Text>    
            </Button>
            <Button transparent>
                <Text style={styles.ColorTABS}>SÁB</Text>    
            </Button>
            <Button transparent>
                <Text style={styles.ColorTABS}>DOM</Text>    
            </Button>
        </View>
        <Content>
            <Grid style={styles.content}>
                <Col style={styles.colfix}>
                    <Text style={styles.positionText}>Data</Text>
                </Col>
                <Col style={styles.colProfessor}>
                    <Text style={styles.borderText}>TELÃO</Text>
                    <Image source={Professor}></Image>    
                    <Text>NOME PROF.</Text>
                </Col>
                <Col style={styles.colfix}>
                    <Text style={styles.positionText}>Hora</Text>
                </Col>
            </Grid>
            <Grid>
                <Col>
                    <View style={styles.Grade}></View>
                        <View style={styles.GradeCorpo}>
                            <Grid style={styles.GradeLinha}>
                                <Col style={styles.dados}><Text>1</Text></Col>
                                <Col style={styles.dados}><Text>5</Text></Col>
                                <Col style={styles.dados}><Text>9</Text></Col>
                                <Col style={styles.dados}><Text>13</Text></Col>
                                <Col style={styles.dados}><Text>17</Text></Col>
                                <Col style={styles.dados}><Text>21</Text></Col>
                            </Grid>
                            <Grid style={styles.GradeLinha}>
                                <Col style={styles.dados}><Text>2</Text></Col>
                                <Col style={styles.dados}><Text>6</Text></Col>
                                <Col style={styles.dados}><Text>10</Text></Col>
                                <Col style={styles.dados}><Text>13</Text></Col>
                                <Col style={styles.dados}><Text>18</Text></Col>
                                <Col style={styles.dados}><Text>22</Text></Col>
                            </Grid>
                            <Grid style={styles.GradeLinha}>
                                <Col style={styles.dados}><Text>3</Text></Col>
                                <Col style={styles.dados}><Text>7</Text></Col>
                                <Col style={styles.dados}><Text>11</Text></Col>
                                <Col style={styles.dados}><Text>15</Text></Col>
                                <Col style={styles.dados}><Text>19</Text></Col>
                                <Col style={styles.dados}><Text>23</Text></Col>
                            </Grid>
                            <Grid style={styles.GradeLinha}>
                                <Col style={styles.dados}><Text>4</Text></Col>
                                <Col style={styles.dados}><Text>8</Text></Col>
                                <Col style={styles.dados}><Text>12</Text></Col>
                                <Col style={styles.dados}><Text>16</Text></Col>
                                <Col style={styles.dados}><Text>20</Text></Col>
                                <Col style={styles.dados}><Text>24</Text></Col>
                            </Grid>
                    </View> 
                </Col>
            </Grid>
            <Grid>
                <Col style={styles.gridCheck}>
                    <CheckBox checked={false} />
                    <CheckBox checked={true} style={styles.okCheck} />
                </Col>
                <Col style={styles.gridButton}>
                    <Button rounded success>
                        <Text>RESERVAR</Text>
                    </Button>
                </Col>
            </Grid>
        </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
    Topo:{
       backgroundColor: '#C23335',     
    },
    cleanText:{
        color: '#fff',
    },
    colfix:{
        alignItems: 'center',
        position: 'relative',
    },
    positionText:{
        fontSize: 20,
        position: 'absolute',
        top: 90,
    },
    content:{
        marginTop: 30,
    },
    colProfessor:{
        alignItems: 'center',
    },
    Grade:{
        borderColor: '#333',
        marginLeft: 20,
        marginTop: 40,
        width: '90%',

    },
    GradeTopo:{
        flexDirection: 'row',
        marginTop: 20,
    },
    lineTopo:{
        alignItems: 'center',
        width: '16.6%',
    },
    GradeCorpo:{
        marginLeft: 20,
        width: '90%',
    },
    GradeLinha:{
       alignItems: 'center',
       padding: 10,
    },
    dados:{
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: '#333',
        borderWidth: 1,
        margin: 2,
        padding: 10,
    },
    gridCheck:{
        flexDirection: 'row',
        padding: 10,
    },
    okCheck:{
        marginLeft: 10,
    },
    gridButton:{
        marginTop: 30,
        marginRight: 18,
        width: '28%',
    },
    ContainerTABS:{
        backgroundColor: '#C23335',
        flexDirection: 'row',
    },
    ColorTABS:{
        color: '#fff',
    },
    AtiveTABS:{
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    AtivaColor:{
        color: '#C23335',
    },
    borderText:{
      borderColor: '#333',
      borderStyle: 'solid',
      borderWidth: 1,
      padding: 5,
      position: 'relative',
      top: -10,
    }
  });