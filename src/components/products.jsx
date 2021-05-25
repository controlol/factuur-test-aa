import { Component } from 'react'

import { ClientContainer, ClientForm, ClientInput, ClientLabel } from './styled/products'
import { Button } from '../styled/form'
import ProductCard from './productCard'
import { ErrorBox } from '../styled/general'

class Products extends Component {
  constructor() {
    super()
    this.state = {
      productForm: {
        title: "",
        amount: 1,
        pricePerUnit: ""
      },
      products: []
    }

    this.productID = 0

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = e => {
    const t = e.target,
          v = t.value,
          n = t.name

    let productForm = this.state.productForm
    productForm[n] = v
    this.setState({ productForm })
  }

  submitClient = e => {
    e.preventDefault()

    if (!this.state.productForm.title) return this.setState({ formError: "Vul product titel in" })
    if (!this.state.productForm.amount) return this.setState({ formError: "Vul het aantal in" })
    if (!this.state.productForm.pricePerUnit) return this.setState({ formError: "Vul een geldig bedrag in" })

    const pricePerUnit = parseFloat(this.state.productForm.pricePerUnit.replace(",", "."))

    let products = this.state.products
    products[this.productID] = Object.assign({}, this.state.productForm, {
      id: this.productID,
      totalPrice: pricePerUnit * this.state.productForm.amount,
      pricePerUnit
    })
    this.setState({
      products,
      productForm: {
        title: "",
        amount: 1,
        pricePerUnit: ""
      }
    })
    this.props.setProducts(products)

    this.productID++
  }

  removeProduct = id => {
    let products = this.state.products.filter(v => v.id !== id)
    this.setState({ products })
    this.props.setProducts(products)
  }

  renderProducts = () => this.state.products.map(v => <ProductCard key={v.id} product={v} removeProduct={() => this.removeProduct(v.id)} />)

  renderFormError = () => { if (this.state.formError) return <ErrorBox> { this.state.formError } </ErrorBox> }

  render() {
    return (
      <ClientContainer>
        <ClientForm onSubmit={this.submitClient}>
          { this.renderFormError() }

          <ClientLabel htmlFor="title"> Product titel </ClientLabel>
          <ClientInput name="title" id="title" type="text" placeholder="Product titel" onChange={this.handleInputChange} value={this.state.productForm.title} />

          <ClientLabel htmlFor="amount"> Aantal </ClientLabel>
          <ClientInput name="amount" id="amount" type="number" min="1" placeholder="Aantal" onChange={this.handleInputChange} value={this.state.productForm.amount} />

          <ClientLabel htmlFor="pricePerUnit"> Prijs per stuk </ClientLabel>
          <ClientInput name="pricePerUnit" id="pricePerUnit" type="text" min="0" pattern="^\d+(,|.)\d{2}$" placeholder="15,99" onChange={this.handleInputChange} value={this.state.productForm.pricePerUnit} />

          <Button> Product{ this.state.productForm.amount > 1 ? "en" : "" } toevoegen </Button>
        </ClientForm>

        { this.renderProducts() }

      </ClientContainer>
    )
  }
}

export default Products