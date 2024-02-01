"use client"
import { TravelPlaceAtom } from "@/Recoil/RecoilContext";
import { useEffect } from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";

export default function Loading() {
    const travelPlace = useRecoilValue(TravelPlaceAtom);

    


    return (
        <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-100">
            {travelPlace.map((place, index) => (
                <div key={index}>
                    <p>Key: {place.key}</p>
                    <p>Count: {place.count}</p>
                </div>
            ))}
        </div>
    );
}