import React from "react";
import { AreaJsonType, Place } from "../Type";
import areaJson from "../../area.json";

type Props = {
    place: Place
}

const PlaceComponent: React.FC<Props> = (props: Props) => {
    const { place } = props;
    const keywordCountEntries = Object.entries(props.place.keywordCounts);
    const areaJsonTyped = areaJson as AreaJsonType;

    return(
        <div className="bg-gray-100 p-4 rounded-md shadow-md bg-white">
            <p className="text-lg text-gray-700">{areaJsonTyped[place.areacode]?.name}</p>
            <p className="text-lg font-bold">{areaJsonTyped[place.areacode]?.sigungucode[place.sigungucode]}</p>
            <div className="mt-4">
                <p>키워드 검색 결과</p>
                <ul>
                    {keywordCountEntries.map(([keyword, count]) => (
                        <li key={keyword} className="text-base">
                            {keyword}: {count}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PlaceComponent;