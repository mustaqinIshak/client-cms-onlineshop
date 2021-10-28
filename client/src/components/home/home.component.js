'use strict'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router' 
import { Row, Col, Container } from "react-bootstrap"
import Card from '../card/card.component'

class Home extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <Card />
                    </Col>
                </Row>
                <Row>

                </Row>
                <Row>

                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Home)