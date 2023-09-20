import { useEffect, useState } from "react";
import PlaceData from "./PlaceData/PlaceData";


const TourPlace = () => {
    const [places, setPlaces] = useState([])


    useEffect(() => {
        fetch('place.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <div className="container mx-auto my-5">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
                {
                    places.map(place => <PlaceData
                        key={place._id}
                        place={place}
                    >
                    </PlaceData>)
                }
            </div>

        </div>
    );
};

export default TourPlace;