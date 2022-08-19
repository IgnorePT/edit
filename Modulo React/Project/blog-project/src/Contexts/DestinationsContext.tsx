import { createContext } from "react";


const initialValue = {
    destinations: [],
    selectedDestination: {}
}

export const DestinationContext = createContext<any>(initialValue);