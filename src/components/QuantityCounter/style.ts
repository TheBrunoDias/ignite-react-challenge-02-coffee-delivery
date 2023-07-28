import styled from 'styled-components'

export const QuantityCounterContainer = styled.div`
  display: flex;
  height: 2.375rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  background: ${(props) => props.theme.colors['base-button']};
  border-radius: 0.375rem;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    color: ${(props) => props.theme.colors.purple};
  }
`
