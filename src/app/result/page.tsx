"use client"
import { TravelPlaceAtom } from "@/Recoil/RecoilContext";
import { useRecoilValue } from "recoil";
import PlaceComponent from "../components/PlaceComponent";

export default function Result() {
    const travelPlace = useRecoilValue(TravelPlaceAtom);

    // travelPlace가 null 또는 undefined인 경우를 처리
    if (!travelPlace) {
        return <div>Loading...</div>;
    }

    // 첫번째 요소
    const firstPlace = travelPlace[0];

    // 두번째부터 다섯번째 요소
    const secondToFifthPlaces = travelPlace.slice(1, 5);

    // 여섯번째부터 열번째 요소
    const sixthToTenthPlaces = travelPlace.slice(5, 10);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="mb-8">
                <p className="text-xl font-bold">당신께 추천하는 여행지는...</p>
                <PlaceComponent place={firstPlace} />
            </div>
            {secondToFifthPlaces.length > 0 && 
                <div className="mb-8">
                    <p className="text-xl font-bold">이런 여행지는 어때요?</p>
                    {secondToFifthPlaces.map((place) => (
                        <div key={place.count} className="mt-4">
                            <PlaceComponent place={place} />
                        </div>
                    ))}
                </div>
            }
            {sixthToTenthPlaces.length > 0 &&
                <div>
                <p className="text-xl font-bold">이런 여행지도 있어요!</p>
                {sixthToTenthPlaces.map((place) => (
                    <div key={place.count} className="mt-4">
                        <PlaceComponent place={place} />
                    </div>
                ))}
            </div>
            }
        </div>
    );
}