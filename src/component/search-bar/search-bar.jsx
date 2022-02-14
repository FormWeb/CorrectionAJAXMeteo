import { useState } from "react";

const SearchBar = (props) => {
    const {placeHolder, onSearch} = props;

    const [cityInput, setCityInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(cityInput)
        setCityInput("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={cityInput} 
                onChange={(e) => setCityInput(e.target.value)}
                placeholder={placeHolder}/>
            <input type="submit" value="Search"/>
        </form>
    )
}

export default SearchBar;