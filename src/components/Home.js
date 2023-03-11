import { useEffect, useState } from "react"
import RestroCard from "components/RestroCard"
import SearchBar from "components/Search"
import {URL} from "common/config"
import Shimmer from "components/Shimmer"
const Home = () =>{
    const [search,setSearch] = useState("");
    const [restroData,setRestroData] = useState(null);
    const [filteredData,setFilterData] = useState(null);
    const checkLocationOfData = (data)=>{
        try {
            const index = data.cards.findIndex((card)=>card.cardType == 'seeAllRestaurants');  
            return data?.cards[index].data.data.cards
        } catch (error) {
            console.log(error)
            return []
        }
    }

    const  getData = async()=>{
        try {
            await fetch(URL).then((data)=>data.json()).then(({data})=>{
                setRestroData(checkLocationOfData(data));
                setFilterData(checkLocationOfData(data));
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
            <div className="flex grid-gap-20 p10 flex-wrap">
                {
                    filteredData.map((restro,index)=>{
                        return(
                            <RestroCard key={index} {...restro.data} />
                        )
                    })
                }
            </div>
        </>
        : 
        <>
        <Shimmer lengthOfBlocks={12} />
        </>
    )
}
export default Home
