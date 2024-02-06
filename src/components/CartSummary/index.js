import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let orderTotal = 0
      cartList.forEach(eachCartItem => {
        orderTotal += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="summary-container">
            <h1 className="order-total">
              Order Total:<span className="amount">{orderTotal} Rs</span>
            </h1>
            <p className="items">{cartList.length} Items in the cart</p>
            <button type="button" className="checkout-btn">
              CheckOut
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
