import { Theme } from '../../types'
import uiColors from '../one-dark/ui-colors'
import tokenColors from '../one-dark/token-colors'
import semanticTokenColors from '../one-dark/semantic-token-colors'
import { config } from '../../packageJson'
import { colors } from './colors'

export default {
  label: config.themeNamePrefix + ' Extreme Eye Care',
  uiTheme: 'vs-dark',

  colors: uiColors(colors),
  tokenColors: tokenColors(colors),

  semanticHighlighting: true,
  semanticTokenColors: semanticTokenColors(colors),
} as Theme.Theme
