import { styled } from "../../../stitches.config"
import { Link } from "react-router-dom";


export const Nav = styled('nav',{
    display: "flex",
    gap: "3.5rem",
    height: "100%",
    padding: "1.2rem 0",
    variants:{
        mainNavigation: {
            true: {
                padding: "0 16.5rem 0 12.3rem",
                gap: "4.8rem",
                background: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(81.5485px)",
                counterSet: "my-counter",
                counterReset: "my-counter -1",
            }
        }
    }
})

export const NavLink = styled(Link, {
    display: "block",
    textDecoration: "none",
    padding: "3.9rem 0 3.6rem",
    height: "100%",
    borderBottom: "0.3rem solid rgba(255,255,255, 0)",
    counterIncrement: "my-counter 1",
    "&:hover" : {
        borderColor: "rgba(255,255,255, 0.5)"
    },
    "&::before" : {
        content: "counter(my-counter, decimal-leading-zero)",
        marginRight: "1rem",
        fontWeight: "700"
    },
    variants:{
        active: {
            true: {
                borderColor: "rgba(255,255,255, 1)"
            }
        }
    }
})