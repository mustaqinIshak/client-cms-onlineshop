'use strict'

import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {userActions} from "../../actions"
import { withRouter } from "react-router"
import { history } from '../../helpers'
import {Container, Row, Col, Button, Form, Alert} from "react-bootstrap"
import "./style.css"

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            showPassword: false,
        }
    }

    componentDidMount() {
        if (localStorage.getItem('auth')) {
            history.push('/home')
        }
    }

    handleChange = props => event => {
        this.setState({
            [props]: event.target.value
        })
    }

    login = event => {
        // event.preventDefault()
        const { email, password } = this.state
        const { dispatch } = this.props
        if (email, password) {
            dispatch(userActions.login(email, password))
        }
    }


    render() {
        const {auth, message} = this.props
        return (
            <div className="login">
                <Container className="login-container">
                    <Row>
                        <Col className="login-form">
                        <Alert className={message ? "message-display-on" : "message-display-off"} variant={auth ? "success" : "danger"}>
                            {message}
                        </Alert>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username :</Form.Label>
                                    <Form.Control type="text" placeHolder="example@mail.com" value={this.state.email} onChange={this.handleChange('email')}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password :</Form.Label>
                                    <Form.Control type="password" placeHolder="Password" value={this.state.password} onChange={this.handleChange('password')}/>
                                </Form.Group>
                                <Button onClick={(event) => this.login()}>Login</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth,
        message: state.auth.message
    }
}

export default connect(mapStateToProps)(Login)