'use strict'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router' 
import Nav from "../nav/nav.component"

class Home extends Component {
    render() {
        return(
            <div>
                <Nav />
                <h1>ini Home</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Home)