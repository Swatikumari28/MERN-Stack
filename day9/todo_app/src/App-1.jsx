import { useState } from 'react';

const App = ()=>{
  const [users, setUsers]=useState([]);
  const handleCreateUser=(e)=>{
    e.preventDefault();
    // console.log(e.target[0].value,e.target.username.value);
    // console.log(e.target[1].value,e.target.city.value);
    const username=e.target.username.value;
    const city=e.target.city.value;
    setUsers((prev)=>{
      const temp=[...prev];
      temp.push({username,city});
      return temp;
    });

  };
  return(
    <div>
      <form>
        <form onSubmit={handleCreateUser}></form>
        <input type="text" name="username"/>
        <input type ="text" name="city"/>
        <button>Add</button>
      </form>
      <div>
        {users.map((elem)=>{
          return{
            <div>
            <h1>{elem.username}</h1>
            <p>{elem.city}</p>
          </div>
          };
})};
      </div>
    </div>
};
      );
export default App;