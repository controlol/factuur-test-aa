import { Component, createRef, Fragment } from 'react'

import { A4Container, InfoContainer, InfoWrapper, HeaderWrapper, ProductContainer, ProductHeader, ProductItem } from './styled/invoice'

class Invoice extends Component {
  constructor() {
    super()
    this.state = {
      subtotal: 0,
      
    }

    this.A4Ref = createRef()
    this.headerRef = createRef()
    this.infoRef = createRef()
  }

  componentDidMount = () => this.calcSubtotal()
  componentDidUpdate = () => this.calcSubtotal()

  calcSubtotal = () => {
    let subtotal = 0,
        gridTemplateRows = "auto "

    this.props.products.forEach(v => {
      subtotal += v.totalPrice
      gridTemplateRows += "auto "
    })

    gridTemplateRows += "1fr auto auto auto"


    if (this.state.subtotal !== subtotal.toFixed(2)) this.setState({
      subtotal: subtotal.toFixed(2),
      gridHeight: this.A4Ref.current.offsetHeight - this.headerRef.current.offsetHeight - this.infoRef.current.offsetHeight,
      gridTemplateRows
    })
  }

  renderProducts = () => this.props.products.map(v => (
    <Fragment key={v.id}>
      <ProductItem> { v.amount } </ProductItem>
      <ProductItem> { v.title } </ProductItem>
      <ProductItem> { v.pricePerUnit.toString().replace(".", ",") } </ProductItem>
      <ProductItem style={{ borderRight: "unset" }}> { v.totalPrice.toString().replace(".", ",") } </ProductItem>
    </Fragment>
  ))

  render() {
    const c = this.props.client
    return (
      <A4Container ref={this.A4Ref}>
        <HeaderWrapper ref={this.headerRef}>
          <p> Abundance Agri BV </p>
          <p> Logo1 </p>
          <p> Logo2 </p>
        </HeaderWrapper>
        <InfoContainer ref={this.infoRef}>
          <InfoWrapper>
            <p> Bedrijf </p>
            <p> Abundance Agri BV </p>
            <p> Adres </p>
            <p> Tweelingenlaan 65, 7324 BK, Apeldoorn </p>
            <p> KVKnr </p>
            <p> ? </p>
            <p> BTWnr </p>
            <p> ? </p>
            <p> Factuur nr </p>
            <p> 202100001 </p>
            <p> Factuur Datum </p>
            <p> { new Date().toLocaleDateString() } </p>
          </InfoWrapper>
          <InfoWrapper>
            <p> Naam </p>
            <p> { c.clientName } </p>

            <p> Adres </p>
            <p> { c.address } </p>

            <p> Postcode </p>
            <p> { c.postalcode } </p>

            <p> Plaats </p>
            <p> { c.city } </p>
          </InfoWrapper>
        </InfoContainer>

        <ProductContainer style={{ height: `calc(${this.state.gridHeight}px - 5em)`, gridTemplateRows: this.state.gridTemplateRows }}>
          <ProductHeader> Aantal </ProductHeader>
          <ProductHeader> Product </ProductHeader>
          <ProductHeader> Prijs ps. </ProductHeader>
          <ProductHeader> Prijs tot. </ProductHeader>
          { this.renderProducts() }
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem style={{ borderRight: "unset" }} />

          <span style={{ borderTop: "1px solid black" }} />
          <span style={{ borderTop: "1px solid black" }} />
          <ProductHeader style={{ borderTop: "1px solid black" }}> Subtotaal </ProductHeader>
          <ProductItem style={{ borderRight: "unset", borderTop: "1px solid black" }}> { this.state.subtotal } </ProductItem>

          <span />
          <span />
          <ProductHeader> BTW (21%) </ProductHeader>
          <ProductItem style={{ borderRight: "unset" }}> { (this.state.subtotal * .21).toFixed(2).toString().replace(".", ",") } </ProductItem>

          <span />
          <span />
          <ProductHeader> Totaal </ProductHeader>
          <ProductItem style={{ borderRight: "unset" }}> { (this.state.subtotal * 1.21).toFixed(2).toString().replace(".", ",") } </ProductItem>
        </ProductContainer>
      </A4Container>
    )
  }
}

export default Invoice