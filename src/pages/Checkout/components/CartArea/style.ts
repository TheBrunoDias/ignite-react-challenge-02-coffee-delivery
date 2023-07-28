import { styled } from 'styled-components'

export const CartAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 1rem;
  padding: 2.5rem;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 44px;
`

export const CartItemCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  & > div {
    flex: 1;
  }

  .quantity-control {
    display: flex;
    margin-top: 0.5rem;
    justify-content: center;
    align-items: stretch;
    gap: 0.5rem;
  }

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  margin-bottom: 1.5rem;
`

export const DeleteButton = styled.button`
  padding: 0px 0.5rem;
  display: flex;
  justify-content: center;
  border-radius: 6px;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  border: 0;
  background: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};
  ${(props) => props.theme.typography['button-m']};
  transition: all 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
  }
`

export const TotalContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;

  & > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  background: ${(props) => props.theme.colors.yellow};
  transition: all 0.2s;
  padding: 0.75rem 0.5rem;
  margin-top: 1.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }
`
