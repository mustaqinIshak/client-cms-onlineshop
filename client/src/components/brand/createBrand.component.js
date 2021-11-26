import React, {Component, useState} from "react";
import * as ReactBoostrap from "react-bootstrap"
import { connect } from "react-redux";
import {brandAction} from "../../actions/brand.action"

class CreateBrand extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validate: false,
            setValidate: false,
            name: '',
            country: '',
            consigment: 0
        }
    }

    handdleSubmit = (event) => {
        // const form = event.currentTarget
        // if(form.checkValidity() === false) {
        //     event.preventDefault()
        //     event.stopPropagation()
        // }
        // this.setState = {
        //     setValidate: true
        // }
    }

    handleChange = props => event => {
        this.setState({
            [props]: event.target.value
        })
    }
    
    createBrand = (event) => {
        event.preventDefault()
        const { dispatch } = this.props
        const {name, country, consigment} = this.state
        if(name, country, consigment) {
            const payload = {
                name: name,
                country: country,
                consigment: consigment
            }
            dispatch(brandAction.createBrand(payload))
        }
        
    }

    render() {
        return(
            <ReactBoostrap.Container>
                <ReactBoostrap.Form>
                    <ReactBoostrap.Form.Group as={ReactBoostrap.Row} className="mb-3" controlId="NameBrand">
                        <ReactBoostrap.Form.Label column sm={2}>Name :</ReactBoostrap.Form.Label>
                        <ReactBoostrap.Col sm={10}>
                            <ReactBoostrap.Form.Control
                                value={this.state.name}
                                type="text"
                                placeholder="Auswitch&Vandely"
                                onChange={this.handleChange('name')}
                                required
                            />
                            <ReactBoostrap.Form.Control.Feedback type="invalid">
                                Please insert the name
                            </ReactBoostrap.Form.Control.Feedback>
                        </ReactBoostrap.Col>
                    </ReactBoostrap.Form.Group>
                   
                    <ReactBoostrap.Form.Group  as={ReactBoostrap.Row} className="mb-3" controlId="CountryBrand">
                        <ReactBoostrap.Form.Label column sm={2}>country :</ReactBoostrap.Form.Label>
                        <ReactBoostrap.Col sm={10}>
                            <ReactBoostrap.Form.Control 
                                required
                                type="text"
                                placeholder="Makassar"
                                value={this.state.country}   
                                onChange={this.handleChange('country')}  
                            />
                            <ReactBoostrap.Form.Control.Feedback type="invalid">
                                Please provide a valid city
                            </ReactBoostrap.Form.Control.Feedback>
                        </ReactBoostrap.Col>
                    </ReactBoostrap.Form.Group>
                   
                    <ReactBoostrap.Form.Group as={ReactBoostrap.Row} className="mb-3" controlId="ConsigmentBrand">
                        <ReactBoostrap.Form.Label column sm={2}>Consigment :</ReactBoostrap.Form.Label>
                        <ReactBoostrap.Col sm={10}>    
                            <ReactBoostrap.Form.Control 
                                required
                                type="number"
                                placeholder="10"
                                value={this.state.consigment}
                                onChange={this.handleChange('consigment')}
                            />
                            <ReactBoostrap.Form.Control.Feedback type="invalid">
                                Please provide a valid number
                            </ReactBoostrap.Form.Control.Feedback>
                        </ReactBoostrap.Col>
                    </ReactBoostrap.Form.Group> 
                   <ReactBoostrap.Button onClick={event => this.createBrand(event)}>Create Brand</ReactBoostrap.Button>
                </ReactBoostrap.Form>
            </ReactBoostrap.Container>
        )
    }
}

const mapStateToProps = (state) => {
    return
}

export default connect(mapStateToProps)(CreateBrand)
