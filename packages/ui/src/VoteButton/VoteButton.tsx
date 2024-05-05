import { getSize, getSpace } from '@tamagui/get-token'
import {
  GetProps,
  SizeTokens,
  View,
  Text,
  createStyledContext,
  styled,
  useTheme,
  withStaticProperties,
} from '@tamagui/web'
import { cloneElement, useContext } from 'react'

export const VoteButtonContext = createStyledContext({
  size: '$md' as SizeTokens,
})

export const VoteButtonFrame = styled(View, {
  name: 'VoteButtonFrame',
  context: VoteButtonContext,
  backgroundColor: '$yellow10',
  alignItems: 'center',
  flexDirection: 'row',
  jc: 'center',
  borderRadius: '$2',

  hoverStyle: {
    backgroundColor: '$yellow8',
  },

  pressStyle: {
    backgroundColor: '$backgroundPress',
  },

  variants: {
    size: {
      '...size': (name, { tokens }) => {
        return {
          height: tokens.size[name],
          borderRadius: tokens.radius[name],
          // note the getSpace and getSize helpers will let you shift down/up token sizes
          // whereas with gap we just multiply by 0.2
          // this is a stylistic choice, and depends on your design system values
          gap: tokens.space[name].val * 0.2,
          paddingHorizontal: getSpace(name, {
            shift: -1,
          }),
        }
      },
    },
  } as const,

  defaultVariants: {
    size: '$4',
  },
})

type VoteButtonProps = GetProps<typeof VoteButtonFrame>

export const VoteButtonText = styled(Text, {
  name: 'VoteButtonText',
  context: VoteButtonContext,
  color: '$color.gray1Dark',
  userSelect: 'none',
  fontSize: '$6',

  variants: {
    size: {
      '...fontSize': (name, { font }) => ({
        fontSize: font?.size[name],
      }),
    },
  } as const,
})

const ButtonIcon = (props: { children: any }) => {
  const { size } = useContext(VoteButtonContext.context)
  const smaller = getSize(size, {
    shift: -2,
  })
  const theme = useTheme()
  return cloneElement(props.children, {
    size: smaller.val * 0.5,
    color: theme.gray1Dark,
  })
}

export const VoteButton = withStaticProperties(VoteButtonFrame, {
  Props: VoteButtonContext.Provider,
  Text: VoteButtonText,
  Icon: ButtonIcon,
})
