import { useCallback } from 'react'
import { masks } from '../../utils/masks'
import { OptionalText, TextFieldContainer } from './style'
import { useFormContext } from 'react-hook-form'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
  mask?: 'cnpj' | 'cpf' | 'cell' | 'cep' | 'date' | 'currency'
}

export function TextField({ name, mask, ...props }: InputProps) {
  const { register, setFocus } = useFormContext()

  const handleMask = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask) return masks[mask](e)
    },
    [mask],
  )

  return (
    <TextFieldContainer onClick={() => setFocus(name)}>
      <input {...props} {...register(name)} onKeyUp={handleMask} />
      {!props.required && <OptionalText>Opcional</OptionalText>}
    </TextFieldContainer>
  )
}
