// import logo from './logo.svg';
import { useEffect, useState } from 'react';

import './App.css';
import { Login } from './Login';

function App() {

  const [users, setUsers] = useState()

  // useEffect(() => {
  //   const userData = async () => {
  //     try {
  //       const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const data = await response.json();
  //       console.log(data);
  //       setUsers(data);

  //     } catch (e) { console.log(e) }
  //   }
  //   userData();

  // }, [])



  return (
    <div className="App">
      Hello World
      This is a react application!!
    <Login></Login>
    </div>
  );
}

export default App;
