import React from 'react';
import Order from '../components/Order';
import PleaseSingnIn from '../components/PleaseSignIn';

const OrderPage = props => (
  <div>
    <PleaseSingnIn>
      <Order id={props.query.id} />
    </PleaseSingnIn>
  </div>
);

export default OrderPage;
