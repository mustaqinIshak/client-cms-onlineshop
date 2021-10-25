import React, { Component } from "react";
import { connect } from "react-redux";
import SubMenu from "./subNav.component"
import { NavData } from "../navData";
import "./nav.css"

class Nav extends Component {

    render() {
        return(
            <nav className="sidebar-nav">
                <div className="logo">
                    <span>Logo</span>
                </div>
                <div className="menu-nav">
                    {NavData.map((item, index) => {
                        return (
                            <SubMenu item={item} key={index} />
                        )
                    })}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return
}

export default connect(mapStateToProps)(Nav)

