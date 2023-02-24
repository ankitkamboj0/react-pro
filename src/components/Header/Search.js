import { useState } from "react"


const SearchBar = ()=>{
    const [search,setSearch] = useState("");
    return(
        <input type="text" value={search} onChange={(e)=>{
            setSearch(e.value);
        }}/>
    )
}

export default SearchBar