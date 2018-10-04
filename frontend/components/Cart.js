import React from 'react';

import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import Sickbutton from './styles/SickButton';

const Cart = () => (
  <CartStyles open>
    <header>
      <CloseButton title="Close">&times;</CloseButton>
      <Supreme>Your Cart</Supreme>
      <p>you have __ number of items</p>
    </header>

    <footer>
      <p>$10.05</p>
      <Sickbutton>Checkout</Sickbutton>
    </footer>
  </CartStyles>
);

export default Cart;
