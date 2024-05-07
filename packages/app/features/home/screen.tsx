// debug
import {
  H1,
  Paragraph,
  Separator,
  YStack,
  CoffeeSnippet,
  ScrollView,
  Carousel,
  Stack,
  H2,
  useWindowDimensions,
  useMedia,
} from '@my/ui'
import { getAllCoffees } from 'app/features/coffee/getCoffee'
import { useMemo } from 'react'

const maxWidth = 800

export const HomeScreen = () => {
  const coffees = useMemo(() => getAllCoffees(), [])
  const media = useMedia()

  const { width: screenWidth } = useWindowDimensions()
  const carouselPaddingX = screenWidth > maxWidth ? (screenWidth - maxWidth) / 2 + 10 : 10
  const carouselItemsOnScreen = media.xs ? 1 : 3

  return (
    <ScrollView>
      <YStack f={1} jc="center" gap="$4">
        <Stack maw={maxWidth} alignSelf="center" p="$4">
          <H1 size="$9" $gtXs={{ size: '$10' }} ta="center">
            #cop-coffee-lovers
          </H1>
          <Paragraph size="$4" ta="center">
            For people who take their coffee seriously.
          </Paragraph>
        </Stack>
        <Stack px="$4" maw={maxWidth} alignSelf="center" w="100%">
          <Separator alignSelf="stretch" />
          <H2 ta="left">This week's coffee choices</H2>
        </Stack>
        <Stack f={1}>
          <Carousel
            itemsOnScreen={carouselItemsOnScreen}
            items={coffees.map((coffee) => (
              <CoffeeSnippet uuid={coffee.uuid} name={coffee.title} imageUri={coffee.imageUri} />
            ))}
            paddingX={carouselPaddingX}
          />
        </Stack>
      </YStack>
    </ScrollView>
  )
}
