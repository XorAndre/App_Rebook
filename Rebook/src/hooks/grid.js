/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react';

export default function hooks() {
  const [grid] = useState([
    {
      _id: '0',
      Horario: '06:00',
      NomeAula: 'Natação',
      Duracao: '60',
      Sala: 'Semi Olimpíca',
      Professor: 'Arthur',
      status: 'realizado',
    },
    {
      _id: '1',
      Horario: '06:00',
      NomeAula: 'Treinamento Adulto',
      Duracao: '60',
      Sala: 'Semi Olimpíca',
      Professor: 'Wanderley S',
      status: 'lotado',
    },
    {
      _id: '2',
      Horario: '07:00',
      NomeAula: 'Natação',
      Duracao: '60',
      Sala: 'Semi Olimpíca',
      Professor: 'Arthur',
      status: 'reservar',
    },
    {
      _id: '3',
      Horario: '07:00',
      NomeAula: 'Treinamento Adulto',
      Duracao: '60',
      Sala: 'Semi Olimpíca',
      Professor: 'Wanderley S',
      status: 'lotado',
    },
    {
      _id: '4',
      Horario: '07:00',
      NomeAula: 'Corrida',
      Duracao: '60',
      Sala: 'Boot Camp',
      Professor: 'Waldyr',
      status: 'reservado',
    },
    {
      _id: '5',
      Horario: '07:15',
      NomeAula: 'Cycle',
      Duracao: '45',
      Sala: 'Studio Cycle',
      Professor: 'Christina',
      status: 'reservado',
    },
    {
      _id: '6',
      Horario: '07:30',
      NomeAula: 'Water Cycle',
      Duracao: '45',
      Sala: 'Semi Olimpíca',
      Professor: 'Regiane',
      status: 'lotado',
    },
    {
      _id: '7',
      Horario: '07:30',
      NomeAula: 'CrossFit Class',
      Duracao: '60',
      Sala: 'CrossFit',
      Professor: 'Paula',
      status: 'realizado',
    },
    {
      _id: '8',
      Horario: '08:00',
      NomeAula: 'Natação',
      Duracao: '60',
      Sala: 'Semi Olimpíca',
      Professor: 'Arthur',
      status: 'lotado',
    },
    {
      _id: '9',
      Horario: '08:00',
      NomeAula: 'Abdominal',
      Duracao: '15',
      Sala: 'Studio 1',
      Professor: 'Christina',
      status: 'reservar',
    },
    {
      _id: '10',
      Horario: '08:00',
      NomeAula: 'Alongamento',
      Duracao: '30',
      Sala: 'Studio 2',
      Professor: 'Waldyr',
      status: 'lotado',
    },
    {
      _id: '11',
      Horario: '08:00',
      NomeAula: 'Hatha Yoga',
      Duracao: '60',
      Sala: 'Studio Zen',
      Professor: 'Juliana C',
      status: 'lotado',
    },
    {
      _id: '12',
      Horario: '08:30',
      NomeAula: 'Cycle',
      Duracao: '60',
      Sala: 'Studio Cycle',
      Professor: 'Camila',
      status: 'realizado',
    },
    {
      _id: '13',
      Horario: '08:30',
      NomeAula: 'Pilates Balls',
      Duracao: '60',
      Sala: 'Studio 2',
      Professor: 'Juliane',
      status: 'lotado',
    },
    {
      _id: '14',
      Horario: '08:30',
      NomeAula: 'TRX Trainer',
      Duracao: '30',
      Sala: 'Studio de Lutas',
      Professor: 'Elisangela',
      status: 'reservar',
    },
  ]);

  return grid;
}

  /*'15': {
    Horario: '08:45',
    NomeAula: 'Boot Camp',
    Duracao: '45',
    Sala: 'Boot Camp',
    Professor: 'Anselmo',
  },
  '16': {
    Horario: '09:00',
    NomeAula: 'Nata\u00e7\u00e3o',
    Duracao: '60',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Lucas Soares',
  },
  '17': {
    Horario: '09:00',
    NomeAula: 'Alongamento',
    Duracao: '30',
    Sala: 'Studio 1',
    Professor: 'Elisangela',
  },
  '18': {
    Horario: '09:30',
    NomeAula: 'Adapta\u00e7\u00e3o 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Arthur',
  },
  '19': {
    Horario: '09:30',
    NomeAula: 'B\u00e1sico 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Arthur',
  },
  '20': {
    Horario: '09:30',
    NomeAula: 'Beb\u00ea 1',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Regiane',
  },
  '21': {
    Horario: '09:30',
    NomeAula: 'Bosu Ab Class',
    Duracao: '15',
    Sala: 'Studio 2',
    Professor: 'Christina',
  },
  '22': {
    Horario: '09:30',
    NomeAula: 'Yoga Vinyasa',
    Duracao: '60',
    Sala: 'Studio Zen',
    Professor: 'Miriam',
  },
  '23': {
    Horario: '09:45',
    NomeAula: 'Cycle',
    Duracao: '60',
    Sala: 'Studio Cycle',
    Professor: 'Anselmo',
  },
  '24': {
    Horario: '09:45',
    NomeAula: 'Localizada',
    Duracao: '60',
    Sala: 'Studio 2',
    Professor: 'Christina',
  },
  '25': {
    Horario: '10:00',
    NomeAula: 'Nata\u00e7\u00e3o',
    Duracao: '60',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Lucas Soares',
  },
  '26': {
    Horario: '10:15',
    NomeAula: 'Adapta\u00e7\u00e3o 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Regiane',
  },
  '27': {
    Horario: '10:15',
    NomeAula: 'Aperfei\u00e7oamt 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Arthur',
  },
  '28': {
    Horario: '10:15',
    NomeAula: 'B\u00e1sico 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Arthur',
  },
  '29': {
    Horario: '10:15',
    NomeAula: 'Inicia\u00e7\u00e3o 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Regiane',
  },
  '30': {
    Horario: '10:30',
    NomeAula: 'Ritmos',
    Duracao: '60',
    Sala: 'Studio 1',
    Professor: 'Amanda Baldo Ambrosi',
  },
  '31': {
    Horario: '10:30',
    NomeAula: 'Circo M',
    Duracao: '45',
    Sala: 'Crossfit',
    Professor: 'Monica',
  },
  '32': {
    Horario: '10:30',
    NomeAula: 'Jud\u00f4 M',
    Duracao: '45',
    Sala: 'Studio de Lutas',
    Professor: 'Bruno',
  },
  '33': {
    Horario: '10:45',
    NomeAula: 'Alongamento',
    Duracao: '30',
    Sala: 'Studio Zen',
    Professor: 'Christina',
  },
  '34': {
    Horario: '11:00',
    NomeAula: 'Nata\u00e7\u00e3o',
    Duracao: '60',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Regiane',
  },
  '35': {
    Horario: '11:15',
    NomeAula: 'Hidrogin\u00e1stica',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Regiane',
  },
  '36': {
    Horario: '11:30',
    NomeAula: 'TRX Trainer',
    Duracao: '30',
    Sala: 'Studio de Lutas',
    Professor: 'Elisangela',
  },
  '37': {
    Horario: '12:00',
    NomeAula: 'Nata\u00e7\u00e3o',
    Duracao: '60',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Angelotti',
  },
  '38': {
    Horario: '12:00',
    NomeAula: 'Abdominal',
    Duracao: '15',
    Sala: 'Studio 2',
    Professor: 'Elisangela',
  },
  '39': {
    Horario: '12:30',
    NomeAula: 'Treinamento Adulto',
    Duracao: '60',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Angelotti',
  },
  '40': {
    Horario: '12:30',
    NomeAula: 'CrossFit Class',
    Duracao: '60',
    Sala: 'CrossFit',
    Professor: 'Caio Chiorlin Revite',
  },
  '41': {
    Horario: '12:30',
    NomeAula: 'Cycle',
    Duracao: '30',
    Sala: 'Studio Cycle',
    Professor: 'Camila',
  },
  '42': {
    Horario: '13:00',
    NomeAula: 'Nata\u00e7\u00e3o',
    Duracao: '60',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Angelotti',
  },
  '43': {
    Horario: '13:00',
    NomeAula: 'Corrida',
    Duracao: '30',
    Sala: 'Boot Camp',
    Professor: 'Camila',
  },
  '44': {
    Horario: '14:00',
    NomeAula: 'Nata\u00e7\u00e3o',
    Duracao: '60',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Luis Fernando',
  },
  '45': {
    Horario: '14:15',
    NomeAula: 'Adapta\u00e7\u00e3o 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Sabrina',
  },
  '46': {
    Horario: '14:15',
    NomeAula: 'Aperfei\u00e7oamt 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Luis Fernando',
  },
  '47': {
    Horario: '14:15',
    NomeAula: 'Avan\u00e7ado 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Luis Fernando',
  },
  '48': {
    Horario: '14:15',
    NomeAula: 'B\u00e1sico 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Luis Fernando',
  },
  '49': {
    Horario: '14:15',
    NomeAula: 'Inicia\u00e7\u00e3o 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Luis Fernando',
  },
  '50': {
    Horario: '15:00',
    NomeAula: 'Nata\u00e7\u00e3o',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Andrea Fernandes',
  },
  '51': {
    Horario: '15:00',
    NomeAula: 'Adapta\u00e7\u00e3o 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Sabrina',
  },
  '52': {
    Horario: '15:00',
    NomeAula: 'Aperfei\u00e7oamt 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Cinthia Lima',
  },
  '53': {
    Horario: '15:00',
    NomeAula: 'Avan\u00e7ado 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Viviane Francisco',
  },
  '54': {
    Horario: '15:00',
    NomeAula: 'B\u00e1sico 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Luis Fernando',
  },
  '55': {
    Horario: '15:00',
    NomeAula: 'Inicia\u00e7\u00e3o 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Jayne Da Silva',
  },
  '56': {
    Horario: '15:30',
    NomeAula: 'Ballet I',
    Duracao: '45',
    Sala: 'Studio 1',
    Professor: 'Ana Carolina',
  },
  '57': {
    Horario: '15:30',
    NomeAula: 'Circo M',
    Duracao: '45',
    Sala: 'Crossfit',
    Professor: 'Thabata',
  },
  '58': {
    Horario: '15:30',
    NomeAula: 'Jud\u00f4 I',
    Duracao: '45',
    Sala: 'Studio Zen',
    Professor: 'Bruno',
  },
  '59': {
    Horario: '15:45',
    NomeAula: 'Nata\u00e7\u00e3o',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Andrea Fernandes'
  },
  '60': {
    Horario: '15:45',
    NomeAula: 'Adapta\u00e7\u00e3o 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Jayne Da Silva',
  },
  '61': {
    Horario: '15:45',
    NomeAula: 'Adapta\u00e7\u00e3o 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Viviane Francisco',
  },
  '62': {
    Horario: '15:45',
    NomeAula: 'Aperfei\u00e7oamt 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Cinthia Lima',
  },
  '63': {
    Horario: '15:45',
    NomeAula: 'Avan\u00e7ado 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Jesse Biffe',
  },
  '64': {
    Horario: '15:45',
    NomeAula: 'B\u00e1sico 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Luis Fernando',
  },
  '65': {
    Horario: '15:45',
    NomeAula: 'Beb\u00ea 2',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Sabrina',
  },
  '66': {
    Horario: '16:00',
    NomeAula: 'Boxe Teen',
    Duracao: '60',
    Sala: 'Studio de Lutas',
    Professor: 'Bruno Alaminos',
  },
  '67': {
    Horario: '16:15',
    NomeAula: 'Ballet II',
    Duracao: '45',
    Sala: 'Studio 1',
    Professor: 'Ana Carolina',
  },
  '68': {
    Horario: '16:15',
    NomeAula: 'Circo I',
    Duracao: '45',
    Sala: 'Crossfit',
    Professor: 'Monica',
  },
  '69': {
    Horario: '16:15',
    NomeAula: 'Jud\u00f4 II',
    Duracao: '45',
    Sala: 'Studio Zen',
    Professor: 'Vinicius',
  },
  '70': {
    Horario: '16:30',
    NomeAula: 'Nata\u00e7\u00e3o',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Andrea Fernandes',
  },
  '71': {
    Horario: '16:30',
    NomeAula: 'Adapta\u00e7\u00e3o 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Jayne Da Silva',
  },
  '72': {
    Horario: '16:30',
    NomeAula: 'Adapta\u00e7\u00e3o 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Viviane Francisco',
  },
  '73': {
    Horario: '16:30',
    NomeAula: 'Aperfei\u00e7oamt 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Cinthia Lima',
  },
  '74': {
    Horario: '16:30',
    NomeAula: 'Avan\u00e7ado 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Bruna Stacciarini',
  },
  '75': {
    Horario: '16:30',
    NomeAula: 'B\u00e1sico 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Luis Fernando',
  },
  '76': {
    Horario: '16:30',
    NomeAula: 'Inicia\u00e7\u00e3o 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Sabrina',
  },
  '77': {
    Horario: '16:30',
    NomeAula: 'Treinamento 45',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Jesse Biffe',
  },
  '78': {
    Horario: '17:00',
    NomeAula: 'Abdominal',
    Duracao: '15',
    Sala: 'Studio 1',
    Professor: 'Mariana',
  },
  '79': {
    Horario: '17:00',
    NomeAula: 'Ballet III',
    Duracao: '45',
    Sala: 'Studio 2',
    Professor: 'Ana Carolina',
  },
  '80': {
    Horario: '17:00',
    NomeAula: 'Circo II',
    Duracao: '45',
    Sala: 'Crossfit',
    Professor: 'Monica',
  },
  '81': {
    Horario: '17:00',
    NomeAula: 'Jud\u00f4 III',
    Duracao: '45',
    Sala: 'Studio de Lutas',
    Professor: 'Bruno',
  },
  '82': {
    Horario: '17:15',
    NomeAula: 'Nata\u00e7\u00e3o',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Bruna Stacciarini',
  },
  '83': {
    Horario: '17:15',
    NomeAula: 'Adapta\u00e7\u00e3o 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Luis Fernando',
  },
  '84': {
    Horario: '17:15',
    NomeAula: 'Adapta\u00e7\u00e3o 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Sabrina',
  },
  '85': {
    Horario: '17:15',
    NomeAula: 'Aperfei\u00e7oamt 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Cinthia Lima',
  },
  '86': {
    Horario: '17:15',
    NomeAula: 'Avan\u00e7ado 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Jesse Biffe',
  },
  '87': {
    Horario: '17:15',
    NomeAula: 'B\u00e1sico 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Viviane Francisco',
  },
  '88': {
    Horario: '17:15',
    NomeAula: 'Inicia\u00e7\u00e3o 2\u00aa e 4\u00aa',
    Duracao: '45',
    Sala: 'Infantil',
    Professor: 'Jayne Da Silva',
  },
  '89': {
    Horario: '17:15',
    NomeAula: 'Power Jump',
    Duracao: '45',
    Sala: 'Studio 1',
    Professor: 'Mariana',
  },
  '90': {
    Horario: '17:30',
    NomeAula: 'Bosu Ab Class',
    Duracao: '30',
    Sala: 'Studio Zen',
    Professor: 'Lc Freitas',
  },
  '91': {
    Horario: '17:45',
    NomeAula: 'Circo Teen',
    Duracao: '45',
    Sala: 'Crossfit',
    Professor: 'Thabata',
  },
  '92': {
    Horario: '17:45',
    NomeAula: 'Circo III',
    Duracao: '45',
    Sala: 'Crossfit',
    Professor: 'Thabata',
  },
  '93': {
    Horario: '18:00',
    NomeAula: 'Nata\u00e7\u00e3o',
    Duracao: '60',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Bruna Stacciarini',
  },
  '94': {
    Horario: '18:00',
    NomeAula: 'Abdominal',
    Duracao: '15',
    Sala: 'Studio 2',
    Professor: 'Anselmo',
  },
  '95': {
    Horario: '18:00',
    NomeAula: 'Alongamento',
    Duracao: '30',
    Sala: 'Studio 1',
    Professor: 'Ivan Goncalves Branco Da Silva',
  },
  '96': {
    Horario: '18:00',
    NomeAula: 'Pilates Balls',
    Duracao: '60',
    Sala: 'Studio Zen',
    Professor: 'Mariana',
  },
  '97': {
    Horario: '18:15',
    NomeAula: 'Boot Camp',
    Duracao: '45',
    Sala: 'Boot Camp',
    Professor: 'Lc Freitas',
  },
  '98': {
    Horario: '18:15',
    NomeAula: 'Cycle',
    Duracao: '60',
    Sala: 'Studio Cycle',
    Professor: 'Anselmo',
  },
  '99': {
    Horario: '18:30',
    NomeAula: 'Hidrogin\u00e1stica',
    Duracao: '45',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Cinthia Lima',
  },
  '100': {
    Horario: '18:30',
    NomeAula: 'CrossFit Class',
    Duracao: '60',
    Sala: 'CrossFit',
    Professor: 'Caio Chiorlin Revite',
  },
  '101': {
    Horario: '18:30',
    NomeAula: 'Ballet',
    Duracao: '45',
    Sala: 'Studio 2',
    Professor: 'Ana Carolina',
  },
  '102': {
    Horario: '18:30',
    NomeAula: 'Top Dance',
    Duracao: '60',
    Sala: 'Studio 1',
    Professor: 'Ivan Goncalves Branco Da Silva',
  },
  '103': {
    Horario: '18:30',
    NomeAula: 'Ballet Teen',
    Duracao: '45',
    Sala: 'Studio de Lutas',
    Professor: 'Ana Carolina',
  },
  '104': {
    Horario: '19:00',
    NomeAula: 'Nata\u00e7\u00e3o',
    Duracao: '60',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Tonini',
  },
  '105': {
    Horario: '19:00',
    NomeAula: 'Swasthya Yoga',
    Duracao: '60',
    Sala: 'Studio Zen',
    Professor: 'Belen',
  },
  '106': {
    Horario: '19:15',
    NomeAula: 'Abdominal',
    Duracao: '15',
    Sala: 'Studio de Lutas',
    Professor: 'Carolina',
  },
  '107': {
    Horario: '19:15',
    NomeAula: 'Body Pump',
    Duracao: '60',
    Sala: 'Studio 2',
    Professor: 'Mariana',
  },
  '108': {
    Horario: '19:30',
    NomeAula: 'Circo Adulto',
    Duracao: '60',
    Sala: 'Crossfit',
    Professor: 'Daniel M',
  },
  '109': {
    Horario: '19:30',
    NomeAula: 'Cycle',
    Duracao: '45',
    Sala: 'Studio Cycle',
    Professor: 'Carolina',
  },
  '110': {
    Horario: '19:30',
    NomeAula: 'MMA Reebok',
    Duracao: '60',
    Sala: 'Studio de Lutas',
    Professor: 'Bruno',
  },
  '111': {
    Horario: '20:00',
    NomeAula: 'Nata\u00e7\u00e3o',
    Duracao: '60',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Tonini',
  },
  '112': {
    Horario: '20:15',
    NomeAula: 'Alongamento',
    Duracao: '30',
    Sala: 'Studio 2',
    Professor: 'Mariana',
  },
  '113': {
    Horario: '20:30',
    NomeAula: 'CrossFit Class',
    Duracao: '60',
    Sala: 'CrossFit',
    Professor: 'Caio Chiorlin Revite',
  },
  '114': {
    Horario: '20:30',
    NomeAula: 'Boxe',
    Duracao: '60',
    Sala: 'Studio de Lutas',
    Professor: 'Zero',
  },
  '115': {
    Horario: '21:00',
    NomeAula: 'Nata\u00e7\u00e3o',
    Duracao: '60',
    Sala: 'Semi Ol\u00edmpica',
    Professor: 'Tonini',
  },*/