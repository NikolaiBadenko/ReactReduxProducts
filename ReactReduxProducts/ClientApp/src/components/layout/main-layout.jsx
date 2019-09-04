import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavigationMenu from 'components/navigation/navigation-menu';
import StickyFooter from 'components/footer/sticky-footer'

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
                <Row>
                    <Col><StickyFooter/></Col>
                </Row>
            </Container>
        );
    }
}
