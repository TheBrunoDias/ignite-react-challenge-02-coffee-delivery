import styled, { css } from 'styled-components'
import { Column, Grid } from '../../../../components/Grid'

export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 1rem;
  padding: 2.5rem;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;

  & > div {
    display: flex;
    flex-direction: column;
  }
`

export const FormGrid = styled(Grid)`
  margin-top: 2rem;
  width: 100%;
  gap: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FormColumn = styled(Column)`
  @media (max-width: 768px) {
    grid-column: 1;
  }
`

interface LabelProps {
  selected: boolean
}

export const PaymentMethodLabel = styled.label<LabelProps>`
  position: relative;
  width: 100%;
  display: flex;
  padding: 1rem;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  background-color: ${(props) => props.theme.colors['base-button']};
  border: 1px solid transparent;
  flex: 1;
  text-transform: uppercase;

  cursor: pointer;

  input[type='radio'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
  }

  ${(props) => {
    if (props.selected) {
      return css`
        background-color: ${props.theme.colors['purple-light']};
        border: 1px solid ${props.theme.colors.purple};

        &:hover {
          background-color: ${props.theme.colors['purple-light']};
        }
      `
    }
  }}
`
