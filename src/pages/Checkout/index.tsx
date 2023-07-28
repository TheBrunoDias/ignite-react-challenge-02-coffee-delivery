import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Container } from '../../components/Container'
import { Typography } from '../../components/Typography'
import { useCart } from '../../hooks/useCart'
import { CartArea } from './components/CartArea'
import { CheckoutForm } from './components/CheckoutForm'
import { EmptyCart } from './components/EmptyCart'
import { CartContainer, CheckoutContainer, FormContainer } from './style'

export enum PaymentMethod {
  CREDIT_CARD = 'Cartão de Crédito',
  DEBIT_CARD = 'Cartão de Débito',
  MONEY = 'Dinheiro',
}

const checkoutFormSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string(),

  paymentMethod: z.nativeEnum(PaymentMethod, {
    invalid_type_error: 'Selecione um Meio de Pagamento',
  }),
})

export type CheckoutFormProps = z.infer<typeof checkoutFormSchema>

export default function Checkout() {
  const { items, clearCart } = useCart()
  const navigate = useNavigate()

  const checkoutForm = useForm<CheckoutFormProps>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
    },
  })

  function onSubmit(data: CheckoutFormProps) {
    checkoutForm.reset()
    clearCart()
    navigate('/sucesso', {
      state: {
        deliveryInfo: data,
      },
    })
  }

  return (
    <Container>
      {items.length > 0 && (
        <FormProvider {...checkoutForm}>
          <form onSubmit={checkoutForm.handleSubmit(onSubmit)}>
            <CheckoutContainer>
              <FormContainer>
                <Typography variant="title-xs" color="base-subtitle">
                  Complete seu pedido
                </Typography>
                <CheckoutForm />
              </FormContainer>

              <CartContainer>
                <Typography variant="title-xs" color="base-subtitle">
                  Cafés selecionados
                </Typography>
                <CartArea />
              </CartContainer>
            </CheckoutContainer>
          </form>
        </FormProvider>
      )}

      {items.length === 0 && <EmptyCart />}
    </Container>
  )
}
