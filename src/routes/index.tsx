import React from 'react'

import { View, ActivityIndicator } from 'react-native'
import AuthRoutes from './auth.routes'

const Routes = () => {
  const load = false
  const signed = false
  return signed ? <View /> : <AuthRoutes />
}

export default Routes
