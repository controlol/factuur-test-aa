import styled from 'styled-components'
import { Input, Label } from '../../styled/form'

export const InvoiceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 1em;
  background-color: var(--light-grey);
  border-radius: 1em;
  margin: 1em;
  padding: 3em;
  flex-wrap: wrap;

  @media only screen and (max-width: 800px) {
    padding: 1em;
    margin: .5em;
  }
`

export const ClientContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export const ClientForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: .5em;
  align-items: center;
  background-color: var(--off-white);
  padding: 1.5em;
  max-width: 30em;
  box-shadow: inset -.1em -.1em .4em -.2em rgba(0,0,0,.6);
`

export const ClientCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: .5em;
  align-items: center;
  background-color: var(--off-white);
  padding: 1.5em;
  max-width: 30em;
  box-shadow: inset -.1em -.1em .4em -.2em rgba(0,0,0,.6);
  border-radius: .75em;
  position: relative;
`

export const ClientInput = styled(Input)`
  flex: 1 1 20em;
`

export const ClientLabel = styled(Label)`
  flex: 0 1 7em;
  margin-right: 0;
`

export const ClientCardLabel = styled.h3`
  flex: 0 1 7em;
`

export const ClientCardValue = styled.p`
  flex: 0 1 17em;
`

export const ChooseButton = styled.div`
  position: absolute;
  cursor: pointer;
  top: .6em;
  right: .6em;
  background-color: var(--light-grey);
  border-radius: .2em;
  padding: .3em;
  width: 5em;

  &:hover {
    transform: translateY(-.1em);
    box-shadow: 0 .1em .3em rgba(0,0,0,.25);
  }
`

export const RemoveButton = styled(ChooseButton)`
  top: 3em;
`