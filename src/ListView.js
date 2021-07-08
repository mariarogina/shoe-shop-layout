import React from 'react';
import uuid from 'react-uuid'
import PropTypes from 'prop-types';


const ListView = (props) => {
    let {items} = props;

    const listItems = items.map((item, i) => 
    (<li key={uuid()}>
             
                        <div className="shop-item" style = {{margin:'20px'}}>
                            <div className = "container" >
                            
                            
                            <div className="row" id="smallrow" style={{display:"flex", flexDirection:"row", flexWrap:"nowrap"}}>
                            <div className="col-lg-2" style = {{minWidth:"200px", borderRadius:"5px",  }}> <figure>
                                    <img style = {{width:"150px", borderRadius:"5px",  }} src={item.img} alt={item.name}/>
                                </figure>
                            </div>

                            
                            <div  className="col-lg-2" style = {{width:"200px", borderRadius:"5px", fontSize:"1.4rem", margin:'10px', paddingTop:'10px',  }} className="title">
                                {item.name}
                            </div>
                            <div  className="col-lg-2" style={{fontSize:"1.5rem", margin:'10px', paddingTop:'10px', }}>
                                {item.color}
                            </div>
                            
                            <div  className="col-lg-2" style={{fontSize:"1.5rem", margin:'10px', paddingTop:'10px',  }}>"$"{item.price}</div>
                            <div className="col-lg-2" style={{margin:'10px', textAlign:"center"}}><button className ="btn btn-success " style = {{minWidth:"130px", borderRadius:"5px", marginTop:'15px', marginLeft:"14px"}}>"Add to Cart"</button>
                            </div></div>
                       </div></div>
                         
                        </li>))
                    
      
    return (
        <ul className="list">
            {listItems}
        </ul>
    );
};
export default ListView;

ListView.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    
    items: PropTypes.array}