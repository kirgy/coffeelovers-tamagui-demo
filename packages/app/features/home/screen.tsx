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
  useMedia,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { getAllCoffees } from 'app/features/coffee/getCoffee'
import { useMemo, useState } from 'react'
import { useLink } from 'solito/link'

const maxWidth = 800

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  const coffees = useMemo(() => getAllCoffees(), [])
  const media = useMedia()

  const { width: screenWidth } = useWindowDimensions()
  const carouselPaddingX = screenWidth > maxWidth ? (screenWidth - maxWidth) / 2 + 10 : 10
  const carouselItemsOnScreen = media.xs ? 1 : 3

  return (
    <ScrollView>
      <YStack f={1} jc="center" gap="$4">
        <Stack maw={maxWidth} alignSelf="center" p="$4">
          <H1 size="$10" ta="center">
            Coffee Lovers
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
        {/* <YStack gap="$4" bc="$background">
          <CoffeeSnippet imageUri="https://zekesfirstsecret.s3.eu-west-1.amazonaws.com/public/boonaboona/41f2f4ccb3e005249b9d6ee49ffc3b80.png" />

          <Separator />
          <Paragraph ta="center">
            Made by{' '}
            <Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">
              @natebirdman
            </Anchor>
            ,{' '}
            <Anchor
              color="$color12"
              href="https://github.com/tamagui/tamagui"
              target="_blank"
              rel="noreferrer"
            >
              give it a ⭐️
            </Anchor>
          </Paragraph>
        </YStack>

        <XStack>
          <Button {...linkProps}>Link to user</Button>
        </XStack>

        <SheetDemo /> */}
      </YStack>
    </ScrollView>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
