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
    text: 'Titans'
}
];


const PlanetTabs = () => {
    return <NavBar menu={navMenu} />
}

export default PlanetTabs;