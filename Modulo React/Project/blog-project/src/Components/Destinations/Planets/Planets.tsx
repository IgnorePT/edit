import { useState } from "react";
import Moon from "../../../Assets/imgs/destination/image-moon.png"
import { PlanetData } from "../styles";
import PlanetTabs from "./PlanetTabs/PlanetTabs";
import { Planet } from "./styles";

const Planets = () => {

    const [currentPlanet, setCurrentPlanet] = useState({});
    
    return (
        <Planet>
            <div className="planet-image">
                <img src={Moon} alt="Moon" />
            </div>
            <PlanetData>
                <PlanetTabs />
                <div className="generic-content">
                    <h1>Moon</h1>
                    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                </div>

                <div className="technical-content">
                    <div className="content-group">
                        <h5 className="sub_heading_2">AVG. DISTANCE</h5>
                        <h4 className="sub_heading">384,400 km</h4>
                    </div>

                    <div className="content-group">
                        <h5 className="sub_heading_2">Est. travel time</h5>
                        <h4 className="sub_heading">3 days</h4>
                    </div>
                </div>
                
            </PlanetData>
        </Planet>
    )
}

export default Planets;