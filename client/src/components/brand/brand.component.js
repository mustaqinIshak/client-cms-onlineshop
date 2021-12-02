import React, {Component, useState, useEffect} from "react";
import * as ReactBt from "react-bootstrap"
import { connect, useDispatch } from "react-redux";
import { brandAction } from "../../actions/brand.action";
import { withRouter } from "react-router-dom";
import SearchBrand from "./brandSearch.component";
import CreateBrand from "./createBrand.component";
import { userActions } from "../../actions";

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

const Brand = (props) => {
    const [message, setMessage] = useState(null)
    const [result, setResult] = useState(props.brand.brands)
    const dispatch = useDispatch()
    
    // dispatch(brandAction.showAllBrands())
    // setResult(props.brand)


    const ShowResult = () => {
        console.log('masuk sii', props)
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
                    <ShowCreateBrand />
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
                        {result && ShowResult()}
                    </tbody>
                </ReactBt.Table>
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    console.log('ini d mapstate',state)
    return {
        brand : state.brand
    }
}


export default connect(mapStateToProps)(Brand)
