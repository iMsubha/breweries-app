import React, { useEffect, useState } from 'react';
import { Row } from "react-bootstrap";
import BreweryCard from '../BreweryCard/BreweryCard';

const Home = () => {
    const [breweries,setBreweries] = useState([]);
    const [city,setCity] = useState([]);
   
    useEffect(() => {
        fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
        .then(res => res.json())
        .then(data =>
            setBreweries(data)
        )
    }, [city])
    return (
        <div>       
            <div className="px-5">
                <div className="input-group mt-5 px-5">
                    <input  type="text" className="form-control" placeholder="Search by city" onChange={e =>setCity(e.target.value)}/>
                    <div className="input-group-append ">
                        <button style={{ backgroundColor: "#F06C4E" }} className="btn text-white" type="button">Search Brewery</button>
                    </div>
                </div>
            </div>
            <p className="text-center small">Total Search: {breweries.length}</p>
            <Row className="m-5 p-5 d-flex justify-justify-content-center align-items-center">
            {
                breweries.map(brewery =><BreweryCard key={brewery.id} brewery={brewery}></BreweryCard>)
            }
            </Row>
        </div>
    );
};

export default Home;