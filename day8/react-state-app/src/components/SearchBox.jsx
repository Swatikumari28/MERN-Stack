import {useState} from "react";

const SearchBox =()=>{

    const [monitor,remote]=useState();
    
    //let searchText="Anuj";
    const handleSearch=(e)=>{
        
        // searchText=e.target.value;
        // console.log(searchText);
        remote(e.target.value);
        console.log(monitor);
    }
    return(
        <div>
            <input tyoe="text" onKeyUp={handleSearch} />
            <h1>monitor</h1>
        </div>
    )
};
export {SearchBox};