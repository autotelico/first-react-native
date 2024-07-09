/// <reference types="nativewind/types" />

import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import './global.css'

const App = () => {
  return (
    <View className='flex items-center justify-center'>
      <Text className="text-3xl font-pblack text-red-500">Aora!</Text>
      <Link href='/(tabs)/home' className='text-blue-700'>Go to Home</Link>
      <Link href='/profile' className='text-blue-700'>Go to Profile</Link>
    </View>
  )
}

export default App

