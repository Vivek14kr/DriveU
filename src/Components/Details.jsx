
import { useDispatch, useSelector } from "react-redux";
import "./Home.css"
export const Details = ()=>{
       const { totalno } = useSelector((state) => state.totalState);

   
     const { cartdata } = useSelector((state) => state.cartState);

    return (
      <div id="griddataview1">
        <div id="bgcolor">
          <div id="gridview2">
            {cartdata.map((item) => (
              <div key={item.id} className="griddata">
                <img
                  className="shopimg"
                  src={item.shopdetails.shopimage}
                  alt=""
                />

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
                <p>Offers Available - {<b>{item.Offer}</b>}</p>

                <p>
                  {" "}
                  Online Payment:{" "}
                  {item.onlinePayment ? (
                    <b>Available</b>
                  ) : (
                    <b> Not Available</b>
                  )}
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
              </div>
            ))}
          </div>
          <div>
            Total : <b>₹{totalno}</b>
          </div>
          <h2>Thank you for choosing our services</h2>
        </div>
      </div>
    );
}