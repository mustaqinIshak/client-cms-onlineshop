import React, { Component } from "react";
import { connect } from "react-redux";
import SubMenu from "./subNav.component"
import { NavData } from "../navData";
import { userActions } from "../../actions";
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import { Image } from "react-bootstrap";
import LogoAuswitch from "../../images/logo_auswitchvandley.svg"
import "./nav.css"

class Nav extends Component {

    logout = event => {
        const {dispatch} = this.props
        dispatch(userActions.logout())
    }

    render() {
        return(
          <div>
            <nav>
                <div classname='FA-Bar'>
                    <FaIcons.FaBars />
                </div>
                <div className='logo-nav'>
                    <Image src={LogoAuswitch} />
                </div>
                <div></div>
            </nav>
            <div className="SidebarNav responsive">
                <div className="sidebar-warp">
                    <div className="logo-side">
                    <Image src={LogoAuswitch} />
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
                                <AiIcons.AiOutlinePoweroff  className="logo-logout"/>
                                <span>logout</span>
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
    const { loggedIn } = state.auth
    return {
        loggedIn
    }
}

export default connect(mapStateToProps)(Nav)

