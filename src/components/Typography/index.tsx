import { DefaultTheme, css, styled } from 'styled-components'

interface TypographyProps {
  weight?: 400 | 700 | 800
  variant?: keyof DefaultTheme['typography']
  color?: keyof DefaultTheme['colors']
}

export const Typography = styled.span<TypographyProps>`
  ${(props) => {
    return css`
      color: ${props.theme.colors[props.color ?? 'base-text']};
      ${props.theme.typography[props.variant ?? 'text-m']};
      ${props.weight && `font-weight: ${props.weight}`}
    `
  }};
`
