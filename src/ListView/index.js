import React from 'react';
import uuid from 'react-uuid'
import PropTypes from 'prop-types';


const ListView = (props) => {
    let {items} = props;

    const ShopItems = items.map((item, i) => 
    (<li key={uuid()}>
             
                        <div className="shop-item" style = {{margin:'20px', backgroundColor:"#ede9dd"}}>
                            <div className = "container" >
                            
                            
                            <div className="row" id="smallrow" style={{display:"flex", flexDirection:"row", flexWrap:"nowrap"}}>
                            <div className="col-lg-2" style = {{minWidth:"200px", borderRadius:"5px",  }}> <figure>
                                    <img style = {{width:"150px", borderRadius:"5px",  }} src={item.img} alt={item.name}/>
                                </figure>
                            </div>

                            
                            <div  className="col-lg-2 title" style = {{width:"240px", borderRadius:"5px", fontSize:"1.6rem", margin:'10px', paddingTop:'10px',  }}>
                                {item.name.toUpperCase()}
                            </div>
                            <div  className="col-lg-2" style={{fontSize:"1.5rem", margin:'10px', paddingTop:'10px', }}>
                                {item.color}
                            </div>
                            
                            <div  className="col-lg-2" style={{fontSize:"1.5rem", margin:'10px', paddingTop:'10px',color:'red'  }}>"$"{item.price}</div>
                            <div className="col-lg-2" style={{margin:'10px', textAlign:"center"}}><button className ="btn btn btn-outline-danger" style = {{minWidth:"130px", borderRadius:"15px", borderWidth:"3px", marginTop:'15px', marginLeft:"14px", fontWeight:"500"}}>"Add to Cart"</button>
                            </div></div>
                       </div></div>
                         
                        </li>))
                    
      
    return (
        <ul className="list">
            {ShopItems}
        </ul>
    );
};
export default ListView;

ListView.propTypes = {
    
    items: PropTypes.array}