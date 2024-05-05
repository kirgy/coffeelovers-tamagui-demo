import { Button, Sheet, Stack, XStack, YStack, Paragraph, Anchor } from '@my/ui'
import { Menu } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { ChevronRight, PanelBottomClose } from '@tamagui/lucide-icons'

const navs = [
  { name: 'Home', link: '/' },
  { name: 'About', link: 'https://mckirgan.com' },
]

export const NavDrawer = () => {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)

  return (
    <Stack w={800} maw="100%" als="center" ai="flex-end" zi={1}>
      <Button
        size="$6"
        icon={Menu}
        circular
        br="$4"
        m="$4"
        // @ts-ignore
        pos="fixed"
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[30]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <YStack gap="$2" w={800} maw="100%" pos="relative">
            <Button
              size="$4"
              icon={PanelBottomClose}
              circular
              br="$4"
              mt="$4"
              // @ts-ignore
              pos="absolute"
              top={'-100%'}
              r={0}
              onPress={() => setOpen((x) => !x)}
            />
            {navs.map(({ name, link }, index) => (
              <Anchor
                key={index}
                href={link}
                fontStyle="unset"
                target={link[0] !== '/' ? '_new' : undefined}
              >
                <Stack
                  backgroundColor="$gray10"
                  px="$4"
                  br="$2"
                  hoverStyle={{
                    backgroundColor: '$gray8',
                  }}
                >
                  <XStack ai="center" gap="$1">
                    <ChevronRight mr="$2" />
                    <Paragraph size="$8">{name}</Paragraph>
                  </XStack>
                </Stack>
              </Anchor>
            ))}
          </YStack>
        </Sheet.Frame>
      </Sheet>
    </Stack>
  )
}
