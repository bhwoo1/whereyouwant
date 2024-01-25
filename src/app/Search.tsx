"use client"
import axios from "axios"
import React, { useEffect, useState } from "react"

type Place = {
    addr1: string,
    addr2: string,
    areacode: string,
    booktour: string,
    cat1: string,
    cat2: string,
    cat3: string,
    contentid: string,
    contenttypeid: string,
    createdtime: string,
    firstimage: string,
    firstimage2: string,
    cpyrhtDivCd: string,
    mapx: string,
    modifiedtime: string,
    sigungucode: string,
    tel: string,
    title: string
}


const Search:React.FC = () => {
    const [travelPlace, setTravelPlace] = useState<Place[] | null>(null);
    const [keyword, setKeyword] = useState("");

    // useEffect(() => {
    //     axios.post("http://localhost:8080/", {
    //         keyword: "강원"
    //     })
    //     .then((res) => {
    //         const data = res.data;
    //         console.log(data);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     })
    // }, []);

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