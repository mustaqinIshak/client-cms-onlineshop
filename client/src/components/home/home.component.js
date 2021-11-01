'use strict'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router' 
import { Row, Col, Container, Button } from "react-bootstrap"
import Card from '../card/card.component'
import Nav from '../nav/nav.component'
import "./home.css"

class Home extends Component {
    render() {
        return(
            <div>
                <Nav />           
                <div className="home">
                    <Container>
                        <Row>
                            <Col xl={3}>
                                <Card />
                                <Card />
  
                            </Col>
                        </Row>
                        <Row>

                        </Row>
                        <Row>

                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Home)