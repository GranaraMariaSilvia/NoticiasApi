/*import React ,{Component, Fragment} from 'react';

import {categorias, getApiUrl} from './config';

class Noticias extends Component{

    constructor(){
    super();
    this.state = {
            categorias:'',
            listaNoticias: [],
         };
    }

    componentDidMount(){
      this.fetchNoticias();
    }


seleccionarcategoria = evt =>{
 this.setState({categoria:evt.target.value},this.fetchNoticias);
}




fetchNoticias = () =>{
  fetch(getApiUrl(this.state.categoria))
  .then(response=> {
    return response.json();
  })
  .then(myJson=> {
    this.setState({listaNoticias:myJson.articles})
   
  });
}




  render(){
     return(
         <div>
           <h1>Noticias</h1>
          <form onSubmit = {evt=> evt .preventDefault()}>
       <select name="categoria" onChange = {this.seleccionarcategoria}>
         <option value= ''></option>
         {
           categorias.map(option =>(
         <option value={option}>{option}</option>

           ))

         }
       </select>
          </form>
        
          <div className="listaNoticias">
            {
             this.state.listaNoticias.map(noticias =>(
             <div className="noticias" > 
             <h2>{noticias.title}</h2>
             <h4>{noticias.descripcion}</h4>
             <img src={noticas.urlToImage} alt={noticias.title}/>
           <div>{noticias.content}</div>
           <a href={noticias.url} target='_blank'> Ver mas...</a>

           <hr/>

             <div/>
           
           
              ) )
            }
         <div/>
          
      </div>
    
  }
}
                
              

export default Noticias;*/