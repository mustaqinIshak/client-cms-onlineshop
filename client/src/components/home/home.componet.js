'use strict'

import React, {Component} from 'react'
import PropsTypes from  'prop-types'
import {withStyler} from '@material-ui/core/styles'
import {connect} from 'react-redux'
import { withRouter } from 'react-router' 


class Home extends Component {
    render() {
        return(
            <div>
                <h1>ini Home</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Home)