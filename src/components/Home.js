import { useEffect, useState } from "react"
import RestroCard from "components/RestroCard"
import SearchBar from "components/Search"
import {URL} from "common/config"
import { Link } from "react-router-dom"

const Home = () =>{
    const [search,setSearch] = useState("");
    const [restroData,setRestroData] = useState(null);
    const [filteredData,setFilterData] = useState(null);

    const  getData = async()=>{
        try {
            await fetch(URL).then((data)=>data.json()).then(({data})=>{
                setRestroData(data?.cards[0].data?.data?.cards);
                setFilterData(data?.cards[0].data?.data?.cards);
                console.log("our data",data?.cards[0].data?.data?.cards);
            });
        } catch (error) {
            console.table(error)
        }
    }

    useEffect(()=>{
        getData();
    },[])

    useEffect(()=>{
        if(!restroData){
            return
        }
        setFilterData(restroData.filter((res)=>res?.data.name?.includes(search)));
    },[search,restroData])
    
    return (
        filteredData ?
        <>
            <SearchBar search={search} setSearch={setSearch} />
            <div className="flex grid-gap-5 p10 flex-wrap">
                {
                    filteredData.map((restro,index)=>{
                        return(
                            <Link to={`/card-detail/${restro.data.id}`} key={index}>    
                                <RestroCard {...restro.data} />
                            </Link>
                        )
                    })
                }
            </div>
        </>
        : 
        <>
        NO DATA
        </>
    )
}
export default Home
