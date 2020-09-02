import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';
import {
  Container,
  Title,
  BackToSignInButton,
  BackToSignInText,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Crie sua Conta</Title>
            </View>
            <Input name="Name" icon="lock" placeholder="Nome" />
            <Input name="Email" icon="mail" placeholder="E-mail" />
            <Input name="Password" icon="lock" placeholder="Password" />

            <Button
              onPress={() => {
                console.log('Deu');
              }}
            >
              Cadastrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignInButton
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      >
        <Icon name="arrow-left" size={20} color="#ff9000" />
        <BackToSignInText>Fazer Login</BackToSignInText>
      </BackToSignInButton>
    </>
  );
};

export default SignUp;
