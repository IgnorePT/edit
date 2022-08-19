// import { DestinationsProvider } from "../../Provider/Destinations";
import { Container } from "../Shared/styles";
import Planets from "./Planets/Planets";
import { DestinationsSection, DestinationTitle } from "./styles";

const Destinations = () => {
    return (
        <DestinationsSection >
            <Container>
                <DestinationTitle>Pick your destination</DestinationTitle>
                {/* <DestinationsProvider> */}
                    <Planets />
                {/* </DestinationsProvider> */}
            </Container>

        </DestinationsSection>
    )
}

export default Destinations;