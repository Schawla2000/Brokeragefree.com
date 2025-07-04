import {React,useEffect,useState} from 'react'
import Navbar2 from './Navbar2';
import Heading from './Heading';
import axios from 'axios';
import Searchbar from './Searchbar';
import Searchdata from './Searchdata';


export default function Dashboard() {
  const [data,setData]=useState([]);
  const [d2,setData2]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3011/searchdataHouse")
    .then(res=>{setData(res.data);console.log(res.data)})
    .catch(err=>console.log(err))
  },[]);


  return (

    <div >
      <Heading title="Welcome to BrokerageFree.com"></Heading>
    
        <Navbar2></Navbar2>
        <Searchbar></Searchbar>
        
    </div>
  )
}
