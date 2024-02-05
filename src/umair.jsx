import { useState } from "react";

function Umair() {


    const [name,stname]= useState('Entername')

    
    return ( 
        <div>

<h1>Hello world</h1>


<input type="text" onChange={(x)=>{stname(x.target.value)}}></input>
<button onClick={()=>{alert(name)}}>
    submit
</button>




        </div>
     );
}

export default Umair;