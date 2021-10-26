import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./subNav.css"

const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav)

    return (
        <div>
            <Link className="sidebar-link" to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <span className="sidebar-label">{item.name}</span>
                </div>
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
                        {item.icon}
                        <span className="sidebar-label">{item.name}</span>
                    </Link>
                )
            })}
        </div>
    )
}

export default SubMenu