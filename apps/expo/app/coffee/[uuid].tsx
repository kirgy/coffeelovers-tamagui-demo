import { DetailsScreen } from 'app/features/coffee/detailsScreen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Coffee',
        }}
      />
      <DetailsScreen />
    </>
  )
}
