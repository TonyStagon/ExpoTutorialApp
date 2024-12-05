import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';

import { useEffect } from 'react';
import 'react-native-reanimated';

import { Button, Text, View } from 'react-native';
// import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  return (
    <SafeAreaView>
      <Text>Hi There You  There Yes You </Text>
      <Button title="Submit" />
      <StatusBar backgroundColor="Blue" style="light" />

    </SafeAreaView>
  );
}
/*
<Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
*/