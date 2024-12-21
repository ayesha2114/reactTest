import { useState ,useEffect} from "react";

function Test12(){
    let [city, setCity]=useState("Banglore");
    useEffect(()=>{
        if(city==="Warangal")
            {
                setCity("Hyderabad")
            }
            else{
                setCity("Chennai")
            }

    },[])
    return(
        <div>
         {city}  
        </div>
    )
}
export default Test12;