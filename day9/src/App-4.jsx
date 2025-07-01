import{useState} from "react";

const App=()=>{
  const[monitor, remote]= useState(0);
  console.log(monitor);

  const handleClick=()=>{
    remote((prev)=>{
      return prev+1;
    });
    remote((prev)=>{
      return prev+1;
    });
    
    console.log(monitor);
  };
  return(
    <div>
      <button onClick={handleClick}>ClickME</button>
      <h2>{monitor}</h2>
    </div>
  );
};
export default App;