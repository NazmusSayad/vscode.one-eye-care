import Color from 'color'

const cases: { input: string; expected: string }[] = [
  {
    input: '#D2AE6B',
    expected: '#C8B072',
  },
  {
    input: '#C18A57',
    expected: '#B38D5D',
  },
  {
    input: '#B469CA',
    expected: '#A66DC6',
  },
]

cases.forEach(({ input, expected }) => {
  const color = Color(input)
  const outputHex = getFadedColor(color).hex()

  if (outputHex === expected) {
    console.log('✅ Output is as expected')
  } else {
    console.error(
      '❌ Output is not as expected.',
      'Expected:',
      expected,
      'Received:',
      outputHex
    )
  }
})

// TODO: Implement the faded color calculation
function getFadedColor(color: Color) {
  return color
}
