import React from 'react';
import { Text, Image } from 'react-native';

import { Container } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Text>teste</Text>
    </Container>
  );
};

export default SignIn;
