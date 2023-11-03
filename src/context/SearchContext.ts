import { createContext } from "react";

type SearchContextType = {
    closed: boolean;
    trainingPeriod: string;
    numberOfUnits: number;

    setClosed: (value : boolean) => void;
    setTrainingPeriod: (value: string) => void;
    setNumberOfUnits: (value : number) => void;
}

const SearchContext = createContext({} as SearchContextType);

export default SearchContext;