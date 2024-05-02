import { H2, Stack, Image, Paragraph } from '@my/ui'
import { Button, H3, styled } from 'tamagui'

type CoffeeSnippetComponentProps = {
  imageUri: string
  name: string
}

export const CoffeeSnippet = ({ imageUri, name }: CoffeeSnippetComponentProps) => {
  return (
    <Stack bw="$1" br="$4">
      <Stack p="$2" px="$4">
        <H3>{name}</H3>
      </Stack>
      <Image
        source={{
          uri: imageUri,
          height: 400,
        }}
      />
    </Stack>
  )
}

// export const CoffeeSnippet = styled(CoffeeSnippetComponent, {
//   name: 'CoffeeSnippet',
//         backgroundColor: "#ff00ff",
//         variants: {
//     voted: {
//       good: {
//         borderColor: "#ff00ff",
//       },
//       bad: {
//         borderColor: 'red',
//       },
//     },
//   } as const,
// })

export default CoffeeSnippet
