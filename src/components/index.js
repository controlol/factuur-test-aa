import { Component, Fragment } from 'react'

import Clients from './clients'
import Products from './products'
import Invoice from './invoice'

import { InvoiceContainer } from './styled/clients'

class InvoicePage extends Component {
  constructor() {
    super()
    this.state = {
      clients: [],
      products: [],
      clientID: -1
    }
  }

  setClients = clients => this.setState({ clients })
  setClient = clientID => this.setState({ clientID })
  setProducts = products => this.setState({ products })

  renderInvoice = () => {
    const { clients, products, clientID } = this.state

    if (
      clients.length > 0 &&
      products.length > 0 &&
      clientID !== -1 &&
      clients[clientID]?.id === clientID
    ) return <Invoice client={this.state.clients[this.state.clientID]} products={this.state.products} />
  }

  render() {
    return (
      <Fragment>
        <InvoiceContainer>
          <Clients setClients={this.setClients} setClient={this.setClient} />
          <Products setProducts={this.setProducts} />
        </InvoiceContainer>

        { this.renderInvoice() }
      </Fragment>
    )
  }
}

export default InvoicePage