(this.webpackJsonplayout=this.webpackJsonplayout||[]).push([[0],{15:function(e,t,i){},22:function(e,t,i){},24:function(e,t,i){"use strict";i.r(t);var c=i(1),s=i.n(c),n=i(6),a=i.n(n),r=(i(15),i(7)),l=i(8),o=i(3),d=i(10),m=i(9),j=(i(16),i(0)),b=function(e){var t=e.name,i=e.size;return Object(j.jsx)("i",{className:"material-icons",style:{fontSize:i},children:t})},x=function(e){var t=e.icon,i=e.onSwitch;return Object(j.jsx)("div",{style:{textAlign:"right"},className:"switch-view",onClick:i,children:Object(j.jsx)(b,{size:42,name:t})})},p=i(2),h=function(e){var t=e.cards;return Object(j.jsx)("div",{className:"row",children:function(e){return e.map((function(e){return Object(j.jsx)("div",{className:"row",style:{margin:"0px",maxWidth:"1200px"},children:Object(j.jsx)("div",{className:"col-lg-3 col-md-6 mb-2",children:e},Object(p.uuid)())})}))}(t)})},u=i(5),g=function(e){var t=e.items.map((function(e,t){var i;return Object(j.jsx)("li",{children:Object(j.jsx)("div",{className:"shop-item",style:{margin:"20px"},children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",style:{display:"flex",flexDirection:"row"},children:[Object(j.jsxs)("div",{className:"col-lg-2",style:{minWidth:"200px",borderRadius:"5px"},children:[" ",Object(j.jsx)("figure",{children:Object(j.jsx)("img",{style:{width:"150px",borderRadius:"5px"},src:e.img,alt:e.name})})]}),Object(j.jsx)("div",(i={className:"col-lg-2",style:{width:"220px",borderRadius:"5px",fontSize:"1.4rem",margin:"10px",paddingTop:"20px"}},Object(u.a)(i,"className","title"),Object(u.a)(i,"children",e.name),i)),Object(j.jsx)("div",{className:"col-lg-2",style:{fontSize:"1.5rem",margin:"10px",paddingTop:"20px"},children:e.color}),Object(j.jsxs)("div",{className:"col-lg-2",style:{fontSize:"1.5rem",margin:"10px",paddingTop:"20px"},children:['"$"',e.price]}),Object(j.jsx)("div",{className:"col-lg-2",style:{margin:"10px",textAlign:"center"},children:Object(j.jsx)("button",{className:"btn btn-success ",style:{minWidth:"150px",borderRadius:"5px",marginTop:"25px",marginLeft:"34px"},children:'"Add to Cart"'})})]})})})},Object(p.uuid)())}));return Object(j.jsx)("ul",{className:"list",children:t})},O=(i(22),function(e){Object(d.a)(i,e);var t=Object(m.a)(i);function i(e){var c;return Object(r.a)(this,i),(c=t.call(this,e)).items=[{name:"Nike Metcon 2",price:"130",color:"red",img:"https://image.ibb.co/ncULza/1.jpg"},{name:"Nike Metcon 2",price:"130",color:"green",img:"https://image.ibb.co/hrDPQF/2.jpg"},{name:"Nike Metcon 2",price:"130",color:"blue",img:"https://image.ibb.co/kwdDKa/3.jpg"},{name:"Nike Metcon 2",price:"130",color:"black",img:"https://image.ibb.co/eWnUsv/4.jpg"},{name:"Nike free run",price:"170",color:"black",img:"https://image.ibb.co/fP2nUa/7.jpg"},{name:"Nike Metcon 3",price:"150",color:"green",img:"https://image.ibb.co/ifqwNv/5.jpg"}],c.cards=c.items.map((function(e){return Object(j.jsxs)("div",{className:"shop-card",children:[Object(j.jsx)("div",{className:"title",style:{minWidth:"340px",fontSize:"2rem",margin:"20px"},children:e.name}),Object(j.jsx)("div",{style:{fontSize:"2rem",margin:"20px"},className:"desc",children:e.color}),Object(j.jsx)("div",{className:"slider",children:Object(j.jsx)("figure",{children:Object(j.jsx)("img",{style:{maxWidth:"350px"},src:e.img,alt:e.name})})}),Object(j.jsxs)("div",{className:"cta",children:[Object(j.jsxs)("div",{className:"price",style:{fontSize:"2rem",margin:"20px"},children:['"$"',e.price]}),Object(j.jsx)("button",{className:"btn btn-success",style:{minWidth:"150px",borderRadius:"5px"},children:'"Add to cart"'})]})]},Object(p.uuid)())})),c.state={icon:"view_list"},c.onSwitch=c.onSwitch.bind(Object(o.a)(c)),c}return Object(l.a)(i,[{key:"onSwitch",value:function(){var e="view_list"===this.state.icon?"view_module":"view_list";this.setState({icon:e})}},{key:"render",value:function(){return Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(j.jsxs)("div",{style:{margin:"0px"},children:[Object(j.jsx)("div",{className:"toolbar",style:{margin:"20px"},children:Object(j.jsx)(x,{icon:this.state.icon,onSwitch:this.onSwitch})}),"view_list"===this.state.icon?Object(j.jsx)(h,{cards:this.cards}):Object(j.jsx)(g,{items:this.items})]})})}}]),i}(s.a.Component)),v=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,25)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;i(e),c(e),s(e),n(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),v()}},[[24,1,2]]]);
//# sourceMappingURL=main.b8abeece.chunk.js.map