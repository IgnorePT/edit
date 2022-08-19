import { useEffect, useState } from "react";
import { DestinationContext } from "../Contexts/DestinationsContext"
import { IDestination } from "../Schemas/Destinations";
import { http } from "../Services/http";

export const DestinationsProvider = ({children} : any) => {
    const [destinations, setDestinations] = useState<IDestination[]>([]);

    const [seletedDestionation, setSeletedDestionation] = useState<IDestination>({
        name: "Loading...",
        description: "Collecting...",
        distance: "Calculating...",
        travel: "Calculating...",
        images: {
            "png": "/Assets/imgs/destination/loading.png",
            "webp": "/Assets/imgs/destination/loading.webp"
        }
    })

    useEffect(() =>{
        if(destinations.length === 0){
            http.get('http://localhost:5000/api/destinations').then(res => {
                setDestinations(res.data);
                setSeletedDestionation(res.data[0]);
            });
        }
    },[destinations])

    const selectDestination = (choosenDestination: string) => {
        if(destinations){
            const destination = destinations.find((destination) => destination.name.toLowerCase() === choosenDestination.toLowerCase())
            if(destination) setSeletedDestionation(destination);
        }
    }

    return <DestinationContext.Provider value={{seletedDestionation, selectDestination}}>
        {children}
    </DestinationContext.Provider>

}
 