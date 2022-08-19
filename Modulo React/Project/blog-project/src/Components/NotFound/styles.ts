import { styled } from "../../stitches.config";
import { HomeSection } from "../Home/styles";

export const NotFoundWrapper = styled(HomeSection, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem"
})

export const NotFoundTitle = styled("h3", {
    textTransform: "uppercase"
})