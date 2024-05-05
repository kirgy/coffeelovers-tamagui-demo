import React from 'react'
import { H2, Image, Paragraph, Button, YStack, XStack, Spinner, useWindowDimensions } from '@my/ui'
import { StarFull, Star } from '@tamagui/lucide-icons'
import { getCoffeeByUUID } from 'app/features/coffee/getCoffee'

type CoffeeDetailsProps = {
  uuid: string
}

export const CoffeeDetails = ({ uuid }: CoffeeDetailsProps) => {
  const coffee = getCoffeeByUUID(uuid)

  const { width } = useWindowDimensions()

  if (coffee === undefined) {
    return <Spinner />
  }

  return (
    <YStack>
      <Image
        source={{ uri: coffee.imageUri, width: width, height: width / 1.8 }}
        alt={coffee.title}
      />
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

        <Button variant="outlined">Vote</Button>
      </YStack>
    </YStack>
  )
}
