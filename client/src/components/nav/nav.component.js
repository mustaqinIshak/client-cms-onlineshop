import React, { Component } from "react";
import { connect } from "react-redux";
import SubMenu from "./subNav.component"
import { NavData } from "../navData";
import { userActions } from "../../actions";
import * as AiIcons from "react-icons/ai"
import "./nav.css"

class Nav extends Component {

    logout = event => {
        const {dispatch} = this.props
        dispatch(userActions.logout())
    }

    render() {
        return(
            <nav className="sidebar-nav">
                <div className="sidebar-warp">
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
                    <div className="logout">
                        <div className="logout-button" onClick={(event) => this.logout()}>
                            <div>
                                <AiIcons.AiOutlinePoweroff />
                                <span>logout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    const { loggedIn } = state.auth
    return {
        loggedIn
    }
}

export default connect(mapStateToProps)(Nav)

