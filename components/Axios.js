import React from 'react';
import axios from 'axios';
const Axios: () => React$Node = async () => {
    const ApiPath='https://pokeapi.co/api/v2/pokemon/151';



const Get= ()=>{
 axios.get(ApiPath).then(res=>{console.log(res)});
  }

  const Post= (value)=>{
 axios.get(ApiPath+value).then(res=>{console.log(res)});
  }
    
}


export default Axios;