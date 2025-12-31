import Color from 'color'
import { convertToHex } from '../../utils'
import { ONE_CORE_COLORS, OneCoreColors } from '../one-dark/colors'
import { generateAnsiColors } from '../../helpers/generate-ansi-colors'

type EyeCareColors = OneCoreColors & {
  darkViolet: Color
}

const coreColors: EyeCareColors = {
  ...ONE_CORE_COLORS,

  orange: ONE_CORE_COLORS.orange.darken(0.1).desaturate(0.15),
  yellow: ONE_CORE_COLORS.yellow.darken(0.1).desaturate(0.2),
  softRed: ONE_CORE_COLORS.softRed.darken(0.05).desaturate(0.15),

  sky: ONE_CORE_COLORS.sky.darken(0.1),
  blue: ONE_CORE_COLORS.blue.darken(0.1).desaturate(0.25),

  green: ONE_CORE_COLORS.green.darken(0.1).desaturate(0.25),
  violet: ONE_CORE_COLORS.violet.darken(0.1).desaturate(0.2),
  darkViolet: Color('#8C569E').whiten(0.1),
}

export const colors = convertToHex({
  ...coreColors,
  ...generateAnsiColors(coreColors),
})
