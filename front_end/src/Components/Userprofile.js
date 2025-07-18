import {React,useEffect,useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Heading from './Heading';
import Userprofilesearchbar from './Userprofilesearchbar';
import Loginusernavbar from './LoginuserNavbar';

export default function Userprofile(props) {
  const nevigate=useNavigate();
  const [userdata,setUserdata]=useState([]);
  const [selectedcollection,setSelectedCollection]= useState("");
  const [selectedoption,setSelectedoption]= useState("");
  const [data,setData]=useState([]);
  const [getsearchvalue,setSearchvalue]=useState([]);
  const [data2,setData2]=useState([]);
  const buy=["House","Flat","Plot","Farmhouse","Farm","StoreAndWarehouse"];
  const rent=["House","Flat","Hostel","StoreAndWarehouse"];
  function onSearch()
{
  axios.post(`http://localhost:3011/searchdata${selectedoption}${selectedcollection}`,{"searchvalue":getsearchvalue})
    .then((result) => {
      console.log(result);
      setData2(result.data); 
  }).catch((err) => {
        console.log(err);
  })  
}

  function editmobileno()
  {
    nevigate("/Editmobileno");
  }
  function editpassword()
  {
    nevigate("/Editpassword");
  }
  function editphoto()
  {
    nevigate("/Editphoto");
  }
  
    const eid=sessionStorage.getItem("eid");
    const ename=sessionStorage.getItem("name");
    const eaddress=sessionStorage.getItem("address");
    const epassword=sessionStorage.getItem("p");
    const emobileno=sessionStorage.getItem("mobileno");
    const eadharno=sessionStorage.getItem("adharno");
    const edob=sessionStorage.getItem("dob");
    const photo=sessionStorage.getItem("img");
  return (
    <div>
        <Heading title="User Profile"></Heading>
  
    <Loginusernavbar></Loginusernavbar>
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <div className="card p-4">
        <div className=" image d-flex flex-column justify-content-center align-items-center">
             <button className="btn btn-secondary"> <img src={"/images/Profilepicture/"+photo} height="100" width="100" /></button>
              <span className="name mt-3">{ename}</span> <span className="idd">{eid}</span>
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                 <span className="idd1">Address:{eaddress}</span> <span><i className="fa fa-copy"></i></span></div>
                 <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                 <span className="idd1">Mobile Number:{emobileno}</span> <span><i className="fa fa-copy"></i></span></div>
                 <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                 <span className="idd1">Date of Birth:{edob}</span> <span><i className="fa fa-copy"></i></span></div>
                 <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                 <span className="idd1">Adhar Number:{eadharno}</span> <span><i className="fa fa-copy"></i></span></div>
                 <br></br>
                 <div>
                 <button type="button" classNmae="btn btn-dark" onClick={editphoto}>Edit Profile Photo</button>
                 </div>
                 <br></br>
                 <div>
                 <button type="button" classNmae="btn btn-dark" onClick={editmobileno}>Edit Mobile Number</button>
                 </div>
                 <br></br>
                 <div>
                 <button type="button" classNmae="btn btn-dark" onClick={editpassword}>Change Password</button>
                 </div>
        </div>
    </div>
</div>
    <Userprofilesearchbar></Userprofilesearchbar>
    </div>
  )
}
