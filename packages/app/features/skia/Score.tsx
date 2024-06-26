import React, { useCallback, useRef, useState } from 'react'
import {
  Canvas,
  Circle,
  Easing,
  Group,
  Paint,
  Path,
  Skia,
  SweepGradient,
  useComputedValue,
  useTiming,
  vec,
} from '@shopify/react-native-skia'
import { Input, Label, YStack, useWindowDimensions, XStack, Button, Separator } from '@my/ui'

const Score = () => {
  const [scores, setScores] = useState<{ from: number; to: number }>({ from: 0, to: 100 })
  const [inputValues, setInputValues] = useState({
    from: String(scores.from),
    to: String(scores.to),
  })

  const onChangeValues = useCallback(() => {
    const from = Number(inputValues.from)
    const to = Number(inputValues.to)
    console.log({ from, to })
    if (!isFinite(from) || !isFinite(to)) return

    setScores({
      from,
      to,
    })
  }, [inputValues, setScores])

  const progress = useTiming(
    {
      from: scores.from,
      to: scores.to,
      loop: true,
      yoyo: true,
    },
    {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    }
  )

  const rotation = useComputedValue(() => {
    return [{ rotate: Math.PI * (progress.current / 100) }] // Convert percentage to radians
  }, [progress])

  const { width: canvasWidth, height: canvasHeight } = useWindowDimensions()
  const strokeWidth = 10

  const width = canvasWidth - strokeWidth
  const height = canvasHeight + strokeWidth
  const r = width * 0.33
  const center = {
    x: width / 2,
    y: height / 2,
  }
  const drawWidth = width - strokeWidth
  const segmentCanvasWidth = width - strokeWidth
  const percent = 50

  const gap = 3
  const segments = ['red', 'orange', 'lightgreen', 'green']

  const paths = segments.map((segment, index) => {
    const isFirst = index === 0
    const isLast = index === segments.length - 1
    const start = 45 * index + gap

    const startDegrees =
      180 + (isFirst ? 0 : isLast ? start + gap / 2 : start - gap + gap * index * 0.5)
    const lengthDegrees = isFirst ? 45 - gap * 1.5 : isLast ? 45 - gap * 1.5 : 45 - gap * 1.5

    console.log(index, startDegrees, lengthDegrees)
    const path = Skia.Path.Make()
    path.moveTo(0, width / 5)
    path.addArc(
      {
        x: strokeWidth / 2,
        y: strokeWidth / 2,
        width: segmentCanvasWidth,
        height: drawWidth,
      },
      startDegrees,
      lengthDegrees
    )
    return { color: segment, path }
  })

  return (
    <>
      <YStack gap="$4" px="$4">
        <XStack gap="$3" flex={1} ai="center">
          <Label flex={1}>From</Label>
          <Input
            size="$2"
            flex={5}
            onChangeText={(text) => setInputValues({ from: text, to: inputValues.to })}
            defaultValue={String(scores.from)}
          />
        </XStack>
        <XStack gap="$3" flex={1} ai="center">
          <Label flex={1}>To</Label>
          <Input
            size="$2"
            flex={5}
            onChangeText={(text) => setInputValues({ from: inputValues.from, to: text })}
            defaultValue={String(scores.to)}
          />
        </XStack>
        <Button onPress={onChangeValues} size="$4" flex={1} variant="outlined">
          Change
        </Button>
        <Separator borderColor="$gray10Light" />
      </YStack>
      <Canvas
        style={{ width: canvasWidth, height: canvasHeight, flex: 1, backgroundColor: 'none' }}
      >
        <Group
          blendMode="multiply"
          transform={[
            { translateX: strokeWidth / 2 },
            {
              translateY: strokeWidth,
            },
          ]}
        >
          <Group blendMode="multiply" origin={{ x: width / 2, y: width / 2 }}>
            {paths.map((segment, index) => {
              return (
                <Path key={index} path={segment.path} color="transparent">
                  <Paint style="stroke" strokeWidth={strokeWidth} strokeCap="round">
                    <SweepGradient
                      c={vec(width / 2, width / 2 + strokeWidth)}
                      colors={[segment.color, segment.color]}
                      start={180}
                      end={180 + 180 * percent}
                    />
                  </Paint>
                </Path>
              )
            })}
          </Group>

          <Group blendMode="multiply" transform={rotation} origin={{ x: width / 2, y: width / 2 }}>
            <Circle
              cx={center.x}
              cy={width / 2}
              r={width / 2}
              color="transparent"
              c={center}
            ></Circle>
            <Group blendMode="clear">
              <Circle
                cx={10 - strokeWidth / 2}
                cy={width / 2}
                r={strokeWidth}
                color="#ffffff"
                c={center}
                origin={{ x: 0, y: 0 }}
              />
            </Group>
            <Circle
              cx={10 - strokeWidth / 2}
              cy={width / 2}
              r={strokeWidth}
              color="green"
              strokeWidth={strokeWidth / 2}
              strokeCap="round"
              style="stroke"
              origin={{ x: 0, y: 0 }}
              c={center}
            />
          </Group>
        </Group>
      </Canvas>
    </>
  )
}

export default Score
