import { Link } from "react-router-dom";
import Logo from "../../../Assets/imgs/shared/logo.svg";
import NavBar from "../NavBar/NavBar";

import {LogoContainer, MainHeader, NavContainer } from "./styles";

const navMenu = [{
    type: 'link',
    to: '/',
    text: 'Home'
},
{
    type: 'link',
    to: '/destination',
    text: 'Destination'
}, {
    type: 'link',
    to: '/crew',
    text: 'Crew'
},
{
    type: 'link',
    to: '/techonology',
    text: 'Techonology'
}
];

const Header = () => {
    return (
        <MainHeader >
            <LogoContainer>
                <Link to="/">
                    <img src={Logo} alt="Logotipo Space Travel" />
                </Link>
            </LogoContainer>

            <NavContainer>
                <NavBar menu={navMenu} mainNavigation={true} />
            </NavContainer>
        </MainHeader>
    )
}

export default Header;