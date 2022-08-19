import { NotFoundWrapper, NotFoundTitle } from "./styles";
import useSound from 'use-sound';

const NotFound = () => {
    console.log("Page not Found!");

    const [play] = useSound('../../Assets/sounds/main_houston_problem.mp3');

    return (
        <NotFoundWrapper onClick={() => play()}>
            <h1>404</h1>
            <NotFoundTitle>Page not Found</NotFoundTitle>
            <h5>Okay, Houston, we've had a problem here!</h5>
        </NotFoundWrapper>
    )
}

export default NotFound;