import React from 'react';
import { uuid } from 'uuidv4';


const ListView = (props) => {
    let {items} = props;

    const listItems = items.map((item, i) => 
    (<li key={uuid()}>
             
                        <div className="shop-item" style = {{margin:'20px'}}>
                            <div className = "container" >
                            
                            
                            <div className="row" style={{display:"flex", flexDirection:"row"}}>
                            <div className="col-lg-2" style = {{minWidth:"200px", borderRadius:"5px",  }}> <figure>
                                    <img style = {{width:"150px", borderRadius:"5px",  }} src={item.img} alt={item.name}/>
                                </figure>
                            </div>

                            
                            <div  className="col-lg-2" style = {{width:"220px", borderRadius:"5px", fontSize:"1.4rem", margin:'10px', paddingTop:'20px',  }} className="title">
                                {item.name}
                            </div>
                            <div  className="col-lg-2" style={{fontSize:"1.5rem", margin:'10px', paddingTop:'20px', }}>
                                {item.color}
                            </div>
                            
                            <div  className="col-lg-2" style={{fontSize:"1.5rem", margin:'10px', paddingTop:'20px',  }}>"$"{item.price}</div>
                            <div className="col-lg-2" style={{margin:'10px', textAlign:"center"}}><button className ="btn btn-success " style = {{minWidth:"150px", borderRadius:"5px", marginTop:'25px', marginLeft:"34px"}}>"Add to Cart"</button>
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