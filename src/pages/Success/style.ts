import styled, { DefaultTheme } from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 8rem;

  section {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 6.375rem;

    img {
      flex: 1;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const OrderInfoContainer = styled.div`
  flex: 1;
  border-radius: 6px 36px;
  background: linear-gradient(to right bottom, #dbac2c, #8047f8);
  background-clip: padding-box;
  padding: 1px;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 6px 36px;
    background: ${(props) => props.theme.colors['base-background']};
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 2.5rem;
    gap: 2rem;

    & > div {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.75rem;
    }
  }
`

interface IconContainerProps {
  bgColor: keyof DefaultTheme['colors']
}

export const IconContainer = styled.div<IconContainerProps>`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: ${(props) => props.theme.colors[props.bgColor]};
`
