import Heading from './Heading';
import React ,{useState,useEffect} from 'react';
import Axios from 'axios' //npm i axios
import '../Style/housestyle.css'
import {useNavigate} from "react-router-dom";
import Loginusernavbar from './LoginuserNavbar';
export default function Warehousesell()  {
    const nevigate=useNavigate();
    const [data,setData]=useState([]);
    var [district,setDistrict]=useState([]);
    const [getstate,setState]=useState('');
    const [getcity,setCity]=useState('');
    const [getimages,setgetImages]=useState('');

    useEffect(()=>{
        Axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[])

    const country=[...new Set(data.map(item=> item.country))];
    country.sort();
    const indiadata=data.filter(c=>c.country==='India');

    const states=[...new Set(indiadata.map(i=>i.subcountry))];
    states.sort();
        const [warehousedetails, setDetails] = useState(
            {
                name: '',
                address: '',
               noofgodowns:0,
                area:0,
                price:0,
                mobileno:0
            }
        );
  
        const handleSubmit = (e) => {
            e.preventDefault();
            const formData = new FormData();
                        
            formData.append('name', warehousedetails.name);
            formData.append('address', warehousedetails.address);
            formData.append('noofgodowns', warehousedetails.noofgodowns);
             formData.append('area', warehousedetails.area);
            formData.append('price', warehousedetails.price);
            formData.append('photos', getimages);
            formData.append('state',getstate );
            formData.append('district', getcity);
            formData.append('mobileno', warehousedetails.mobileno);
            if(warehousedetails.name && warehousedetails.address && getcity && (warehousedetails.mobileno>999999999 && warehousedetails.mobileno<9999999999)
            && getstate  && warehousedetails.area && warehousedetails.price && warehousedetails.noofgodowns)
            {
                 Axios({
                    method: "post",
                    url: "http://localhost:3011/insertwarehousedetails",
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                })
                .then((response) => {
                    alert(response.data.message);nevigate("/Loginuserdashboard")
                  }).catch(err=>console.log(err))
                }
                else{
                    alert("Error!!! Fill correct and mandatory data or incorrect mobile no.")
                }
        }
    
        const handleChange = (e) => {
            setDetails({...warehousedetails, [e.target.name]: e.target.value});
        }
    
        const handleState=(e)=>{
            setState(e.target.value);
            var cities=indiadata.filter(city=>city.subcountry===e.target.value);
            const city=[...new Set(cities.map(item=> item.name))];
            city.sort();
            setDistrict(city);
        }
        
        const handleCity=(e)=>{
            setCity(e.target.value);
        }

        const handlePhoto = (e) => {   
            if(e.target.files[0].size<1000000)
            {
              setgetImages(e.target.files[0]);
            }
            else{
                alert("Image size is greater than 1Mb");
            }
                      
      }
    
    return (
      <div>
          <Heading title="Warehouse Details"></Heading>
      
        <Loginusernavbar></Loginusernavbar>
      <div id="main2">
            <form encType="multipart/form-data" method='post' onSubmit={handleSubmit}>
                <table style={{marginLeft:"15%"}}>
                    <tr><td className='d'>Enter your Full name</td><td><input type="text"placeholder="name"
                name="name"value={warehousedetails.name} onChange={handleChange}/></td></tr>

        <tr><td className='d'>Enter Mobile No</td><td><input type="number" id="mobileno"
                    name='mobileno' value={warehousedetails.mobileno} onChange={handleChange}></input></td></tr>

                    <tr><td className='d'>Enter your Address</td><td><textarea rows="5" id="address"
                    placeholder="Enter Your Address" name='address'value={warehousedetails.address} 
                    onChange={handleChange}></textarea></td></tr>

                    <tr>
                        <td><select name='state'  onChange={handleState}>
                        <option >--Select State--</option>
                        {
                            states.map( (item,index)=>
                                <option key={index} >{item}</option>
                            )
                        }
                        </select></td>
                        <td><select name="district"  onChange={handleCity}>
                        <option >--Select District--</option>
                        {
                            district.map( (item)=>
                                <option >{item}</option>
                            )
                        }
                        </select></td></tr>

                    <tr><td className='d'>Enter no ofgodowns</td><td><input type="number" id="noofgodowns" min="0"
                    name='noofgodowns'value={warehousedetails.noofgodowns} onChange={handleChange}></input></td></tr>
                

                    <tr><td className='d'>Enter Area of Warehouse</td><td><input type="number" id="area" min="0" placeholder="in Sq.Ft"
                    name='area' value={warehousedetails.area} onChange={handleChange}></input></td></tr>

                    <tr><td className='d'>Enter Price of Warehouse</td><td><input type="number" id="price" min="0" 
                    name='price' value={warehousedetails.price} onChange={handleChange}></input></td></tr>
                
                <tr><td className='d'><input type="file" accept=".png, .jpg, .jpeg,.jfif" name="photos" onChange={handlePhoto} /></td></tr>

                    <tr><td className='d' style={{textAlign: "center"}} colSpan="2"><input type="submit"></input></td></tr>

                </table>
            </form>  
            </div>
    </div>
    );
  }
  
