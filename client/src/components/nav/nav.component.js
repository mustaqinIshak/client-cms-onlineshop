import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./nav.css"
import { NavData } from "../navData";

class Nav extends Component {

    render() {
        return(
            <nav>
                <div className="logo">
                    <span>Logo</span>
                </div>
                <div className="menu-nav">
                    <ul>
                        {NavData.map((item, index) => {
                            
                        })}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return
}

export default connect(mapStateToProps)(Nav)

