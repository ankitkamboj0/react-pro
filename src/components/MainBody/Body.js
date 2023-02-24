import RestroCard from "components/RestroCard"
const restroData = [
    {
    img:"https://dummyimage.com/600x400/000/fff",
    "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
        ],
      name:"KFC",  
},
{
    img:"https://dummyimage.com/600x400/000/fff",
    "cuisines": [
        "American",
        "Snacks",
        "Fast Food"
        ],
      name:"GFC",  
},
{
    img:"https://dummyimage.com/600x400/000/fff",
    "cuisines": [
        "Burgers",
        "Biryani",
        ],
      name:"TFC",  
}
]
const Body = () =>{
    return (
        <div className="flex grid-gap-5 p10">
            {
                restroData.map((restro,index)=>{
                    return(
                        <RestroCard {...restro} key={index}/>
                    )
                })
            }
        </div>
    )
}
export default Body
