import { OneCoreColors } from '../themes/one-dark/colors'

export function generateAnsiColors(input: OneCoreColors) {
  const coreAnsi = {
    ansiForeground: input.light,
    ansiWhite: input.white.darken(0.2),
    ansiBlack: input.dark.darken(0.2),
    ansiRed: input.softRed.saturate(0.25),
    ansiYellow: input.orange.darken(0.15).desaturate(0.25),
    ansiBlue: input.blue,
    ansiCyan: input.sky,
    ansiMagenta: input.violet,
    ansiGreen: input.green.saturate(0.1),
  } as const

  return {
    ...coreAnsi,

    ansiWhiteBright: coreAnsi.ansiWhite.lighten(0.25),
    ansiBlackBright: coreAnsi.ansiBlack.lighten(0.35).saturate(0.2),
    ansiRedBright: coreAnsi.ansiRed.lighten(0.15).saturate(0.2),
    ansiYellowBright: coreAnsi.ansiYellow.lighten(0.25).saturate(0.2),
    ansiBlueBright: coreAnsi.ansiBlue.lighten(0.2).saturate(0.25),
    ansiCyanBright: coreAnsi.ansiCyan.lighten(0.25).saturate(0.2),
    ansiMagentaBright: coreAnsi.ansiMagenta.lighten(0.2).saturate(0.2),
    ansiGreenBright: coreAnsi.ansiGreen.lighten(0.25),
  } as const
}
