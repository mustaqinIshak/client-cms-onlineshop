import React, {Component} from "react";
import {Alert} from "react-bootstrap"

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if(this.state.errorInfo){
            return (
                <div>
                    <Alert>{this.state.error.toString()}</Alert>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary