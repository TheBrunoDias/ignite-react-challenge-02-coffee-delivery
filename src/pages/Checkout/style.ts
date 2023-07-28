import { styled } from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const FormContainer = styled.section`
  flex: 1;

  @media (max-width: 768px) {
    flex: 1;
  }
`

export const CartContainer = styled.section`
  max-width: 28rem;
  flex: 1;
`
