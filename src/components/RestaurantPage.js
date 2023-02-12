import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CDN_URL } from "./Config";
const RestaurantPage = ()=>{
    const [restaurantDescription , setRestaurantDescription] = useState({})
    useEffect(()=>{
        getRestaurantMenu()
    },[]);
    async function getRestaurantMenu(){
        const restaurantMenuData = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=19.027643&lng=72.850272&menuId=337815")
        const dataJSON = await restaurantMenuData.json()
        console.log(dataJSON.data)
        setRestaurantDescription(dataJSON.data)
        // const {id, resName}
    }
    const params = useParams()
    const {id} = params
    return (
        <>
        <div>
        <h1>Restaurant Id: </h1>
        <h1>Restaurant Name : {restaurantDescription.name}</h1>
        <img src={CDN_URL + restaurantDescription.cloudinaryImageId} />
        </div>
        <div>
            <h1>Menu</h1>
            {/* <ul>{restaurantDescription?.menu?.items&&Object.values(restaurantDescription.menu.items).map((item)=>(
                <li key={item.id}>{item.menu}</li>
            ))}</ul> */}
            {console.log(restaurantDescription.menu.items)}
        </div>
        </>
    )
}

export default RestaurantPage