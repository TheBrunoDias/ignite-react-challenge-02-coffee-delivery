import styled, { css } from 'styled-components'
import { Container } from '../Container'

interface IHeaderContainer {
  isScroll: boolean
}

export const HeaderContainer = styled.div<IHeaderContainer>`
  width: 100%;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  box-shadow: 0 2px 10px transparent;
  background-color: transparent;
  transition:
    box-shadow 0.3s,
    background-color 0.1s;
  padding: 2rem 0;
  ${(props) => {
    if (props.isScroll) {
      return css`
        background-color: ${(props) => props.theme.colors['base-background']};
        box-shadow: 0 2px 10px ${(props) => props.theme.colors['base-hover']};
        padding: 1rem 0;
      `
    }
  }}
`

export const HeaderInsideContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right-side {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.75rem;

    .location {
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;

      border-radius: 0.375rem;
      background: ${(props) => props.theme.colors['purple-light']};
    }

    a {
      display: flex;
      position: relative;
      padding: 0.5rem;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      border-radius: 0.375rem;
      color: ${(props) => props.theme.colors['yellow-dark']};
      background: ${(props) => props.theme.colors['yellow-light']};

      span.quantity-badge {
        display: flex;
        min-width: 1.25rem;
        aspect-ratio: 1/1;
        justify-content: center;
        align-items: center;
        border-radius: 999999px;
        background: ${(props) => props.theme.colors['yellow-dark']};

        color: ${(props) => props.theme.colors.white};
        transform: translate(50%, -50%);
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
`
