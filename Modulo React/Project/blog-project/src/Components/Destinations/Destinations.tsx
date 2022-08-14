import { Container } from "../Shared/styles";
import Planets from "./Planets/Planets";
import { DestinationsSection, DestinationTitle } from "./styles";

const Destinations = () => {

    return (
        <DestinationsSection >
            <Container>
                <DestinationTitle>Pick your destination</DestinationTitle>
                <Planets />
            </Container>

        </DestinationsSection>
    )
}

export default Destinations;