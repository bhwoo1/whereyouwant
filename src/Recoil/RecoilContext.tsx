"use client"
import { Place } from "@/app/Type";
import { RecoilRoot, atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const KeywordArrayAtom = atom({
    key: "KeywordArrayState",
    default: [] as string[]
});


const { persistAtom } = recoilPersist({
    key: "sessionStorage",
    storage: sessionStorage
});

export const TravelPlaceAtom = atom<Place[]>({
    key: "TravelPlaceState",
    default: [],
    effects_UNSTABLE: [persistAtom]
});


export default function RecoilContextProvider({ children }: { children: React.ReactNode }) {
    return <RecoilRoot>{children}</RecoilRoot>;
};