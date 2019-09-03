import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavigationMenu from 'components/navigation/navigation-menu';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col><NavigationMenu/></Col>
        </Row>
        <Row>
          <Col>{this.props.children}</Col>
        </Row>
      </Container>
    );
  }
}
