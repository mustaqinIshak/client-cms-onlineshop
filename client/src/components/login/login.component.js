'use strict'

import React, { Component, useEffect, useState } from "react"
import { connect, useDispatch } from "react-redux"
import {userActions} from "../../actions"
import { Redirect } from "react-router"
import {Container, Row, Col, Button, Form, Alert, Spinner} from "react-bootstrap"
import { useHistory } from "react-router-dom"
import "./style.css"

const Login = (props)=> {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const auth = localStorage.getItem('auth')
    const success = props.auth
    const dispatch  = useDispatch()
    const History = useHistory()

    useEffect(() => {
        if(auth){
            History.push('/home')
        }
        if(!success) {
            setLoading(false)
        }
    })

    const loadingButton = () => {
        return ( 
            <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        )
    }
    const HandlerLogin = e => {
        setLoading(true)
        if (email, password) {
            // event.preventDefault()
            dispatch(userActions.Login(email, password))
        }
    }
        return (
            <div className="login">
                <Container className="login-container">
                    <Row>
                        <Col className="login-form">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username :</Form.Label>
                                    <Form.Control type="email" placeholder="example@mail.com" value={email} onChange={e => setEmail(e.target.value)} required/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password :</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
                                </Form.Group>
                               {!loading && <Button onClick={(e) => HandlerLogin()} variant="primary">Login</Button>}
                               {loading && loadingButton() }
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth,
        message: state.auth.message
    }
}

export default connect(mapStateToProps)(Login)