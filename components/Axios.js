import axios from 'axios';

const ApiPath='https://pokeapi.co/api/v2/pokemon/151';

export const Get= ()=>{
 axios.get(ApiPath).then(res=>{console.log(res)});
  }

export const Post= (value)=>{
 axios.get(ApiPath+value).then(res=>{console.log(res)});
  }
