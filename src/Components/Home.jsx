import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Regproduct } from "../Redux/Products/actions";
import {cartproduct} from "../Redux/Cart/actions"
import { Link } from "react-router-dom";
import "./Home.css"
export const Home = ()=>{

    // let [dataa, setData] = useState([])
  
    let [offer, setoffer] = useState("")
    const { data } = useSelector((state) => state.regState);
   const { cartdata } = useSelector((state) => state.cartState);

    const dispatch = useDispatch();
    useEffect(()=>{
        fetchPost()
    },[])

  const fetchPost = async () => {
   
    const baseURL = "https://punctureshops.herokuapp.com/shops";
    await fetch(baseURL)
      .then((resp) => resp.json())
      .then((dataa) => dispatch(Regproduct(dataa)));
    
  };
  console.log(data)
    const AddCart =  (id)=>{
        console.log(offer)
  let obj = {}
let k = "Offer"
let qq = "Price"
  for (let i = 0; i < data.length; i++){
      if (data[i].id === id){
          obj = data[i]
      }
  }
  console.log(obj , " obj")


       let price = 0;
  for (let j = 0; j < data.length; j++){
      let info = data[j]
      
          if (data[j].id === id) {
            for (let k = 0; k < info.shopdetails.shopoffer.length; k++){
                   let itemd = info.shopdetails.shopoffer[k];
                   if (itemd.item == offer){
                       price = itemd.price
                   }
            }
          }
        }
    //   if (info.item == offer){
    //       price = info.price
    //   }

  
  obj[k] = offer;
  obj[qq] = price
  dispatch(cartproduct(obj))

    }
   let [location, setLocation] = useState("")
   let [street, setStreet] = useState("")
   let [discount, setDiscount] = useState("")
  

  const  FilterSearchshop = async ()=>{

   
   let newdata = data.filter(
     (item) => item.location == location && item.street == street
   );

   dispatch(Regproduct(newdata));
   
 

  }
  const handleDiscount = async()=>{
  
     let sendingdata = []

     if (discount == "less"){
       for (let i = 0; i < data.length; i++){
         if (data[i].discount < 20){
           sendingdata.push(data[i])
         }
       }
     }else {
       for (let i = 0; i < data.length; i++){
         if (data[i].discount > 20){
           sendingdata.push(data[i])
         }
       }
     }

     console.log(sendingdata);
     dispatch(Regproduct(sendingdata));
  }
  const sortltoh = ()=>{
let newdata = data.sort((a, b)=>{
  return a.rating - b.rating
})
dispatch(Regproduct(newdata));



  }
  const sorthtol = ()=>{
let newdata = data.sort((a, b) => {
  return b.rating - a.rating;
});
dispatch(Regproduct(newdata));

  }

  const handleOnline = ()=>{
    let neww = data.filter(item => item.onlinePayment == true)
   dispatch(Regproduct(neww));
  }
  let [radius, setRadius] = useState("")

  const handleRadius = ()=>{
    let newdata = []
    if (radius == "100"){
      newdata = data.filter(item => item.radius <= 100)
    }else if (radius == "500"){
      newdata = data.filter((item) => item.radius > 100 && item.radius <= 500);
    }else if (radius == ">500"){
         newdata = data.filter((item) =>  item.radius >500);
    } 
    
    
    dispatch(Regproduct(newdata));
  }
   return (
     <div className="gridviewdata">
       <h1>Shops Available</h1>
       <Link to="/cart">
         <button className="btn">Go To Cart</button>
       </Link>

       <div>
         <b>FILTER</b>
         <div>
           <select
             onChange={(e) => {
               setLocation(e.target.value);
             }}
             name="seletedoffer"
             id="cars"
           >
             <option value="">Choose Location</option>
             <option value="Kanpur">Kanpur</option>
             <option value="Delhi">Delhi</option>
             <option value="Mumbai">Mumbai</option>
           </select>
           {location === "Kanpur" ? (
             <select
               onChange={(e) => {
                 setStreet(e.target.value);
               }}
             >
               <option value="">Choose Street</option>
               <option value="Vihar">Vihar</option>
             </select>
           ) : location === "Mumbai" ? (
             <select
               onChange={(e) => {
                 setStreet(e.target.value);
               }}
             >
               <option value="">Choose Street</option>
               <option value="Juhu">Juhu</option>
               <option value="Rehta">Rehta</option>
             </select>
           ) : (
             <select
               onChange={(e) => {
                 setStreet(e.target.value);
               }}
             >
               <option value="">Choose Street</option>
               <option value="Dwarka">Dwarka</option>
               <option value="Ashok Vihar">Ashok Vihar</option>
             </select>
           )}
           <button onClick={FilterSearchshop}>Search Shops</button>
         </div>
         <b>FILTER BY RATINGS</b>
         <div>
           <button onClick={sortltoh}>Sort: Low To High</button>
           <button onClick={sorthtol}>Sort: High To Low</button>
         </div>
         <button onClick={handleOnline}>Online Payment Available</button>
       </div>
       <div>
         <b>Discount Availbility - </b>
         <select
           onChange={(e) => {
             setDiscount(e.target.value);
           }}
         >
           <option value="">Choose DIscounts</option>
           <option value="less">Less than 20</option>
           <option value="more">More than 20</option>
         </select>
         <button onClick={handleDiscount}>Search</button>
       </div>
       <div>
         <b>Radius - </b>
         <select
           onChange={(e) => {
             setRadius(e.target.value);
           }}
         >
           <option value="">Choose Radius</option>
           <option value="100">0-100 m </option>
           <option value="500">100-500 m</option>
           <option value=">500">More than 500 m </option>
         </select>
         <button onClick={handleRadius}>Search</button>
       </div>

       <div id="gridview">
         {data.map((item) => (
           <div key={item.id} className="griddata">
             <img className="shopimg" src={item.shopdetails.shopimage} alt="" />

             <h1 className="shopname">{item.shopdetails.shopname}</h1>
             <p>Owner - {item.shopdetails.shopownername}</p>
             <p>Two or Four Wheelers </p>
             <p>
               {item.wheelers == "both" ? (
                 <b>Both</b>
               ) : item.wheelers == "two" ? (
                 <b>Two</b>
               ) : (
                 <b>Four</b>
               )}
             </p>
             <p>Location : {<b>{item.location}</b>}</p>
             <p>Street : {<b>{item.street}</b>}</p>
             <p>Radius: {<b>{item.radius}m</b>}</p>
             <p>Services Available- </p>
             <select
               onChange={(e) => {
                 setoffer(e.target.value);
               }}
               name="seletedoffer"
               id="cars"
             >
               <option value="">Choose Offer</option>
               <option value="Puncture">
                 {item.shopdetails.shopoffer[0].item}
               </option>
               <option value="Brake Fail">
                 {item.shopdetails.shopoffer[1].item}
               </option>
               <option value="Manufacturing">
                 {item.shopdetails.shopoffer[2].item}
               </option>
               <option value="Crash Repairing">
                 {item.shopdetails.shopoffer[3].item}
               </option>
               <option value="Polishing">
                 {item.shopdetails.shopoffer[4].item}
               </option>
             </select>
             <p>
               {" "}
               Online Payment:{" "}
               {item.onlinePayment ? <b>Available</b> : <b> Not Available</b>}
             </p>
             <p>
               Rating:{" "}
               {item.rating == 0 ? <b>No Reviews</b> : <b>{item.rating}</b>}
             </p>
             <p>
               Discount:{" "}
               {item.discount == 0 ? (
                 <b>Not Available</b>
               ) : (
                 <b>{item.discount}%</b>
               )}
             </p>
             <button
               className="btn"
               onClick={() => {
                 AddCart(item.id);
               }}
             >
               Add to Cart
             </button>
           </div>
         ))}
       </div>
     </div>
   );
            }