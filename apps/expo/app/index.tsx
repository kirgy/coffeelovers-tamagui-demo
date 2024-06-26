import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'
import 'react-native-gesture-handler'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <HomeScreen />
    </>
  )
}
