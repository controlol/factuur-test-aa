import { Component } from 'react'

import { ChooseButton, ClientCardContainer } from './styled/clients'
import { ProductCardLabel, ProductCardValue } from './styled/products'

class ProductCard extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const v = this.props.product

    return (
      <ClientCardContainer>
        <ProductCardLabel> Product nummer </ProductCardLabel>
        <ProductCardValue> { v.id } </ProductCardValue>
        
        <ProductCardLabel> Product titel </ProductCardLabel>
        <ProductCardValue> { v.title } </ProductCardValue>
        
        <ProductCardLabel> Aantal </ProductCardLabel>
        <ProductCardValue> { v.amount } </ProductCardValue>
        
        <ProductCardLabel> Prijs per product </ProductCardLabel>
        <ProductCardValue> { v.pricePerUnit.toString().replace(".", ",") } </ProductCardValue>
        
        <ProductCardLabel> Totaal prijs </ProductCardLabel>
        <ProductCardValue> { v.totalPrice.toString().replace(".", ",") } </ProductCardValue>

        <ChooseButton onClick={this.props.removeProduct}> Verwijder </ChooseButton>
      </ClientCardContainer>
    )
  }
}

export default ProductCard