import React from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import { uuid } from 'uuidv4';

import "./App.css";



class App extends React.Component {
    items = [
        {
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://image.ibb.co/ncULza/1.jpg"
        },
        {
            name: "Nike Metcon 2",
            price: "130",
            color: "green",
            img: "https://image.ibb.co/hrDPQF/2.jpg"
        },
        {
            name: "Nike Metcon 2",
            price: "130",
            color: "blue",
            img: "https://image.ibb.co/kwdDKa/3.jpg"
        },
        {
            name: "Nike Metcon 2",
            price: "130",
            color: "black",
            img: "https://image.ibb.co/eWnUsv/4.jpg"
        },
        {
            name: "Nike free run",
            price: "170",
            color: "black",
            img: "https://image.ibb.co/fP2nUa/7.jpg"
        },
        {
            name: "Nike Metcon 3",
            price: "150",
            color: "green",
            img: "https://image.ibb.co/ifqwNv/5.jpg"
        },
    ];


    
    constructor(props) {
        super(props);
        this.state = {
            icon: "view_list"
        
      };   

      this.onSwitch = this.onSwitch.bind(this);
    }

    onSwitch() {

        let icon = this.state.icon === "view_list" ? "view_module" : "view_list";
        this.setState({ icon })
     
        }

     cards = this.items.map((product) => {
      
    return (<div key={uuid()} className="shop-card" style={{margin:"20px"}}>
        <div className="title" style={{ fontSize:"2rem", margin:'0px'}}>
            {product.name}
        </div>
        <div style={{fontSize:"2rem", margin:'0px'}} className="desc">
            {product.color}
        </div>
        <div className="slider">
            <figure>
                <img style={{maxWidth:"250px"}} src={product.img} alt={product.name}/>
            </figure>
        </div>

        <div className="cta">
            <div className="price" style={{fontSize:"2rem", margin:'10px'}}>"$"{product.price}</div>
            <button className = "btn btn-success" style = {{minWidth:"100px", borderRadius:"5px"}}>"Add to cart"</button> 
        </div>
    </div>)
     });
    
    

    render() {
        return (
            <div style={{maxWidth:"1500px"}}>
            <div style={{margin:'0px', }}>
                <div className="toolbar" style={{margin:"20px", maxWidth:"1500px" }} >

      <IconSwitch icon={this.state.icon}  onSwitch={this.onSwitch} style={{}}/>
                
       </div>
       <div style={{display:"flex", justifyContent:"center", maxWidth:"1500px",  }}>
       { this.state.icon === "view_list" ? <CardsView cards={this.cards} style={{flexWrap:"wrap"}} /> 
       :  <ListView items={this.items}/> }
         </div>
         </div>
         </div>
        )
    }


};

export default App;