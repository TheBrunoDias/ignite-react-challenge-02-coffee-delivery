import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-radius: 0.375rem 2.25rem;
  background: ${(props) => props.theme.colors['base-card']};
  padding: 1.25rem 1.5rem;
  transition: all 0.5s;
  text-align: center;
  border: 1px solid transparent;
  box-shadow: 0 0px 10px transparent;

  img {
    object-fit: contain;
    width: 7.5rem;
    height: 7.5rem;
    margin-top: calc(0px - 2.5rem);
  }

  & > strong {
    margin-bottom: 0.5rem;
  }

  footer {
    margin-top: 2rem;
    width: 100%;
    gap: 1.45rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .price-container {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: baseline;
      gap: 0.25rem;
    }

    .cart-container {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      align-items: center;
      gap: 0.5rem;
    }
  }

  &:hover {
    transform: translateY(-1rem);
    border: 1px solid ${(props) => props.theme.colors['base-hover']};
    box-shadow: 0 0px 10px ${(props) => props.theme.colors['base-hover']};
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem 0;

  .category-tag {
    padding: 0.25rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6.25rem;
    background: ${(props) => props.theme.colors['yellow-light']};
    text-transform: uppercase;
  }
`
const DefaultButton = styled.button`
  display: flex;
  position: relative;
  padding: 0.5rem;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.375rem;
  cursor: pointer;
  border: 0;

  color: ${(props) => props.theme.colors.white};
  transition: 0.1s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const CartButton = styled(DefaultButton)`
  background-color: ${(props) => props.theme.colors['purple-dark']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors.purple};
  }
`

export const DeleteButton = styled(DefaultButton)`
  background-color: ${(props) => props.theme.colors['base-title']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors['base-subtitle']};
  }
`
