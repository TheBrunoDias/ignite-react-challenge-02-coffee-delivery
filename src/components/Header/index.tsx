import { MapPin, ShoppingCart } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'
import logo from '../../assets/coffee-delivery-logo.svg'
import { useCart } from '../../hooks/useCart'
import { Typography } from '../Typography'
import { HeaderContainer, HeaderInsideContainer } from './style'

export function Header() {
  const [isScroll, setIsScroll] = useState(false)
  const { quantity } = useCart()
  const { colors } = useTheme()

  useEffect(() => {
    const event = () => {
      if (window.scrollY > 80) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }
    document.addEventListener('scroll', event)

    return () => document.removeEventListener('scroll', event)
  }, [])

  return (
    <HeaderContainer isScroll={isScroll}>
      <HeaderInsideContainer>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>

        <div className="right-side">
          <div className="location">
            <MapPin size={22} weight="fill" color={colors.purple} />
            <Typography variant="text-s" color="purple-dark">
              São José dos Pinhais, PR
            </Typography>
          </div>
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            <Typography
              variant="text-s"
              weight={700}
              className="quantity-badge"
            >
              {quantity}
            </Typography>
          </NavLink>
        </div>
      </HeaderInsideContainer>
    </HeaderContainer>
  )
}
