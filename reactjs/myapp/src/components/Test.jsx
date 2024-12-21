import { useState } from "react";
function Test(){
    let [counter,updateCounter]=useState(0);
    return(
        <div>
          <h2>Initially Counter Value is :{counter}</h2>
          <button onClick={()=>updateCounter(++counter)}>Click Here</button>  
        </div>
    )
}
export default Test;