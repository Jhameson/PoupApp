import React from 'react'
import { Platform } from 'react-native'

import * as Styled from './styles'

const SignUp = () => {
  return (
    <Styled.Background>
      <Styled.Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Styled.AreaInput>
          <Styled.Input placeholder="Nome"></Styled.Input>
        </Styled.AreaInput>
        <Styled.AreaInput>
          <Styled.Input placeholder="E-mail"></Styled.Input>
        </Styled.AreaInput>
        <Styled.AreaInput>
          <Styled.Input placeholder="Senha"></Styled.Input>
        </Styled.AreaInput>
        <Styled.SubmitButton>
          <Styled.SubmitText>Cadastrar</Styled.SubmitText>
        </Styled.SubmitButton>
      </Styled.Container>
    </Styled.Background>
  )
}

export default SignUp
