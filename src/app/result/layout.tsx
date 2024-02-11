"use client"
import React, { ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { KeywordArrayAtom } from "@/Recoil/RecoilContext";

type LayoutProps = {
    children: ReactNode;
}

const Layout:React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();
    const [keywordArray, setKeywordArray] = useRecoilState(KeywordArrayAtom);

    const logoClick = () => {
        setKeywordArray([]);
        router.push("/");
    }

    return(
        <>
            <nav className="p-4 border-b-4 border-gray-300">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center">
                        <div className="cursor-pointer" onClick={logoClick}>
                            <Image src="/whereyouwant_logo.png" alt ="logo" width={50} height={50} />
                        </div>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </>
    );
}

export default Layout;