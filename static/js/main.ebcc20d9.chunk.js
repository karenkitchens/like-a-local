(this["webpackJsonplike-a-local"]=this["webpackJsonplike-a-local"]||[]).push([[0],{30:function(e,t,c){"use strict";c.r(t);var a=c(20),r=c(10),s=c(5),n=c(1),o=c(6),i=c(36),l=c(2),p={borderRadius:"50%",height:"100px",width:"100px",marginRight:"1.5rem",marginBottom:"1.5rem",color:"white",padding:"1rem",textAlign:"center",fontSize:"1rem",lineHeight:"normal",float:"left"},d=Object(n.memo)((function(e){var t=e.accept,c=e.lastDroppedItem,a=e.onDrop,r=Object(i.a)({accept:t,drop:a,collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),n=Object(s.a)(r,2),d=n[0],m=d.isOver,j=d.canDrop,b=n[1],u=m&&j,O="";return u?O="#ff000055":j&&(O="#00000055"),Object(l.jsxs)("div",{ref:b,role:"Dustbin",style:Object(o.a)(Object(o.a)({},p),{},{backgroundColor:O}),className:t.join(", "),children:[u?"Release to drop":"",c&&Object(l.jsx)("div",{className:"dropped"})]})})),m=c(37),j={border:"1px dashed gray",backgroundColor:"white",padding:"0.5rem 1rem",marginRight:"1.5rem",marginBottom:"1.5rem",cursor:"move",float:"left"},b=Object(n.memo)((function(e){var t=e.name,c=e.type,a=e.src,r=e.isDropped,n=Object(m.a)((function(){return{type:c,item:{name:t},collect:function(e){return{opacity:e.isDragging()?.4:1}}}}),[t,c]),i=Object(s.a)(n,2),p=i[0].opacity,d=i[1];return Object(l.jsxs)("div",{ref:d,role:"Box",style:Object(o.a)(Object(o.a)({},j),{},{opacity:p}),children:[r?Object(l.jsx)("s",{children:t}):t,Object(l.jsx)("img",{src:a})]})})),u="Vector1",O="Vector2",h="Vector3",f="Vector4",g="Vector5",v=c.p+"static/media/Vector-1-blue.a9c85cff.svg",x=c.p+"static/media/Vector-2-blue.f24785b6.svg",D=c.p+"static/media/Vector-3-blue.413adbaf.svg",y=c.p+"static/media/Vector-4-blue.ff7d07e9.svg",k=c.p+"static/media/Vector-5-blue.2189dac4.svg",I=c.p+"static/media/Dark_2.7a12a72e.jpg",V=c(16),w=c.n(V),N=Object(n.memo)((function(){var e=Object(n.useState)([{accepts:[u],lastDroppedItem:null},{accepts:[O],lastDroppedItem:null},{accepts:[h],lastDroppedItem:null},{accepts:[f],lastDroppedItem:null},{accepts:[g],lastDroppedItem:null}]),t=Object(s.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)([{name:"Lake Pleasant",src:v,type:u},{name:"White Tank Mountain",src:x,type:O},{name:"McDowell Mountains",src:D,type:h},{name:"South Mountain",src:y,type:f},{name:"Phoenix Mountains",src:k,type:g}]),i=Object(s.a)(o,1)[0],p=Object(n.useState)([]),m=Object(s.a)(p,2),j=m[0],V=m[1];var N=Object(n.useCallback)((function(e,t){var s=t.name;V(w()(j,s?{$push:[s]}:{$push:[]})),a(w()(c,Object(r.a)({},e,{lastDroppedItem:{$set:t}})))}),[j,c]);return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"map-container",children:[Object(l.jsx)("img",{src:I,className:"map"}),Object(l.jsx)("div",{style:{overflow:"hidden",clear:"both"},children:c.map((function(e,t){var c=e.accepts,a=e.lastDroppedItem;return Object(l.jsx)(d,{accept:c,lastDroppedItem:a,onDrop:function(e){return N(t,e)}},t)}))}),Object(l.jsx)("div",{style:{overflow:"hidden",clear:"both",position:"absolute",top:0,left:0,width:300},children:i.map((function(e,t){var c,a=e.name,r=e.type,s=e.src;return Object(l.jsx)(b,{name:a,type:r,src:s,isDropped:(c=a,j.indexOf(c)>-1)},t)}))})]})})})),M=c(35),S=c(22),B=c.p+"static/media/logo.c3f08707.png";function R(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:Object(l.jsx)("img",{src:B,className:"logo"})}),Object(l.jsx)(M.a,{backend:S.a,children:Object(l.jsx)(N,{})})]})}var C=document.getElementById("root");Object(a.render)(Object(l.jsx)(R,{}),C)}},[[30,1,2]]]);
//# sourceMappingURL=main.ebcc20d9.chunk.js.map