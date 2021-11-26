import React, {useState} from "react";
import { ThemeProvider } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./subNav.css"


const SubMenu = ({item, showNavbar}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav)

    return (
        <div className="sidebar-button" onClick={() => showNavbar()}>
            <Link className="sidebar-link" to={item.path} onClick={item.subNav && showSubnav}>
                    <div className="icon-menu">
                        {item.icon}
                    </div>
                    <span className="sidebar-label">{item.name}</span>
                <div>
                    {item.subNav && subnav
                     ? item.iconOpened
                     : item.subNav
                     ? item.iconClosed
                     : null  
                    }
                </div>
            </Link>
            {subnav && item.subNav.map((item, index) => {
                return(
                    <Link className="dropdown-link" to={item.path} key={index}>
                        <div className="icon-menu">
                            {item.icon}
                        </div>
                        <span className="sidebar-label">{item.name}</span>
                    </Link>
                )
            })}
        </div>
    )
}

export default SubMenu