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

export default function Natacao({navigation}) {
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
            <Title style={styles.cleanText}>NATAÇAO</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            <Grid style={styles.content}>
                <Col style={styles.colfix}>
                    <Text style={styles.positionText}>Data</Text>
                </Col>
                <Col style={styles.colProfessor}>
                    <Image source={Professor}></Image>    
                    <Text>NOME PROFE</Text>
                </Col>
                <Col style={styles.colfix}>
                    <Text style={styles.positionText}>Hora</Text>
                </Col>
            </Grid>
            <Grid>
                <Col>
                    <View style={styles.Grade}>
                        <View style={styles.GradeTopo}>
                            <View style={styles.lineTopo}>
                                <Text>A</Text>
                            </View>
                            <View style={styles.lineTopo}>
                                <Text>B</Text>
                            </View>
                            <View style={styles.lineTopo}>
                                <Text>C</Text>
                            </View>
                            <View style={styles.lineTopo}>
                                <Text>D</Text>
                            </View>
                            <View style={styles.lineTopo}>
                                <Text>E</Text>
                            </View>
                            <View style={styles.lineTopo}>
                                <Text>F</Text>
                            </View>
                        </View>  
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
                    </View> 
                </Col>
            </Grid>
            <Grid>
                <Col style={styles.gridCheck}>
                    <CheckBox checked={false} />
                    <CheckBox checked={true} style={styles.okCheck} />
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
        top: 50,
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
        borderStyle: 'solid',
        borderColor: '#333',
        borderWidth: 1,
    },
    GradeLinha:{
       alignItems: 'center',
       padding: 10,
    },
    dados:{
        alignItems: 'center',
    },
    gridCheck:{
        flexDirection: 'row',
        padding: 10,
    },
    okCheck:{
        marginLeft: 10,
    }
  });