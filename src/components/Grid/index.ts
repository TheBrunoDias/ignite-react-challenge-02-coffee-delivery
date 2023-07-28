import { styled } from 'styled-components'

interface IGrid {
  columns: number
}

interface IColumn {
  span: number
}

export const Grid = styled.div<IGrid>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
`

export const Column = styled.div<IColumn>`
  grid-column: span ${(props) => props.span};
`
