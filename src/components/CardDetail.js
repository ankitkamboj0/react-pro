import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import RestroCard from "components/RestroCard"
const CardDetail = ()=>{
    const {id} = useParams()
    console.log("id",id)
    const [cardData,setCardData] = useState(null); 
    const getCardData = async()=>{
        await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=28.9917964&lng=76.9859077&menuId=${id}`).then(data=>data.json()).then(({data})=>setCardData(data));
    }

    useEffect(()=>{
        getCardData();
    },[])
    return(
        !cardData ?
            <>Loading Data</>
            :
            <div>
                <RestroCard {...cardData}/>
            </div>
        
    )
}
export default CardDetail;