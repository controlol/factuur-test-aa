import styled from 'styled-components'

export const InfoBox = styled.div`
  margin: 0.4em;
  color: rgb(167 215 230);
  background-color: rgba(94,144,191,.15);
  padding: .5em .8em;
  border-radius: .4em;
  border: 1px solid rgb(94 144 191);
  width: 100%;
`

export const ErrorBox = styled(InfoBox)`
  color: #800a0a;
  background-color: rgba(191,94,94,.05);
  border: 1px solid rgb(173 54 54);
`