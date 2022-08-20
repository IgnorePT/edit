
import { useState } from "react";
import { Nav, NavItemLink, NavItemButton } from "./styles";

interface INavBar {
    type: string,
    to: string,
    text: string
}

type NavBarType = {
    menu: INavBar[],
    mainNavigation?: boolean,
    onClick?: (value: any) => any;
}

const NavBar = ({ menu, mainNavigation, onClick}: NavBarType) => {
    const [selected, setSelected] = useState(0);

    return (
        <Nav mainNavigation={mainNavigation}>
            {
                menu && menu.map((navElement: INavBar, index: number) => {
                    
                    return (
                        onClick ? <NavItemButton active={index === selected} onClick={() => {onClick(navElement.text); setSelected(index)}} > {navElement.text} </NavItemButton>
                        : <NavItemLink active={index === selected} onClick={() => setSelected(index)} to={navElement.to} > {navElement.text} </NavItemLink>
                    )
                })
            }

        </Nav>
    )
}

export default NavBar;