import React from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";

const CardsView = (props) => {
  let { cards } = props;

  let shopcards = cards.map((product) => {
    return (
      
       <div key={uuid()} className = "shop-card col-lg-3 col-md-6 mb-2"
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              margin: "30px",
              maxWidth: "400px",
              backgroundColor:"#ede9dd", 
              boxShadow: "8px 3px 3px grey"
            }}
          >
      
        <div className="title" style={{ fontSize: "2rem", margin: "0px" }}>
          {product.name.toUpperCase()}
        </div>
        <div style={{ fontSize: "2rem", margin: "0px" }} className="desc">
          {product.color}
        </div>

        <img
          style={{ maxWidth: "250px" }}
          src={product.img}
          alt={product.name}
        />

        <div className="row" style={{marginTop:"20px",maxWidth:"350px"}}>
          <div
            className="price col"
            style={{ fontSize: "1.6rem", color: "red" }}
          >
            "$"{product.price}
          </div>

          <div className="col">
            <button
              className="btn btn btn-outline-danger"
              style={{
                minWidth: "100px",
                borderRadius: "15px",
                borderWidth: "3px",
                fontWeight: "500",
              }}
            >
              "Add to cart"
            </button>
          </div>
        </div>
      </div>
      
      
    );
  });

  
      return (
        <div className = "row">
       
         
            
              {shopcards}
            
          </div>
        
        
        
      );
    }

 
export default CardsView;

CardsView.propTypes = {
  cards: PropTypes.array,
};
