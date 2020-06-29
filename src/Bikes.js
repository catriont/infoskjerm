import React, { useState, useEffect } from "react";
import createEnturService from '@entur/sdk';

const service = createEnturService({ clientName: 'cat-learning-infoskjerm' });

const Bikes = () => {
    const [bikeStations, setBikeStations] = useState([]); // [] fordi vi vet vi får inn en liste

    useEffect(() => {
        service.getBikeRentalStationsByPosition(
            { latitude: 59.928660, longitude: 10.758432 },
            230
        ).then((data) => setBikeStations(data));
    }, []);

    console.log(bikeStations);
    return <div className="BikeStations">
        <h3>Bysykkel</h3>
        {bikeStations.map((stationData) => (
            <Station key={stationData.id} station={stationData}/>
        ))}
        </div>
};

export default Bikes;


const Station = (props) => {
    const { station } = props;

    console.log(station);
    return <div className="station">
        {station.name} - {station.bikesAvailable} ledige, {station.spacesAvailable} plasser
        </div>
};

//props - sende data mellom komponenter