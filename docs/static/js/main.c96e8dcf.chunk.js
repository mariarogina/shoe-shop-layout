(this.webpackJsonplayout=this.webpackJsonplayout||[]).push([[0],{10:function(e,t,i){},16:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),s=i(11),r=i.n(s),a=(i(16),i(3)),l=i(4),o=i(7),d=i(6),m=i(5),p=(i(17),i(0)),j=function(e){var t=e.name,i=e.size,c=e.onSwitch;return Object(p.jsx)("i",{className:"material-icons",style:{fontSize:i},onClick:c,children:t})},x=function(e){var t=e.icon,i=e.onSwitch;return Object(p.jsx)("div",{style:{textAlign:"right",position:"relative"},className:"switch-view",children:Object(p.jsx)(j,{size:42,name:t,onSwitch:i})})},b=i(2),h=i.n(b),g=function(e){var t=e.cards;return Object(p.jsx)("div",{className:"row",children:function(e){return e.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("div",{style:{paddingLeft:"20px",paddingRight:"20px",margin:"30px",maxWidth:"400px",backgroundColor:"#ede9dd",boxShadow:"8px 3px 3px grey"},children:Object(p.jsx)("div",{className:"col-lg-3 col-md-6 mb-2",children:e},h()())})})}))}(t)})},u=i(9),O=function(e){var t=e.items.map((function(e,t){var i;return Object(p.jsx)("li",{children:Object(p.jsx)("div",{className:"shop-item",style:{margin:"20px",backgroundColor:"#ede9dd"},children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",id:"smallrow",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap"},children:[Object(p.jsxs)("div",{className:"col-lg-2",style:{minWidth:"200px",borderRadius:"5px"},children:[" ",Object(p.jsx)("figure",{children:Object(p.jsx)("img",{style:{width:"150px",borderRadius:"5px"},src:e.img,alt:e.name})})]}),Object(p.jsx)("div",(i={className:"col-lg-2",style:{width:"240px",borderRadius:"5px",fontSize:"1.6rem",margin:"10px",paddingTop:"10px"}},Object(u.a)(i,"className","title"),Object(u.a)(i,"children",e.name.toUpperCase()),i)),Object(p.jsx)("div",{className:"col-lg-2",style:{fontSize:"1.5rem",margin:"10px",paddingTop:"10px"},children:e.color}),Object(p.jsxs)("div",{className:"col-lg-2",style:{fontSize:"1.5rem",margin:"10px",paddingTop:"10px",color:"red"},children:['"$"',e.price]}),Object(p.jsx)("div",{className:"col-lg-2",style:{margin:"10px",textAlign:"center"},children:Object(p.jsx)("button",{className:"btn btn btn-outline-danger",style:{minWidth:"130px",borderRadius:"15px",borderWidth:"3px",marginTop:"15px",marginLeft:"14px",fontWeight:"500"},children:'"Add to Cart"'})})]})})})},h()())}));return Object(p.jsx)("ul",{className:"list",children:t})},v=(i(10),function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(e){var c;return Object(a.a)(this,i),(c=t.call(this,e)).items=[{name:"Nike Metcon 2",price:"130",color:"red",img:"https://image.ibb.co/ncULza/1.jpg"},{name:"Nike Metcon 2",price:"130",color:"green",img:"https://image.ibb.co/hrDPQF/2.jpg"},{name:"Nike Metcon 2",price:"130",color:"blue",img:"https://image.ibb.co/kwdDKa/3.jpg"},{name:"Nike Metcon 2",price:"130",color:"black",img:"https://image.ibb.co/eWnUsv/4.jpg"},{name:"Nike free run",price:"170",color:"black",img:"https://image.ibb.co/fP2nUa/7.jpg"},{name:"Nike Metcon 3",price:"150",color:"green",img:"https://image.ibb.co/ifqwNv/5.jpg"}],c.cards=c.items.map((function(e){return Object(p.jsxs)("div",{className:"shop-card",style:{margin:"20px"},children:[Object(p.jsx)("div",{className:"title",style:{fontSize:"2rem",margin:"0px"},children:e.name.toUpperCase()}),Object(p.jsx)("div",{style:{fontSize:"2rem",margin:"0px"},className:"desc",children:e.color}),Object(p.jsx)("img",{style:{maxWidth:"250px"},src:e.img,alt:e.name}),Object(p.jsxs)("div",{className:"row",style:{marginTop:"20px",maxWidth:"350px"},children:[Object(p.jsxs)("div",{className:"price col",style:{fontSize:"1.6rem",color:"red"},children:['"$"',e.price]}),Object(p.jsx)("div",{className:"col",children:Object(p.jsx)("button",{className:"btn btn btn-outline-danger",style:{minWidth:"100px",borderRadius:"15px",borderWidth:"3px",fontWeight:"500"},children:'"Add to cart"'})})]})]},h()())})),c.state={icon:"view_list"},c.onSwitch=c.onSwitch.bind(Object(m.a)(c)),c}return Object(l.a)(i,[{key:"onSwitch",value:function(){var e="view_list"===this.state.icon?"view_module":"view_list";this.setState({icon:e})}},{key:"render",value:function(){return Object(p.jsx)("div",{style:{maxWidth:"1500px"},children:Object(p.jsxs)("div",{style:{margin:"0px"},children:[Object(p.jsx)("div",{className:"toolbar",style:{margin:"20px",maxWidth:"1500px"},children:Object(p.jsx)(x,{icon:this.state.icon,onSwitch:this.onSwitch})}),Object(p.jsx)("div",{style:{display:"flex",justifyContent:"center",maxWidth:"1500px"},children:"view_list"===this.state.icon?Object(p.jsx)(g,{cards:this.cards,style:{flexWrap:"wrap"}}):Object(p.jsx)(O,{items:this.items})})]})})}}]),i}(n.a.Component)),f=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(p.jsx)(v,{})}}]),i}(n.a.Component),y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,20)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root")),y()}},[[19,1,2]]]);
//# sourceMappingURL=main.c96e8dcf.chunk.js.map