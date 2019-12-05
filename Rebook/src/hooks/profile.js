/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react';

export default function hooks() {
  const [profile] = useState({
    dbid: '182798',
    name: 'Erik Douglas Tereza',
    age: '37 anos, 5 meses e 16 dias',
    birth: '1982-06-17',
    email: 'erik.tereza@edtereza.com.br',
    gender: 'M',
    nickname: 'Erik D.',
    peso: '67',
    height: '178',
    phone: {
      home: {
        code: '',
        number: '',
      },
      work: {
        code: '11',
        number: '3759-7878',
      },
      mobile: {
        code: '11',
        number: '94012-6763',
      },
    },
  });

  return profile;
}
