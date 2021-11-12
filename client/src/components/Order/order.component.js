import React, {Component} from "react"
import {Col, Row, Container, Table} from "react-bootstrap"
import Nav from "../nav/nav.component"
import connect from "react-redux"

import "./order.css"
class Order extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="order">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id Order</th>
                                <th>Brand</th>
                                <th>Article Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Payment Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Order