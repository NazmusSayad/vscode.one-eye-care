export const config = {
  themeNamePrefix: 'One Eye Care -',
}

export default {
  icon: 'icon.png',
  name: 'one-eye-care',
  displayName: 'One EyeCare Theme (OneDark)',
  publisher: 'NazmusSayad',

  description:
    'A dark theme for Visual Studio Code inspired by the Atom One Dark theme. This theme is designed to be easy on the eyes and focuses on the syntax highlighting of the code. This theme will help you to focus on the code and reduce the eye strain.',

  engines: {
    vscode: '^1.50.0',
  },

  categories: ['Themes'],
  contributes: {
    themes: [] as {
      label: string
      uiTheme: string
      path: string
    }[],
  },
  repository: {
    type: 'git',
    url: 'https://github.com/NazmusSayad/vscode.one-eye-care.git',
  },

  keywords: [
    'theme',
    'dark',
    'atom',
    'one dark',
    'syntax',
    'highlighting',
    'eye strain',
    'easy on eyes',
    'minimal',
    'minimalistic',
    'code',
    'editor',
    'vscode',
    'visual studio code',
    'onokicu',
    'nazmus sayad',
  ],
}
