import { CoffeeDetails, ScrollView, Spinner, useWindowDimensions } from '@my/ui'
import { createParam } from 'solito'

const { useParam } = createParam<{ uuid: string }>()

export function DetailsScreen() {
  const [uuid] = useParam('uuid')
  const { width } = useWindowDimensions()

  if(!uuid) return <Spinner />

  return (
    <ScrollView maxWidth={width}>
      <CoffeeDetails uuid={uuid} />
    </ScrollView>
  )
}
