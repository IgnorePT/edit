
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

    return (
        <Nav mainNavigation={mainNavigation}>
            {
                menu && menu.map((navElement: INavBar) => {
                    
                    return (
                        onClick ? <NavItemButton onClick={() => onClick(navElement.text)} > {navElement.text} </NavItemButton>
                        : <NavItemLink to={navElement.to} > {navElement.text} </NavItemLink>
                    )
                })
            }

        </Nav>
    )
}

export default NavBar;