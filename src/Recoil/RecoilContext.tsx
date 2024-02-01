"use client"
import { Place } from "@/app/Type";
import { RecoilRoot, atom } from "recoil";

export const KeywordArrayAtom = atom({
    key: "KeywordArrayState",
    default: [] as string[]
});

export const TravelPlaceAtom = atom<Place[]>({
    key: "TravelPlaceState",
    default: []
});


export default function RecoilContextProvider({ children }: { children: React.ReactNode }) {
    return <RecoilRoot>{children}</RecoilRoot>;
};