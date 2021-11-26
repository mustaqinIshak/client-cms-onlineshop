import React, {Component, useState} from "react";
import * as ReactBt from "react-bootstrap"
import { connect } from "react-redux";
import { brandAction } from "../../actions/brand.action";
import { withRouter } from "react-router-dom";
import SearchBrand from "./brandSearch.component";
import CreateBrand from "./createBrand.component";

import Nav from "../nav/nav.component"

import './brand.css'

function ShowCreateBrand() {
    const [show, setShow] = useState(false)
    
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div>
            <ReactBt.Button variant="primary" onClick={handleShow}>
                Create Brand
            </ReactBt.Button>
            <ReactBt.Modal size="lg" show={show} onHide={handleClose}>
                <ReactBt.Modal.Header closeButton>
                <ReactBt.Modal.Title>Create Brand</ReactBt.Modal.Title>
                </ReactBt.Modal.Header>
                <ReactBt.Modal.Body>
                    <CreateBrand />
                </ReactBt.Modal.Body>
                <ReactBt.Modal.Footer>

                </ReactBt.Modal.Footer>
            </ReactBt.Modal>
        </div>
    )
}

class Brand extends Component {

    componentDidMount() {
        const {dispatch} = this.props  
        dispatch(brandAction.showAllBrands())
    }


    showResult(result) {
      return result.map((item) => {
        return (
            <tr>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.country}</th>
                <th>{item.consigment}</th>
                <th>blum ada</th>
            </tr>
        )
        })
    }

    render() {
        const brand = this.props.brand
        const message = this.props.message
        const {result} = this.props
    
        return (
            <div className="brand-grid-container">
                <Nav/>
                <div className="brand">
                    <div>
                        {message ? <ReactBt.Alert variant="danger">{message}</ReactBt.Alert> : null }
                    </div>
                    <div className='search-brand'>
                        <SearchBrand />
                    </div>
                    <div className='create-brand'>
                    <CreateBrand />
                    </div>
                    <ReactBt.Table responsive>
                        <thead>
                            <tr>
                               <th>#</th>
                               <th>name</th> 
                               <th>country</th>
                               <th>consigment</th>
                               <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                !result ? this.showResult(brand) : this.showResult(result)
                                
                            }
                        </tbody>
                    </ReactBt.Table>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const brand = state.brand.brands
    const message = state.brand.message

    if(message) {
        return {
            brand,
            message
        }
    } else if(state.brand.result) {
        return {
            brand,
            result: state.brand.result
        }
    }
    return {
        brand
    }
}

const connectedBrandPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(Brand))
export {connectedBrandPage as Brand}
