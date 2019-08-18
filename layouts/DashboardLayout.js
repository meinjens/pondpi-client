import Header from './Header'
import React from 'react'
import CssBaseline from 'material-ui/CssBaseline';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const DashboardLayout = (props) => (
  <div>
    <Row>
      <div style={layoutStyle}>
        <Header/>
        {props.children}
      </div>
    </Row>
    <Row>
      <Column small={2} large={2}>
        <p>Menu</p>
      </Column>
      <Column small={10} large={10}>
        <p>Test</p>
      </Column>
    </Row>
  </div>
);

export default DashboardLayout