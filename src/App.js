import React, { Fragment } from 'react';
import {
  MDBBadge,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';

import PayonnerLogin from './component/payoneer_login/payoneer_login'

function App() {
  return (
    <Fragment>
      <PayonnerLogin>
      </PayonnerLogin>
    </Fragment>
  );
}

export default App;
