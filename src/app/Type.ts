export type KeywordCounts = {
    [keyword: string]: number | undefined;
  };

export type Place = {
    key: string,
    count: number,
    keywordCounts: KeywordCounts,
    areacode: string,
    sigungucode: string
}

export type AreaJsonType = {
    [key: string]: {
        name: string;
        sigungucode: {
            [key: string]: string;
        };
    };
};