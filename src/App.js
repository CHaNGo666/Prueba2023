import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

function App() {


  

useEffect(()=>{

axios.get("http://red666.somee.com/WeatherForecast")
.then(function (response){

  console.log(response.data)
})

},[])


  return (
  <>
  <h1>Prueba conexion</h1>
  
  
  </>
  );
}

export default App;

