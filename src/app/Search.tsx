"use client"
import axios from "axios"
import React, { useState } from "react"
import { Place } from "./Type";




const Search:React.FC = () => {
    const [travelPlace, setTravelPlace] = useState<Place[] | null>(null);
    const [keyword, setKeyword] = useState("");

    const btnClick = () => {        
        axios.post("http://localhost:8080/", {
            keyword: keyword
        })
        .then((res) => {
            console.log(res.data);
            setTravelPlace(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }

    return(
        <div>
            <input type="text" onChange={(e) => setKeyword(e.target.value)} />
            <button onClick={btnClick}>전송</button>
        <ul>
        {travelPlace?.map((place: Place) => (
          <li key={place.contentid}>{place.title}</li>
        ))}
      </ul>
      </div>
    );
}

export default Search;