import React from 'react'
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import * as Styled from './styles'

const SignIn = () => {
  const navigation = useNavigation()
  return (
    <Styled.Background>
      <Styled.Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Styled.Logo source={require('../../_assets/Logo.png')} />

        <Styled.AreaInput>
          <Styled.Input placeholder="Seu e-mail"></Styled.Input>
        </Styled.AreaInput>

        <Styled.AreaInput>
          <Styled.Input placeholder="Sua senha"></Styled.Input>
        </Styled.AreaInput>

        <Styled.SubmitButton activeOpacity={0.8}>
          <Styled.SubmitText>Acessar</Styled.SubmitText>
        </Styled.SubmitButton>

        <Styled.Link onPress={() => navigation.navigate('SignUp')}>
          <Styled.LinkText>Criar uma conta</Styled.LinkText>
        </Styled.Link>
      </Styled.Container>
    </Styled.Background>
  )
}

export default SignIn
