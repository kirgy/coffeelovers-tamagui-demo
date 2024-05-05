import React, { useCallback } from 'react'
import {
  H2,
  Image,
  Paragraph,
  Button,
  YStack,
  XStack,
  Spinner,
  useWindowDimensions,
  VoteButton,
} from '@my/ui'
import { StarFull, Star, Vote } from '@tamagui/lucide-icons'
import { getCoffeeByUUID } from 'app/features/coffee/getCoffee'

type CoffeeDetailsProps = {
  uuid: string
}

export const CoffeeDetails = ({ uuid }: CoffeeDetailsProps) => {
  const coffee = getCoffeeByUUID(uuid)

  const { width } = useWindowDimensions()

  const handleVote = useCallback(() => {}, [])

  if (coffee === undefined) {
    return <Spinner />
  }

  return (
    <YStack maw={800} alignSelf="center">
      <Image
        source={{ uri: coffee.imageUri, width: width, height: width / 1.8 }}
        alt={coffee.title}
        style={{
          maxWidth: 800,
        }}
      />
      <YStack m="$4" gap="$2">
        <YStack m="$4" gap="$2">
          <H2>{coffee.title}</H2>
          <YStack>
            <XStack gap="$4">
              <XStack gap={8} ai="center">
                <StarFull />
                <StarFull />
                <Star />
                <Star />
                <Star />
              </XStack>
              <Paragraph size="$1">4 votes</Paragraph>
            </XStack>
          </YStack>

          <YStack gap="$4">
            {coffee.description.map((paragraph, index) => (
              <Paragraph key={index}>{paragraph}</Paragraph>
            ))}
          </YStack>
        </YStack>

        <VoteButton mb="$4" mx="$4" onPress={handleVote}>
          <VoteButton.Icon size="$12">
            <Vote />
          </VoteButton.Icon>
          <VoteButton.Text size="$4">Vote</VoteButton.Text>
        </VoteButton>
      </YStack>
    </YStack>
  )
}
