import{useState} from "react";

const App=()=>{
  // let searchText="Arun";
  const[monitor, remote]= useState(0);

  const handleSearch=(e)=>{
    const value=e.target.value;
    //searchText=value;
    remote(value);
    console.log(monitor);
  }
  return(
    <div>
      <input type="text" onKeyUp={handleSearch}/>
      <h2>{monitor}</h2>
    </div>
  );
};
export default App;