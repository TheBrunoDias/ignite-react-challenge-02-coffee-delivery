import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Typography } from '../../components/Typography'
import { CheckoutFormProps } from '../Checkout'
import {
  IconContainer,
  OrderInfoContainer,
  SuccessContainer,
  TitleContainer,
} from './style'

import { useLocation } from 'react-router-dom'
import delivery from '../../assets/delivery.svg'
import { Container } from '../../components/Container'

interface SuccessStateProps {
  deliveryInfo: CheckoutFormProps
}

export default function Success() {
  const { colors } = useTheme()
  const { deliveryInfo } = (useLocation().state as SuccessStateProps) ?? {}

  if (!deliveryInfo) {
    location.replace('/')
    return null
  }

  return (
    <Container>
      <SuccessContainer>
        <TitleContainer>
          <Typography variant="title-l" color="yellow-dark">
            Uhu! Pedido confirmado
          </Typography>
          <Typography variant="text-l" color="base-subtitle">
            Agora é só aguardar que logo o café chegará até você
          </Typography>
        </TitleContainer>
        <section>
          <OrderInfoContainer>
            <div className="content">
              <div>
                <IconContainer bgColor="purple" className="icon-container">
                  <MapPin size={16} weight="fill" color={colors.white} />
                </IconContainer>
                <div>
                  <Typography as="p" variant="text-m">
                    Entrega em{' '}
                    <strong>
                      {deliveryInfo.street},{deliveryInfo.number}
                    </strong>
                  </Typography>
                  <Typography as="p" variant="text-m">
                    {deliveryInfo.neighborhood} - {deliveryInfo.city},{' '}
                    {deliveryInfo.uf}
                  </Typography>
                </div>
              </div>

              <div>
                <IconContainer bgColor="yellow" className="icon-container">
                  <Timer size={16} weight="fill" color={colors.white} />
                </IconContainer>
                <div>
                  <Typography as="p" variant="text-m">
                    Previsão de entrega
                  </Typography>
                  <Typography as="p" variant="text-m">
                    <strong>20 min - 30 min</strong>
                  </Typography>
                </div>
              </div>

              <div>
                <IconContainer bgColor="yellow-dark" className="icon-container">
                  <CurrencyDollar
                    size={16}
                    weight="fill"
                    color={colors.white}
                  />
                </IconContainer>
                <div>
                  <Typography as="p" variant="text-m">
                    Pagamento na entrega
                  </Typography>
                  <Typography as="p" variant="text-m">
                    <strong>{deliveryInfo.paymentMethod}</strong>
                  </Typography>
                </div>
              </div>
            </div>
          </OrderInfoContainer>
          <img src={delivery} alt="" />
        </section>
      </SuccessContainer>
    </Container>
  )
}
