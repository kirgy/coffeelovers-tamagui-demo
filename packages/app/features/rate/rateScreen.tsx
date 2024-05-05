import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  YStack,
  CoffeeSnippet,
  ScrollView,
  Carousel,
  Stack,
  H2,
  useWindowDimensions,
  Spinner,
  XStack,
  isWeb,
  SizeTokens,
  AnimatePresence,
  SpaceTokens,
  StackProps,
} from '@my/ui'
import { ChevronDown, ChevronUp, Star, StarFull } from '@tamagui/lucide-icons'
import { getAllCoffees } from 'app/features/coffee/getCoffee'
import { getCoffeeByUUID } from 'app/features/coffee/getCoffee'
import { useMemo, useState } from 'react'
import { useLink } from 'solito/link'
import { createParam } from 'solito'
import { useRatings } from 'app/features/coffee/RatingProvider'

const { useParam } = createParam<{ uuid: string }>()

const maxWidth = 800
const stars = Array.from({ length: 5 })
const enterStyle: StackProps['enterStyle'] = {
  opacity: 0,
  y: 10,
  scale: 0.9,
}

const commonProps = {
  px: '$4',
  py: '$2',
  br: '$4',
} as StackProps

const commonAnimatedProps = {
  px: '$4',
  py: '$2',
  br: '$4',
  enterStyle: enterStyle,

  animation: 'bouncy',
} as StackProps

export function RateScreen() {
  const [uuid] = useParam('uuid')
  const [hoverRating, setHoverRating] = useState(0)
  const [ratingChosen, setRatingChosen] = useState(0)

  const coffee = uuid ? getCoffeeByUUID(uuid) : undefined

  const { addRating, getMyRatingsByUUID } = useRatings()

  const mySavedRating = uuid ? getMyRatingsByUUID(uuid) : undefined

  const handleOnPress = (rating) => {
    setRatingChosen(rating)
  }

  const handleSubmitRating = () => {
    if (!uuid) return
    addRating(uuid, ratingChosen)
  }

  if (!coffee || !uuid) return <Spinner />

  return (
    <ScrollView>
      <YStack f={1} jc="center" gap="$4" p="$4" maw={maxWidth} als="center">
        <H2>Rate {coffee.title}</H2>
        <AnimatePresence>
          {mySavedRating && (
            <Stack
              key="has-rated"
              backgroundColor="$green8"
              {...commonProps}
              {...commonAnimatedProps}
            >
              <Paragraph>✅ You've rating this</Paragraph>
            </Stack>
          )}
        </AnimatePresence>
        {!mySavedRating && (
          <Stack key="has-not-rated" backgroundColor="$blue8" {...commonProps}>
            <Paragraph>✍️ You've not rated this</Paragraph>
          </Stack>
        )}
        <Paragraph>
          Choose your rating, where 1 star is "i may as well gone to costa", and 5 is "coffee
          hipster status achieved".
        </Paragraph>
        <XStack als="center">
          {stars.map((_x, index) => {
            const shownRating = hoverRating > 0 ? hoverRating : ratingChosen

            return (
              <Stack
                onPress={() => handleOnPress(index + 1)}
                onPointerEnter={isWeb ? () => setHoverRating(index + 1) : undefined}
                onPointerLeave={isWeb ? () => setHoverRating(0) : undefined}
                key={index}
              >
                {shownRating >= index + 1 ? <StarFull size="$4" /> : <Star size="$4" />}
              </Stack>
            )
          })}
        </XStack>
        <Button
          variant="outlined"
          backgroundColor={ratingChosen < 1 ? '$gray8' : '$yellow10'}
          fontSize="$6"
          disabled={ratingChosen < 1}
          opacity={ratingChosen < 1 ? 0.5 : 1}
          onPress={handleSubmitRating}
        >
          Rate it ☕️
        </Button>
      </YStack>
    </ScrollView>
  )
}
