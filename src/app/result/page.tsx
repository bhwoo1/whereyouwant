import { TravelPlaceAtom } from "@/Recoil/RecoilContext";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import PlaceComponent from "../components/PlaceComponent";

export default function Loading() {
    const travelPlace = useRecoilValue(TravelPlaceAtom);

    


    return (
        <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-100">
            <div>
                <p>당신께 추천하는 여행지는...</p>
                <PlaceComponent place={travelPlace[0]} />
            </div>
            <div>
                <p>이런 여행지는 어때요?</p>
                {travelPlace.slice(1).map((place) => (
                    <div key={place.count}>
                        <PlaceComponent place={place} />
                    </div>
                ))}
            </div>
            
        </div>
    );
}