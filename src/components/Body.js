import { useEffect, useState } from "react";
import ProductCard, { RestaurantList } from "./Cards";
import ShimmerUI from "./Shimmer";


const filterData =(searchText , restaurants)=>{
    return restaurants.filter(restaurant => {
        return restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
});
}


const Body = () => {
    const [restaurants, setRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    const[ booleanState , setBooleanState ]= useState(true)
    const [defaultRestaurant , setDefaultRestaurant] = useState([]);

    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData(){
        const restaurantApi= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.027643&lng=72.850272&page_type=DESKTOP_WEB_LISTING")
        const resJSON = await restaurantApi.json();
        // console.log(resJSON);
        // console.log(resJSON);
        setRestaurants(resJSON?.data?.cards[2]?.data?.data?.cards)
        setDefaultRestaurant(resJSON?.data?.cards[2]?.data?.data?.cards)
    }

        return defaultRestaurant.length === 0 ? <ShimmerUI /> :(
        <>
        <div className="page-body">
            <div className="search-box">
                <input type="text" className="search-input" placeholder="Search" value={searchText} 
                onChange={(e) => { 
                    setSearchText (e.target.value)
                }} 
                />
                <button className="btn-search" onClick={()=>{
                    const data = filterData(searchText, defaultRestaurant);
                    setRestaurants(data)
                    setBooleanState(!booleanState);
                }}>Search</button>
            </div>
                
            <div className="product-card-container">
                {restaurants.map((restaurant) => {
                    return <ProductCard {...restaurant.data}  />
                })}
            </div>
        </div></>

    )
}

export default Body;