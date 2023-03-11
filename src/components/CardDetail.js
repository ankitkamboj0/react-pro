import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import RestroCard from "components/RestroCard"
import {Restro} from "common/config"
const CardDetail = ()=>{
    const {id} = useParams()
    console.log("id",id)
    const [cardData,setCardData] = useState(null); 
    const getCardData = async()=>{
        await fetch(`${Restro}=${id}`).then(data=>data.json()).then(({data})=>setCardData(data));
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