import React, { Fragment } from 'react';
import CreateItem from '../components/CreateItem';
import PleaseSignIn from '../components/PleaseSignIn';

const Sell = props => (
  <Fragment>
    <PleaseSignIn>
      <CreateItem />
    </PleaseSignIn>
  </Fragment>
);

export default Sell;
