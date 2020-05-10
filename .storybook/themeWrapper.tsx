import * as React from 'react'
import MonoThemeProvider from '../src/components/MonoThemeProvider/MonoThemeProvider'

const themeDecorator = (storyFn: any) => (
  <MonoThemeProvider>{storyFn()}</MonoThemeProvider>
)

export default themeDecorator
