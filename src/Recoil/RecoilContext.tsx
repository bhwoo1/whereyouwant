"use client"
import { RecoilRoot, atom } from "recoil";

export const KeywordArrayAtom = atom({
    key: "KeywordArrayState",
    default: [] as string[]
});


export default function RecoilContextProvider({ children }: { children: React.ReactNode }) {
    return <RecoilRoot>{children}</RecoilRoot>;
}