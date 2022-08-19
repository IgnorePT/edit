import { styled } from "../../stitches.config";

export const Container = styled("div", {
    width: "100%",
    maxWidth: "144rem",
    margin: "0 auto",
    variants: {
        fullHeight: {
            true: {
                height: "100%",
            }
        }
    }
})


export const SubHeading = styled("h4", {
    textTransform: "uppercase",
    fontSize: "2.8rem",
    lineHeight: "3.2rem",
    letterSpacing: "auto",
});

export const SubHeading2 = styled("h5", {
    textTransform: "uppercase",
    fontSize: "1.8rem",
    lineHeight: "3.2rem",
    letterSpacing: "auto",
});
