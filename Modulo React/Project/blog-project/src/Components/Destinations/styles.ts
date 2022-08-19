import { styled } from "../../stitches.config";

export const DestinationsSection = styled('section', {
    width: "100%",
    minHeight: "100vh",
    background: "url(/Assets/imgs/destination/background-destination-desktop.jpg)",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingTop: "23.4rem",
    paddingBottom: "11.8rem",
    px: 16.5,
})

export const DestinationTitle = styled('h5', {
    color: "$white",
    textTransform: "uppercase",
    marginBottom: "6.4rem",
    "&::before": {
        content: '01',
        marginRight: "2.6rem",
        opacity: "0.25",
        fontWeight: "700"
    }
})

