import React, { Fragment } from 'react';
import Items from '../components/Items';

const Home = props => (
  <Fragment>
    <Items page={parseFloat(props.query.page) || 1} />
  </Fragment>
);

export default Home;
