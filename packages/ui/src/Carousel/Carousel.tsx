import  { useCallback } from 'react'
import {FlatList  } from 'react-native'
import { Stack, useWindowDimensions } from '@my/ui'

type CarouselProps = {
  items: Array<React.ReactNode>
  shouldSnap?: boolean
  initialFocusIndex?: number
  itemsOnScreen?: number
  containerWidth?: number
  scalePoint?: number
  paddingX?: number
}

const CAROUSEL_FRICTION = 0.91

const getSnapToOffsets = (
  count: number,
  centeringOffset: number,
  itemWidth: number,
  paddingX: number = 0
): Array<number> => {
  return Array(count - 1)
    .fill(0)
    .map((_, index) => itemWidth * (index + 1) - centeringOffset + paddingX)
}

export const Carousel = ({
  items,
  shouldSnap = true,
  initialFocusIndex = 0,
  itemsOnScreen = 1,
  scalePoint = 0.9,
  paddingX,
}: CarouselProps): JSX.Element => {
  // the item to set the inital focus to
  if (initialFocusIndex > items.length) {
    initialFocusIndex = items.length
  }
const { width: containerWidth} = useWindowDimensions()

  const carouselPaddingX = 2 * 4

  const determinedPaddingX = paddingX !== undefined ? paddingX : carouselPaddingX

  const scaledItemFactor = scalePoint / itemsOnScreen
  const itemWidth = containerWidth * scaledItemFactor
  const marginWidth = containerWidth - itemWidth

  const centeringOffset =
    itemsOnScreen % 2 === 0 ? marginWidth / 2 + itemWidth / 2 : marginWidth / 2

  const initialOffset =
    initialFocusIndex === 0
      ? 0 - determinedPaddingX
      : itemWidth * initialFocusIndex - centeringOffset

  type RenderItemProps = {
    item: React.ReactNode
    index: number
  }

  const renderItem = useCallback(
    (renderProps: RenderItemProps) => {
      return (
        // <TouchableOpacity key={renderProps.index} style={{}}>
          <Stack
            f={1}
            p={8}
            width={
              renderProps.index === 0 || renderProps.index === items.length - 1
                ? itemWidth + determinedPaddingX
                : itemWidth
            }
          >
            <Stack
              px={1}
              ml={renderProps.index === 0 ? Math.floor(determinedPaddingX) : undefined}
              mr={
                renderProps.index === items.length - 1 ? Math.floor(determinedPaddingX) : undefined
              }
            >
              {renderProps.item}
            </Stack>
          </Stack>
        // </TouchableOpacity>
      )
    },
    [determinedPaddingX, itemWidth, items]
  )

  return (
    <FlatList
    data={items}
      initialNumToRender={3}
      renderItem={renderItem}
      horizontal={true}
      snapToInterval={shouldSnap ? itemWidth : undefined}
      snapToAlignment={shouldSnap ? 'start' : undefined}
      snapToOffsets={
        shouldSnap
          ? getSnapToOffsets(items.length, centeringOffset, itemWidth, determinedPaddingX)
          : undefined
      }
      showsHorizontalScrollIndicator={false}
      contentOffset={{ x: initialOffset, y: 0 }}
      decelerationRate={CAROUSEL_FRICTION}
      style={{
        width: containerWidth,
      }}
    />
  )
}
