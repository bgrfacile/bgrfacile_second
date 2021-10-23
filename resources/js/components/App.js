import React, { useState } from "react";

const App = ()=>{
    const [count,setCount]=useState(0);
    return(
        <div>
            <p>Bienvenue dans le composent application course</p>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>incremente</button>
        </div>
    );
}

export default App;
