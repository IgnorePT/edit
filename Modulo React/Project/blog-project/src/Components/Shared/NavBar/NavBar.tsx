import { Nav, NavLink } from "./styles";

interface NavBar {
    type: string,
    to: string,
    text: string
}

type NavBarType = {
    menu: NavBar[],
    mainNavigation?: boolean
}

const NavBar = ({ menu, mainNavigation}: NavBarType) => {
    return (
        <Nav mainNavigation={mainNavigation}>
            {
                menu && menu.map((navElement: NavBar) =>
                    <NavLink to={navElement.to}>
                        {navElement.text}
                    </NavLink>)
            }

        </Nav>
    )
}

export default NavBar;