import Color from 'color'

const input = '#D2AE6B'
const color = Color(input)

const modifications = color // Apply modifications here

const output = modifications.hex()
if (output === '#C8B072') {
  console.log('✅ Output is as expected')
} else {
  console.error('❌ Output is not as expected. Received:', output)
}
