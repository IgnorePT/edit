import { useContext } from "react";
import { DestinationContext } from "../../../Contexts/DestinationsContext";
import PlanetData from "./PlanetData/PlanetData";
import PlanetTabs from "./PlanetTabs/PlanetTabs";
import { Planet, PlanetDescription, PlanetDataGroup, PlanetDataWrapper } from "./styles";

const Planets = () => {

    const {seletedDestionation, selectDestination} = useContext(DestinationContext);
    console.log(seletedDestionation);
    
    return (
        <Planet>
            <div className="planet-image">
            <picture>
                <source srcSet={`${seletedDestionation.images.webp}`} type="image/webp" />
                <img src={`${seletedDestionation.images.png}`} alt={seletedDestionation.name} />
            </picture>
            </div>
            <PlanetDataWrapper>
                <PlanetTabs onClick={selectDestination} />
                <PlanetDescription>
                    <h2>{seletedDestionation.name}</h2>
                    <p>{seletedDestionation.description}</p>
                </PlanetDescription>

                <PlanetDataGroup>
                    <PlanetData title="AVG. DISTANCE" value={seletedDestionation.distance} />
                    <PlanetData title="Est. travel time" value={seletedDestionation.travel} />
                </PlanetDataGroup>

            </PlanetDataWrapper>
        </Planet>
    )
}

export default Planets;