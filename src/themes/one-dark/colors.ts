import Color from 'color'
import { convertToHex } from '../../utils'
import { generateAnsiColors } from '../../helpers/generate-ansi-colors'

export const ONE_CORE_COLORS = {
  white: Color('#ffffff'),
  light: Color('#abb2bf'),
  dark: Color('#5c6370'),
  gray: Color('#7f848e'),
  grayLight: Color('#989898'),

  orange: Color('#d19a66'),
  yellow: Color('#e5c07b'),

  red: Color('#f44747'),
  softRed: Color('#e06c75'),
  copperRed: Color('#be5046'),

  sky: Color('#56b6c2'),
  blue: Color('#61afef'),

  green: Color('#98c379'),
  violet: Color('#c678dd'),
 } as const

export const colors = convertToHex({
  ...ONE_CORE_COLORS,
  ...generateAnsiColors(ONE_CORE_COLORS),
})

export type OneCoreColors = typeof ONE_CORE_COLORS
export type OneDarkColors = typeof colors & { darkViolet?: string }
