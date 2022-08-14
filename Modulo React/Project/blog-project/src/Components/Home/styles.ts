import { styled } from '../../stitches.config';
import { Link } from "react-router-dom";

export const HomeSection = styled('section', {
    background: "url(./Assets/imgs/home/background-home-desktop.jpg)",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    px: 13.1,
    py: 16.5,
})

export const TextContentColumn = styled('div', {
    maxWidth: "44.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "2.4rem"
})

export const CTAColumn = styled('div');

export const CTAButton = styled(Link, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "$richBlack",
    width: "27.4rem",
    height: "27.4rem",
    borderRadius: "100%",
    backgroundColor: "$white",
    fontFamily: "$bellefair",
    fontSize: "3.2rem",
    letterSpacing: "0.22rem",
    textTransform: "uppercase",
    position: "relative",
    zIndex: "0",
    "&:before" :{
        content: '',
        pointerEvents: "none",
        position: "absolute",
        backgroundColor: "$white",
        width: "1rem",
        height: "1rem",
        transition: "all 0.6s",
        borderRadius: "100%",
        opacity: 0.1,
        zIndex: -1,
    },
    "&:hover": {
        "&:before": {
            width: "45rem",
            height: "45rem"
        }
    }
})