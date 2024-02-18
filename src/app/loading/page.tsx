"use client"

import { KeywordArrayAtom, TravelPlaceAtom } from "@/Recoil/RecoilContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Loading() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const travelPlace = useRecoilValue(TravelPlaceAtom);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      // 5초 후에 결과 페이지로 이동
      router.push("/result");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);


    return (
        <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-100">
        <p className="text-3xl font-bold mb-4">여행지를 찾고 있어요!</p>
        <p className="text-xl font-bold mb-4">잠시만 기다려주세요</p>
        </div>
    );
}