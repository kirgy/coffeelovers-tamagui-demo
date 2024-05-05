import { RateScreen } from 'app/features/rate/rateScreen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Rate',
        }}
      />
      <RateScreen />
    </>
  )
}
