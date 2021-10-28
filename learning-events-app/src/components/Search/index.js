import React from "react";
import { useSelector } from 'react-redux';

const Search = () => {
    const counter = useSelector((state) => state.counter)
    return (
        <div>
            <h3>input lol {counter}</h3>
            <input />
        </div>
    )
}

export default Search;