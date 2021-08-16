import React,{useState,useEffect} from 'react';

import './App.css';
import Noticias from './components/Noticias'
import Carrito from './components/Carrito'
import LasNoticias from './components/LasNoticias';


function App() {

const[noticiasAPI,setNoticiasAPI] = useState([]);
const[categoria,setCategoria]= useState("");

const url= 'http://newsapi.org/v2/top-headlines?category=${categoria}&country=ar&apiKey=6d1593a414284a288d9159a162a2f9be';

const fetchApi = async()=>{

 try{
    const respuesta = await fetch (url);
    const resultado = await respuesta.json();
    console.log(resultado);

    setNoticiasAPI(resultado);




  }catch(error){
    console.log(error)
  }
}


useEffect(()=>{

  fetchApi();

},[])

  return (
    <div>
      
      <LasNoticias noticiasAPI={noticiasAPI}></LasNoticias>
    </div>
  );
}

export default App;
