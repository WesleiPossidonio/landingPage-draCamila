import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

interface InputStyleContainerProps {
  hasError: boolean
}

export const InputContaineStyle = styled.div<InputStyleContainerProps>`
  width: 100%;
  height: 3.155625rem;

  font-style: normal;
  font-weight: 400;
  font-size: 0.8835125rem;
  line-height: 1.3125rem;

  background: ${({ theme }) => theme.colors['base-white']};
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  border-radius: 8.07781px;
  border: 1px solid ${({ theme }) => theme.colors['base-white']};

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors['base-red']};
    `}
`

export const InputStyled = styled.input`
  width: 100%;
  height: 100%;

  background: none;
  border: none;

  font-size: ${({ theme }) => theme.FontSizes['text-regular-s']};
  line-height: 1.3125rem;
  font-style: normal;
  font-weight: 400;
  padding: 0.5rem;

  color: ${({ theme }) => theme.colors['base-black']};
`
