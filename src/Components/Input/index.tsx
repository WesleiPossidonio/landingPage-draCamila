import { forwardRef, InputHTMLAttributes } from 'react'

import { InputContaineStyle, InputStyled, InputWrapper } from './style'
import { TextRegular } from '../typograph'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <InputWrapper>
        <InputContaineStyle hasError={!!error}>
          <InputStyled ref={ref} {...props} />
        </InputContaineStyle>
        {error && (
          <TextRegular size="s" color="red">
            {error}
          </TextRegular>
        )}
      </InputWrapper>
    )
  },
)
