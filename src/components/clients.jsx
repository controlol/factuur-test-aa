import { Component } from 'react'

import { ClientContainer, ClientForm, ClientInput, ClientLabel } from './styled/clients'
import { Button } from '../styled/form'
import ClientCard from './clientCard'
import { ErrorBox } from '../styled/general'

class Clients extends Component {
  constructor() {
    super()
    this.state = {
      clientForm: {
        clientName: "",
        address: "",
        postalcode: "",
        city: "",
      },
      clients: []
    }

    this.clientID = 0

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = e => {
    const t = e.target,
          v = t.value,
          n = t.name

    let clientForm = this.state.clientForm
    clientForm[n] = v
    this.setState({ clientForm })
  }
  
  submitClient = e => {
    e.preventDefault()
    
    if (!this.state.clientForm.clientName) return this.setState({ formError: "Vul klant naam in" })
    if (!this.state.clientForm.address) return this.setState({ formError: "Vul straat + huisnummer in" })
    if (!this.state.clientForm.postalcode) return this.setState({ formError: "Vul postcode in" })
    if (!this.state.clientForm.city) return this.setState({ formError: "Vul plaats in" })
    
    let clients = this.state.clients
    clients[this.clientID] = Object.assign({}, this.state.clientForm, { id: this.clientID })
    this.setState({
      clients,
      clientForm: {
        clientName: "",
        address: "",
        postalcode: "",
        city: "",
      }
    })
    this.props.setClients(clients)

    this.clientID++
  }

  removeClient = id => {
    let clients = this.state.clients.filter(v => v.id !== id)
    this.setState({ clients })
    this.props.setClients(clients)
  }

  renderClients = () => this.state.clients.map(v => <ClientCard key={v.id} client={v} setClient={() => this.props.setClient(v.id)} removeClient={() => this.removeClient(v.id)} />)

  renderFormError = () => { if (this.state.formError) return <ErrorBox> { this.state.formError } </ErrorBox> }

  render() {
    return (
      <ClientContainer>
        <ClientForm onSubmit={this.submitClient}>
          { this.renderFormError() }

          <ClientLabel htmlFor="clientName"> Klant naam </ClientLabel>
          <ClientInput name="clientName" id="clientName" type="text" placeholder="Klant naam" onChange={this.handleInputChange} value={this.state.clientForm.clientName} />

          <ClientLabel htmlFor="address"> Straat </ClientLabel>
          <ClientInput name="address" id="address" type="text" placeholder="Straat" onChange={this.handleInputChange} value={this.state.clientForm.address} />

          <ClientLabel htmlFor="postalcode"> Postcode </ClientLabel>
          <ClientInput name="postalcode" id="postalcode" type="text" placeholder="Postcode" onChange={this.handleInputChange} value={this.state.clientForm.postalcode} />

          <ClientLabel htmlFor="city"> Plaats </ClientLabel>
          <ClientInput name="city" id="city" type="text" placeholder="Plaats" onChange={this.handleInputChange} value={this.state.clientForm.city} />

          <Button> Klant toevoegen </Button>
        </ClientForm>

        { this.renderClients() }
      </ClientContainer>
    )
  }
}

export default Clients