import { ThemeProvider, createTheme } from '@mui/material';
import { withThemesProvider } from 'themeprovider-storybook'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'white',
    values: [
      { name: '--color-background', value: 'var(--color-background)' },
      { name: 'white', value: 'white' },
    ],
  },
}

const theme = createTheme({})

const uiThemePrimary = {
  name: "primary",
}

const uiThemeSecondary = {
  ...uiThemePrimary,
  name: "secondary",
}

const themes = [uiThemePrimary, uiThemeSecondary]

export const decorators = [
  withThemesProvider(themes),
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
