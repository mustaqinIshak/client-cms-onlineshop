'use strict'

import React, {Component} from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
// import {userActions} from "../../actions"
import { withRouter } from "react-router"
import { historu } from '../../helpers'
import "./style.css"
import { withStyles } from "@material-ui/styles"
import { Style } from "@material-ui/icons"

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            showPassword: false,
        }
    }

    componentDidMount() {
        if(localStorage.getItem('auth')) {
            history.pushState('/home')
        }
    }

    handleChange = props => event => {
        this.setState({
            [props]: event.target.value
        })
    }

    Login = event => {
        const {username, password} = this.state
        const { dispatch } = this.props
        if(username, password) {
            console.log(dispatch)
            dispatch(userActions.login(username, password))
        }
    }

    render() {
        return (
            <div className="login">

                <div className="login-field">
                <form>
                    <div className="username"> 
                        <label name="fUsername">Username :</label>
                        <input type="text" id="fUsername" value={this.state.username} onChange={this.handleChange('username')}/>
                    </div>
                    <div className="password">
                        <label name="fPassword">Password :</label>
                        <input type="password" id="fPassword" value={this.state.password} onChange={this.handleChange('password')} />
                    </div>
                </form>
                </div>
            </div>
        )
    }


}

export default Login 