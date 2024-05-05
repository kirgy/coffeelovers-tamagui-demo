import { CoffeeDetails, ScrollView, useWindowDimensions } from '@my/ui'
import { createParam } from 'solito'

const { useParam } = createParam<{ uuid: string }>()

export function DetailsScreen() {
  const [uuid] = useParam('uuid')
  const { width } = useWindowDimensions()

  return (
    <ScrollView maxWidth={width}>
      <CoffeeDetails uuid={uuid} />
    </ScrollView>
  )
}
