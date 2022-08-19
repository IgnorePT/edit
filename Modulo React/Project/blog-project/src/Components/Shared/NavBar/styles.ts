import { styled } from "../../../stitches.config"
import { Link } from "react-router-dom";


export const Nav = styled('nav', {
    display: "flex",
    gap: "3.5rem",
    height: "100%",
    textTransform: "uppercase",
    variants: {
        mainNavigation: {
            true: {
                gap: "4.8rem",
                counterSet: "my-counter",
                counterReset: "my-counter -1",
            }
        }
    }
})

const sharedLinkCss = {
    fontSize: "1.6rem",
    display: "block",
    textDecoration: "none",
    textTransform: "uppercase",
    padding: "3.9rem 0 3.6rem",
    height: "100%",
    color: "$lavenderBlue",
    letterSpacing: "0.27rem",
    borderBottom: "0.3rem solid rgba(255,255,255, 0)",
    "&:hover": {
        borderColor: "rgba(255,255,255, 0.5)"
    },
    variants: {
        active: {
            true: {
                borderColor: "rgba(255,255,255, 1)"
            }
        }
    }
}

export const NavItemButton = styled("button", {
    ...{
        background: "none",
        border: "none",
        cursor: "pointer"
    },
    ...sharedLinkCss,
})

export const NavItemLink = styled(Link, {
    ...sharedLinkCss, ...{
        color: "$white",
        counterIncrement: "my-counter 1",
        "&::before": {
            content: "counter(my-counter, decimal-leading-zero)",
            marginRight: "1rem",
            fontWeight: "700"
        },
    }
})