import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import SubMenu from "./subNav.component"
import { NavData } from "../navData";
import { userActions } from "../../actions";
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import { Image } from "react-bootstrap";
import LogoAuswitch from "../../images/logo_auswitchvandley.svg"
import { Redirect } from "react-router";
import "./nav.css"

class Nav extends Component {

    constructor(props) {
        super(props)
        this.showNavbar = this.showNavbar.bind(this)
        this.state = {
            showActive: false,
            redirect: false
        }
    }

    showNavbar() {
        const currentState = this.state.showActive
        this.setState({
            showActive: !currentState
        })
    }

    handdleCallback = (childData) => {
        this.setState({
            showActive: childData
        })
    }
    
    logout = (event) => {
        const {dispatch} = this.props
        dispatch(userActions.Logout())
        this.setState({
            redirect: true
        })
    }
    
    render() {
        const {username} = this.props
        const {redirect} = this.state

        return(
          <div>
            <nav>
                <div>
                    <div className='FA-Bar'>
                        <FaIcons.FaBars onClick={this.showNavbar}/>
                    </div>
                    <div className='logo-nav'>
                        <Image src={LogoAuswitch} />
                    </div>
                </div>
                <div>
                    <div className="username">
                        <span>Hello {username}</span>
                    </div>
                </div>
            </nav>
            <div className={this.state.showActive ? "SidebarNav active" : "SidebarNav"}>
                <div className="sidebar-warp">
                    <div className="logo-side">
                    <Image src={LogoAuswitch} />
                    </div>
                    <div className="menu-nav">
                        {NavData.map((item, index) => {
                            return (
                                <SubMenu item={item} key={index} showNavbar={this.showNavbar}/>
                            )
                        })}
                    </div>
                    <div className="logout">
                        <div className="logout-button" onClick={(event) => this.logout()}>
                            <div>
                                <AiIcons.AiOutlinePoweroff  className="logo-logout"/>
                                <span>logout</span>
                                {redirect ? <Redirect to='/' /> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    const { loggedIn, username, accLevel } = state.auth
    return {
        loggedIn,
        username,
        accLevel
    }
}

export default connect(mapStateToProps)(Nav)

