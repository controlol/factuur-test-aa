import { Component } from 'react'

import { ClientCardContainer, ClientCardLabel, ClientCardValue, ChooseButton, RemoveButton } from './styled/clients'

class ClientCard extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const v = this.props.client
    return (
      <ClientCardContainer>
        <ClientCardLabel> Klant nummer </ClientCardLabel>
        <ClientCardValue> { v.id } </ClientCardValue>
        
        <ClientCardLabel> Klant naam </ClientCardLabel>
        <ClientCardValue> { v.clientName } </ClientCardValue>
        
        <ClientCardLabel> Adres </ClientCardLabel>
        <ClientCardValue> { v.address } </ClientCardValue>
        
        <ClientCardLabel> Postcode </ClientCardLabel>
        <ClientCardValue> { v.postalcode } </ClientCardValue>
        
        <ClientCardLabel> Plaats </ClientCardLabel>
        <ClientCardValue> { v.city } </ClientCardValue>

        <ChooseButton onClick={this.props.setClient}> Kies </ChooseButton>
        <RemoveButton onClick={this.props.removeClient}> Verwijder </RemoveButton>
      </ClientCardContainer>
    )
  }
}

export default ClientCard