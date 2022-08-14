import { Link } from "react-router-dom";
import Logo from "../../../Assets/imgs/shared/logo.svg";
import NavBar from "../NavBar/NavBar";

import { MainHeader } from "./styles";

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
            <Link to="/">
                <img src={Logo} alt="Logotipo Space Travel" />
            </Link>
            <NavBar menu={navMenu} mainNavigation={true} />
        </MainHeader>
    )
}

export default Header;