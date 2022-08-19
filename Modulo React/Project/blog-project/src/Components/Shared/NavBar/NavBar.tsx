
import { Nav, NavLink, NavLinkButton } from "./styles";

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
                        onClick ? <NavLinkButton onClick={() => onClick(navElement.text)} > {navElement.text} </NavLinkButton>
                        : <NavLink to={navElement.to} > {navElement.text} </NavLink>
                    )
                })
            }

        </Nav>
    )
}

export default NavBar;