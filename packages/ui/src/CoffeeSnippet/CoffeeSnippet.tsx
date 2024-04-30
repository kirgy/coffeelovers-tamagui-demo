import { H2, Stack, Image, Paragraph } from '@my/ui';
import { styled } from 'tamagui';

type CoffeeSnippetComponentProps = {
  imageUri: string
}

const CoffeeSnippetComponent = ({
  imageUri
}: CoffeeSnippetComponentProps) => {
  return (
    <Stack>
      <H2>Coffee Snippet</H2>
      <Image
          source={{
            uri: imageUri,
            height: 400,
          }}
        />
      <Paragraph>
        This is a paragraph about coffee.
      </Paragraph>
    </Stack>
  );
};

export const CoffeeSnippet = styled(CoffeeSnippetComponent, {
  name: 'CoffeeSnippet',
  variants: {
    voted: {
      good: {
        backgroundColor: 'green',
      },
      bad: {
        backgroundColor: 'red',
      },
    },
  } as const,
})


export default CoffeeSnippet;