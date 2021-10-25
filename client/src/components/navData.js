import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const NavData = [
    {
        name: "Home",
        path: '/home',
        icon: <AiIcons.AiFillHome  />,
        cName: "cName",
    },
    {
        name: "Brand",
        path: '/brand',
        icon: <AiIcons.AiFillDatabase />,
        cName: "cName"
    },
    {
        name: "Product",
        path: '/product',
        icon: <AiIcons.AiFillSkin />,
        cName: "cName"
    },
    {
        name: "Slide Show",
        path: '/slideshow',
        icon: <AiIcons.AiFillLayout />,
        cName: "cName"
    }
]
