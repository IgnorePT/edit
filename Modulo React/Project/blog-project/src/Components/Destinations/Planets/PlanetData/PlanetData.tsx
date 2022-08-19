import { SubHeading, SubHeading2 } from "../../../Shared/styles"

type PlanetDataType = {
    title: string,
    value: string
}

const PlanetData = ({title, value} : PlanetDataType) => {
    return (
        <div>
            <SubHeading2>{title}</SubHeading2>
            <SubHeading>{value}</SubHeading>
        </div>
    )
}

export default PlanetData;