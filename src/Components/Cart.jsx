import { cartproduct, deleteproduct } from "../Redux/Cart/actions";
import "./Home.css";
import { Regtotal } from "../Redux/Total/actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {useState, useEffect} from "react"
export const Cart = () => {
     const { cartdata } = useSelector((state) => state.cartState);
      const { totalno } = useSelector((state) => state.totalState);
let [total, setTotal] = useState(0)
     const dispatch = useDispatch();
    console.log(totalno, " totalno")
     useEffect(()=>{
         getPrice()
     },[total])
function getPrice(){
    let pricee =0

    for (let i = 0; i < cartdata.length; i++){
        console.log(cartdata[i].Price);
        pricee += cartdata[i].Price
    }
    setTotal(pricee)
    dispatch(Regtotal(total))
}

     const removeCart = (id) =>{

         for (let i = 0; i < cartdata.length; i++){
             if (cartdata[i].id == id){
                 setTotal(total - cartdata[i].Price)
             }
         }
          dispatch(Regtotal(total));
        dispatch(deleteproduct(id))
        
     }
  return (
    <div id="griddataview1">
      <h1>Cart</h1>
      <div id="gridview1">
        {cartdata.map((item) => (
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
            <p>Offers Selected - {<b>{item.Offer}</b>} </p>

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
              Price: <b>₹{item.Price}</b>
            </p>
            <button
              className="btn"
              onClick={() => {
                removeCart(item.id);
              }}
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>

      <div></div>
      <div>
        <p>
          Total: <b>₹{totalno}</b>
        </p>
      </div>
      <Link to="/details">
        <button>Checkout</button>
      </Link>
    </div>
  );
};
