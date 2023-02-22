// styled.d.ts
import 'styled-components';

interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string
      green: string
      text: string
      gray: string
      background: string
    }
    screens: {
      small: number
      medium: number
      large: number
    },
    maxWidth: number
  }
}
