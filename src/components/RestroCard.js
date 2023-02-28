import {imgUrl} from "common/config";

const RestroCard = ({cloudinaryImageId,name,cuisines})=>{
    const cardStyle = {
        border:"1px solid #000",
        width:"200px"
    }
    const img = imgUrl+"/"+cloudinaryImageId;
    return (
        <div className="flex flex-column grid-gap-5 p10" style={cardStyle}>
            <img src={img} width="200px"></img>
                <p>{name}</p>
                <p>{cuisines?.join(", ")}</p>
        </div>
    )
}
export default RestroCard