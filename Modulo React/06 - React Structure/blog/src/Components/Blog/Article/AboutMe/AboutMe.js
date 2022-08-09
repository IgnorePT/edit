
/**
 * 
 * @param {name, description, avatar} props 
 * @returns AboutMe
 */

import "./AboutMe.css";

const AboutMe = (props) => {
    return (
        <div class="avatar">
            <img src={props.avatar} />
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
        
    )
}

export default AboutMe;