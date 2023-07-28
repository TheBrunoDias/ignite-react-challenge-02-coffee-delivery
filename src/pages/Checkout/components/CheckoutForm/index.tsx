import Notiflix from 'notiflix'
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { CheckoutFormProps, PaymentMethod } from '../..'
import { TextField } from '../../../../components/TextField'
import { Typography } from '../../../../components/Typography'
import {
  CardHeader,
  FormCard,
  FormColumn,
  FormGrid,
  PaymentMethodLabel,
} from './style'

export function CheckoutForm() {
  const { colors } = useTheme()
  const checkoutForm = useFormContext<CheckoutFormProps>()

  const {
    register,
    reset,
    watch,
    formState: { errors },
  } = checkoutForm

  const cep = watch('cep')
  const paymentMethod = watch('paymentMethod')

  useEffect(() => {
    if (/^\d{2}\d{3}[-]\d{3}$/.test(cep)) {
      Notiflix.Loading.circle()
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((res) => {
          reset({
            cep: res.cep,
            city: res.localidade,
            neighborhood: res.bairro,
            uf: res.uf,
            complement: res.complemento,
            street: res.logradouro,
          })
        })
        .finally(() => Notiflix.Loading.remove())
    }
  }, [cep, reset])

  useEffect(() => {
    if (errors.paymentMethod?.message) {
      Notiflix.Notify.failure(errors.paymentMethod?.message)
    }
  }, [errors])

  return (
    <div>
      <FormCard>
        <CardHeader>
          <MapPin color={colors['yellow-dark']} size={22} />
          <div>
            <Typography variant="text-m" color="base-subtitle">
              Endereço de Entrega
            </Typography>
            <Typography variant="text-s" color="base-text">
              Informe o endereço onde deseja receber seu pedido
            </Typography>
          </div>
        </CardHeader>

        <FormGrid columns={12}>
          <FormColumn span={3}>
            <TextField name="cep" mask="cep" required placeholder="CEP" />
          </FormColumn>

          <FormColumn span={12}>
            <TextField name="street" required placeholder="Rua" />
          </FormColumn>

          <FormColumn span={3}>
            <TextField name="number" required placeholder="Número" />
          </FormColumn>

          <FormColumn span={9}>
            <TextField name="complement" placeholder="Complemento" />
          </FormColumn>

          <FormColumn span={3}>
            <TextField name="neighborhood" required placeholder="Bairro" />
          </FormColumn>

          <FormColumn span={7}>
            <TextField name="city" required placeholder="Cidade" />
          </FormColumn>

          <FormColumn span={2}>
            <TextField name="uf" required placeholder="UF" />
          </FormColumn>
        </FormGrid>
      </FormCard>

      <FormCard>
        <CardHeader>
          <CurrencyDollar color={colors.purple} size={22} />
          <div>
            <Typography variant="text-m" color="base-subtitle">
              Pagamento
            </Typography>
            <Typography variant="text-s" color="base-text">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Typography>
          </div>
        </CardHeader>

        <FormGrid columns={3}>
          <FormColumn span={1}>
            <PaymentMethodLabel
              selected={paymentMethod === PaymentMethod.CREDIT_CARD}
              htmlFor={PaymentMethod.CREDIT_CARD}
            >
              <input
                type="radio"
                value={PaymentMethod.CREDIT_CARD}
                id={PaymentMethod.CREDIT_CARD}
                {...register('paymentMethod')}
              />
              <CreditCard color={colors.purple} />
              <Typography variant="button-m">
                {PaymentMethod.CREDIT_CARD}
              </Typography>
            </PaymentMethodLabel>
          </FormColumn>

          <FormColumn span={1}>
            <PaymentMethodLabel
              selected={paymentMethod === PaymentMethod.DEBIT_CARD}
              htmlFor={PaymentMethod.DEBIT_CARD}
            >
              <input
                type="radio"
                value={PaymentMethod.DEBIT_CARD}
                id={PaymentMethod.DEBIT_CARD}
                {...register('paymentMethod')}
              />
              <Bank color={colors.purple} />
              <Typography variant="button-m">
                {PaymentMethod.DEBIT_CARD}
              </Typography>
            </PaymentMethodLabel>
          </FormColumn>

          <FormColumn span={1}>
            <PaymentMethodLabel
              selected={paymentMethod === PaymentMethod.MONEY}
              htmlFor={PaymentMethod.MONEY}
            >
              <input
                type="radio"
                value={PaymentMethod.MONEY}
                id={PaymentMethod.MONEY}
                {...register('paymentMethod')}
              />
              <Money color={colors.purple} />
              <Typography variant="button-m">{PaymentMethod.MONEY}</Typography>
            </PaymentMethodLabel>
          </FormColumn>
        </FormGrid>
      </FormCard>
    </div>
  )
}
