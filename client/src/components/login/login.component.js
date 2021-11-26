'use strict'

import React, { Component } from "react"
import { connect } from "react-redux"
import {userActions} from "../../actions"
import { Redirect } from "react-router"
import {Container, Row, Col, Button, Form, Alert, Spinner} from "react-bootstrap"
import "./style.css"

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            showPassword: false,
            loading: false,
            redirect: false,
        }
    }

    componentDidMount() {
        if (localStorage.getItem('auth')) {
           this.setState({
               redirect: true
           })
        }
    }

    handleChange = props => event => {
        this.setState({
            [props]: event.target.value
        })
    }

    login = event => {
        const { email, password } = this.state
        const { dispatch } = this.props
        if (email, password) {
            event.preventDefault()
            dispatch(userActions.login(email, password, this.props.history))
        }
    }



    render() {
        const {auth, message} = this.props
        const {redirect} = this.state
        if(auth || redirect) {
            return <Redirect to='/home' />
        }
        return (
            <div className="login">
                <Container className="login-container">
                    <Row>
                        <Col className="login-form">
                        <Alert className={message ? "" : "message-display-off"} variant={auth ? "success" : "danger"}>
                            {message}
                        </Alert>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username :</Form.Label>
                                    <Form.Control type="email" placeholder="example@mail.com" value={this.state.email} onChange={this.handleChange('email')} required/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password :</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange('password')} required/>
                                </Form.Group>
                               <Button onClick={(event) => this.login()} variant="primary">Login</Button>
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