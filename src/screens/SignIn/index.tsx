import React from 'react'
import { Text, View } from 'react-native'

import * as Styled from './styles'

const SignIn = () => {
  return (
    <Styled.Background>
      <Styled.Container>
        <Styled.Logo source={require('../../_assets/Logo.png')} />
        <Styled.AreaInput>
          <Styled.Input placeholder="Seu e-mail"></Styled.Input>
        </Styled.AreaInput>
        <Styled.AreaInput>
          <Styled.Input placeholder="Sua senha"></Styled.Input>
        </Styled.AreaInput>
        <Styled.SubmitButton>
          <Styled.SubmitText>Acessar</Styled.SubmitText>
        </Styled.SubmitButton>
        <Styled.Link>
          <Styled.LinkText></Styled.LinkText>
        </Styled.Link>
      </Styled.Container>
    </Styled.Background>
  )
}

export default SignIn
