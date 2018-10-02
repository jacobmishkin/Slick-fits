import { Fragment } from 'react';
import PleaseSignIn from '../components/PleaseSignIn';
import Permissions from '../components/Permissions';

const PermissionPage = props => (
  <Fragment>
    <PleaseSignIn>
      <Permissions />
    </PleaseSignIn>
  </Fragment>
);

export default PermissionPage;
