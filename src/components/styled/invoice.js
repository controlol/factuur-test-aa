import styled from 'styled-components'

export const A4Container = styled.div`
  --scale: min(calc(${window.innerWidth} / 595), calc(1000 / 595));
  width: calc(595px * var(--scale));
  height: calc(842px * var(--scale));
  margin: 1em auto;
  color: black;
  font-size: calc(1rem * var(--scale));
  padding: 1.5em;
  box-shadow: 0 0 .5em rgba(0,0,0,.3);
`

export const HeaderWrapper = styled.div`
  display: flex;
  margin: .5em 0;
  gap: 2em;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: .8em;
`

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 0 1em;
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 3em 1fr 4em 4em;
  grid-template-rows: auto 1fr;
  margin-top: 1em;
  border: 1px solid black;
  border-radius: .2em;
`

export const ProductHeader = styled.h5`
  border-right: 1px solid black;
  padding: .5em .25em .25em .25em;

  &:nth-of-type(4) {
    border-right: unset;
  }
`

export const ProductItem = styled.p`
  border-right: 1px solid black;
  padding: .1em .25em;
`