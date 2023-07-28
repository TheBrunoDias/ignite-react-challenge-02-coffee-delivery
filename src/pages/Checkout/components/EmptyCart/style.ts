import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 28rem;
  align-items: center;
  margin: 8rem auto;
  padding: 2.5rem;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 44px;
  text-align: center;
  gap: 0.5rem;
`

export const LinkButton = styled(Link)`
  border-radius: 6px;
  text-decoration: none;
  border: 0;
  cursor: pointer;
  background: ${(props) => props.theme.colors.purple};
  transition: all 0.2s;
  padding: 0.75rem 2rem;
  margin-top: 1.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background: ${(props) => props.theme.colors['purple-dark']};
  }
`
