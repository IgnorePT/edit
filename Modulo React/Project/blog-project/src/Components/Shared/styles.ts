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