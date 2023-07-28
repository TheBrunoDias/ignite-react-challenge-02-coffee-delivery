import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Typography } from '../../../../components/Typography'
import { HeroContainer, IconContainer } from './style'
import imageHero from '../../../../assets/home-hero.png'
import { useTheme } from 'styled-components'
import { Container } from '../../../../components/Container'

export function HomeHero() {
  const { colors } = useTheme()

  return (
    <HeroContainer>
      <Container className="container">
        <section className="title-area">
          <Typography as="h1" variant="title-xl" color="base-title">
            Encontre o café perfeito para qualquer hora do dia
          </Typography>

          <Typography as="p" variant="text-l" color="base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Typography>
        </section>

        <div className="image-area">
          <img
            src={imageHero}
            alt="Copo da Coffee Delivery com fundo amarelo e grãos de café ao redor"
          />
        </div>

        <section className="features-area">
          <div>
            <IconContainer bgColor={colors['yellow-dark']}>
              <ShoppingCart weight="fill" size={16} />
            </IconContainer>
            <Typography as="p" variant="text-m" color="base-text">
              Compra simples e segura
            </Typography>
          </div>

          <div>
            <IconContainer bgColor={colors['base-text']}>
              <Package weight="fill" size={16} />
            </IconContainer>
            <Typography as="p" variant="text-m" color="base-text">
              Embalagem mantém o café intacto
            </Typography>
          </div>

          <div>
            <IconContainer bgColor={colors.yellow}>
              <Timer weight="fill" size={16} />
            </IconContainer>
            <Typography as="p" variant="text-m" color="base-text">
              Entrega rápida e rastreada
            </Typography>
          </div>

          <div>
            <IconContainer bgColor={colors.purple}>
              <Coffee weight="fill" size={16} />
            </IconContainer>
            <Typography as="p" variant="text-m" color="base-text">
              O café chega fresquinho até você
            </Typography>
          </div>
        </section>
      </Container>
    </HeroContainer>
  )
}
