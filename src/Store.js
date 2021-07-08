import React from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
import uuid from "react-uuid";

import "./App.css";

class Store extends React.Component {
  items = [
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://image.ibb.co/ncULza/1.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://image.ibb.co/hrDPQF/2.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://image.ibb.co/kwdDKa/3.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://image.ibb.co/eWnUsv/4.jpg",
    },
    {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://image.ibb.co/fP2nUa/7.jpg",
    },
    {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://image.ibb.co/ifqwNv/5.jpg",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      icon: "view_list",
    };

    this.onSwitch = this.onSwitch.bind(this);
  }

  onSwitch() {
    let icon = this.state.icon === "view_list" ? "view_module" : "view_list";
    this.setState({ icon });
  }

  cards = this.items.map((product) => {
    return (
      <div key={uuid()} className="shop-card" style={{ margin: "20px" }}>
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

  render() {
    return (
      <div style={{ maxWidth: "1500px" }}>
        <div style={{ margin: "0px" }}>
          <div
            className="toolbar"
            style={{ margin: "20px", maxWidth: "1500px" }}
          >
            <IconSwitch icon={this.state.icon} onSwitch={this.onSwitch} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "1500px",
            }}
          >
            {this.state.icon === "view_list" ? (
              <CardsView cards={this.cards} style={{ flexWrap: "wrap" }} />
            ) : (
              <ListView items={this.items} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
