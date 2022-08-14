import { Container } from '../Shared/styles';
import { HomeSection, TextContentColumn, CTAColumn, CTAButton } from './styles';

const cssContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end"
}

const Home = () => {
    return (
        <HomeSection>
            <Container fullHeight css={cssContainer}>
                <TextContentColumn>
                    <h5>SO, YOU WANT TO TRAVEL TO</h5>
                    <h1>Space</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </TextContentColumn>

                <CTAColumn>
                    <CTAButton to="/destination">Explore</CTAButton>
                </CTAColumn>
            </Container>

        </HomeSection>
    )
}

export default Home;