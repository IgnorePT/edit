import { styled } from "../../../stitches.config"

export const MainHeader = styled('header', {
    position: "absolute",
    display: "flex",
    margin: "4rem 0",
    padding: "2.4rem 0 2.4rem 5.5rem",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
})

export const NavContainer = styled('div', {
    background: "rgba(255, 255, 255, 0.04)",
    backdropFilter: "blur(81.5485px)",
    padding: "0 16.5rem 0 12.3rem",
    position: "relative",
    "&::before": {
        content: "",
        position: 'absolute',
        background: "$white",
        height: "0.1rem",
        width: "47.3rem",
        top: "50%",
        right: "95%",
        opacity: "0.25"
    }
})

export const LogoContainer = styled("div")