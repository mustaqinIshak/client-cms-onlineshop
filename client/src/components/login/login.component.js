'use strict'

import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {userActions} from "../../actions"
import { withRouter } from "react-router"
import { history } from '../../helpers'
import "./style.css"
import { withStyles } from "@material-ui/styles"
import { Style } from "@material-ui/icons"

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
            console.log("ini di button login")
            console.log(dispatch)
            dispatch(userActions.login(email, password))
        }
    }

    render() {
        return (
            <div className="login">

                <div className="login-field">
                        <div className="email">
                            <label name="femail">Username :</label>
                            <input type="text" id="femail" value={this.state.email} onChange={this.handleChange('email')} />
                        </div>
                        <div className="password">
                            <label name="fPassword">Password :</label>
                            <input type="password" id="fPassword" value={this.state.password} onChange={this.handleChange('password')} />
                        </div>
                        <div className="login-button">
                            <button onClick={(event) => this.login()}>Login</button>
                        </div>
                </div>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps")
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Login)