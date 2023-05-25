import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  )
}
