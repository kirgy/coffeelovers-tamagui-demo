import { H2, Stack, Image, Paragraph } from '@my/ui'
import { H3 } from 'tamagui'
import { Link } from 'solito/link'

type CoffeeSnippetComponentProps = {
  id: string
  imageUri: string
  name: string
}

export const CoffeeSnippet = ({ id, imageUri, name }: CoffeeSnippetComponentProps) => {
  return (
    <Link href={`/coffee/${id}`}>
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
    </Link>
  )
}

export default CoffeeSnippet
