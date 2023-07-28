import { keyframes, styled } from 'styled-components'
import bg from '../../../../assets/home-bg.png'
const fade = keyframes`
  from {
    opacity: 0;
    transform: translateY(10%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const HeroContainer = styled.article`
  background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors['base-background']},
      transparent,
      ${(props) => props.theme.colors['base-background']}
    ),
    url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  padding: 5.75rem 0;
  & > .container {
    position: relative;
    z-index: 2;
    display: grid;

    grid-gap: 1.25rem 2.5rem;
    grid-template-areas:
      'title    image '
      'features image ';

    .title-area {
      grid-area: title;

      & > h1 {
        margin-bottom: 1rem;
        opacity: 0;
        animation: ${fade} 0.5s forwards;
      }

      & > p {
        opacity: 0;
        animation: ${fade} 0.5s 0.5s forwards;
      }

      @media (max-width: 768px) {
        text-align: center;
      }
    }

    .image-area {
      grid-area: image;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        opacity: 0;
        animation: ${fade} 1s 0.5s forwards;
        @media (max-width: 768px) {
          width: 100%;
        }
      }
    }

    .features-area {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-area: features;
      grid-gap: 0.75rem;

      & > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.75rem;

        &:nth-child(1) {
          opacity: 0;
          animation: ${fade} 0.5s 1s forwards;
        }

        &:nth-child(2) {
          opacity: 0;
          animation: ${fade} 0.5s 1.2s forwards;
        }

        &:nth-child(3) {
          opacity: 0;
          animation: ${fade} 0.5s 1.4s forwards;
        }
        &:nth-child(4) {
          opacity: 0;
          animation: ${fade} 0.5s 1.6s forwards;
        }

        @media (max-width: 768px) {
          justify-content: flex-start;
        }
      }

      @media (max-width: 768px) {
        max-width: 80%;
        margin: auto;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
      }
    }

    @media (max-width: 768px) {
      grid-template-areas:
        'title'
        'image'
        'features';
    }
  }
`

interface IconContainerProps {
  bgColor: string
}

export const IconContainer = styled.span<IconContainerProps>`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.bgColor};
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99999px;
`
