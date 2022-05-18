import React from 'react'
import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular
} from '@expo-google-fonts/poppins'

import {
  Comfortaa_400Regular,
  Comfortaa_600SemiBold,
} from '@expo-google-fonts/comfortaa'

import Routes from './src/routes'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Comfortaa_400Regular,
    Comfortaa_600SemiBold
  })

  if(!fontsLoaded)
    return <AppLoading />
    
  return(
    <Routes />
  )
}
