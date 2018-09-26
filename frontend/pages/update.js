import React, { Fragment } from 'react';
import UpdateItem from '../components/UpdateItem';

const Update = ({ query }) => (
  <Fragment>
    <UpdateItem id={query.id} />
  </Fragment>
);

export default Update;
