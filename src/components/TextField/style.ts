import styled from 'styled-components'

export const TextFieldContainer = styled.div`
  position: relative;
  width: 100%;
  height: 2.625rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors['base-input']};
  display: flex;
  gap: 0.5rem;
  padding-right: 0.75rem;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  &:focus-within {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.yellow};
  }

  & > input {
    padding: 0 0.75rem;
    background: none;
    border: 0;
    flex: 1;
    height: 100%;
    color: ${(props) => props.theme.colors['base-text']};
    ${(props) => props.theme.typography['text-s']};

    &:focus {
      outline: 0;
      box-shadow: none;
    }

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }
`

export const OptionalText = styled.span`
  color: ${(props) => props.theme.colors['base-label']};
  ${(props) => props.theme.typography['text-s']};

  font-style: italic;
  cursor: text;
`
