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
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <p className="text-lg font-bold">{areaJsonTyped[place.areacode]?.name}</p>
            <p className="text-lg">{areaJsonTyped[place.areacode]?.sigungucode[place.sigungucode]}</p>
            <ul className="mt-4">
                {keywordCountEntries.map(([keyword, count]) => (
                    <li key={keyword} className="text-base">
                        {keyword}: {count}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlaceComponent;