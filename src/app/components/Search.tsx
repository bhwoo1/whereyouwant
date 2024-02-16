"use client"
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { KeywordArrayAtom, TravelPlaceAtom } from "@/Recoil/RecoilContext";
import { useRouter } from 'next/navigation';
import axios from "axios";

const Search: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [keywordArray, setKeywordArray] = useRecoilState(KeywordArrayAtom);
  const [travelPlace, setTravelPlace] = useRecoilState(TravelPlaceAtom);
  const router = useRouter();


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      enterKeyword();
    } else if (e.key === 'Backspace') {
      // 백스페이스 처리
      if (keyword !== '') {
        // 입력이 비어 있지 않으면 입력의 마지막 글자를 제거
        setKeyword((prevKeyword) => prevKeyword.slice(0, -1));
      }
    }
  };

  const enterKeyword = () => {
    if (keyword.trim() !== "" && keywordArray.length < 3) {
      setKeywordArray((prevArray) => [...prevArray, keyword.trim()]);
      setKeyword(""); // 입력 후 키워드 초기화
    }
  };


  const removeKeyword = (index: number) => {
    setKeywordArray((prevArray) => {
      const newArray = [...prevArray];
      newArray.splice(index, 1);
      return newArray;
    });
  };

  const sendBtnClick = () => {
    if(keywordArray.length === 0) {
      alert("키워드를 1개 이상 입력해주세요!");
    }
    else {
      // router.push("/loading");
      axios.post("http://3.39.11.80:8080/", {
        keywordArray: keywordArray,
      }, {
        withCredentials: true
      })
      .then((res) => {
        setTravelPlace(res.data);
        router.push("/loading");
      })
      .catch((err) => {
        console.error(err);
      });
    }
    
  };

  return (
    <div className="w-2/3 mx-auto p-4">
        <form className="pb-10">
            <input
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e)}
                        className="w-full border p-2 rounded-full mb-4 focus:outline-none focus:border-blue-500"
                        placeholder={keywordArray.length >= 3 ? "더 이상 입력하실 수 없습니다." : "키워드를 입력하세요."}
                        disabled={keywordArray.length >= 3}
            />
        </form>

        <div className="flex flex-row items-center border justify-between p-4 rounded-lg bg-white">
            <div className="mr-4">
                <p className="text-lg">{keywordArray.length}/3</p>
            </div>
            <div className="mr-4 flex flex-row">
                <p className="mr-2 font-semibold text-gray-400">나는 이번 여행에서</p>
                {keywordArray.map((kw, index) => (
                    <div key={kw} className="px-1">
                        <button
                            onClick={() => removeKeyword(index)}
                            className="bg-gray-300 text-gray-700 py-1 px-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-300"
                        >
                            {kw}
                        </button>
                    </div>
                ))}
                <p className="ml-2 font-semibold text-gray-400">(을/를)하고 싶어</p>
            </div>
            <div>
                <button
                    onClick={sendBtnClick}
                    className="bg-green-500 text-white py-2 px-4 rounded-md ml-2 hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                >
                    여행지 찾기
                </button>
            </div>
        </div>
        <div className="pt-4">
          <p className="font-semibold text-gray-500">※ 키워드에 따라 원하시는 결과가 검색되지 않을 수도 있으니 주의해주세요</p>
        </div>
    </div>
  );
};

export default Search;