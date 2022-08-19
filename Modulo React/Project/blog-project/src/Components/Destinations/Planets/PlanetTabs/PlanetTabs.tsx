import { IDestination } from "../../../../Schemas/Destinations";
import NavBar from "../../../Shared/NavBar/NavBar";


const navMenu = [{
    type: 'link',
    to: '/',
    text: 'Moon'
},
{
    type: 'link',
    to: '/destination',
    text: 'Mars'
}, {
    type: 'link',
    to: '/crew',
    text: 'Europa'
},
{
    type: 'link',
    to: '/techonology',
    text: 'Titan'
}
];

type PlanetTabsTypes = {
    onClick: (value: string) => IDestination;
}


const PlanetTabs = ({onClick} : PlanetTabsTypes) => {
    return <NavBar onClick={onClick} menu={navMenu} />
}

export default PlanetTabs;