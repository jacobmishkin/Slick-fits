import React from 'react';
import OrderList from '../components/OrderList';
import PleaseSingnIn from '../components/PleaseSignIn';

const OrderPage = props => (
  <div>
    <PleaseSingnIn>
      <OrderList />
    </PleaseSingnIn>
  </div>
);

export default OrderPage;
