(this["webpackJsonplike-a-local"]=this["webpackJsonplike-a-local"]||[]).push([[0],{38:function(e,t,c){"use strict";c.r(t);var r=c(23),a=c(13),s=c(6),o=c(1),n=c(7),i=c(44),p=c(2),l={borderRadius:"50%",height:"100px",width:"100px",marginRight:"1.5rem",marginBottom:"1.5rem",color:"white",padding:"1rem",textAlign:"center",fontSize:"1rem",lineHeight:"normal",float:"left"},d=Object(o.memo)((function(e){var t=e.accept,c=e.lastDroppedItem,r=e.onDrop,a=Object(i.a)({accept:t,drop:r,collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),o=Object(s.a)(a,2),d=o[0],m=d.isOver,j=d.canDrop,b=o[1],u=m&&j,O="";return u?O="#ff000055":j&&(O="#00000055"),Object(p.jsxs)("div",{ref:b,role:"Dustbin",style:Object(n.a)(Object(n.a)({},l),{},{backgroundColor:O}),className:t.join(", "),children:[u?"Release to drop":"",c&&Object(p.jsx)("div",{className:"dropped"})]})})),m=c(45),j={border:"1px dashed gray",backgroundColor:"white",padding:"0.5rem 1rem",marginRight:"1.5rem",marginBottom:"1.5rem",cursor:"move",float:"left"},b=Object(o.memo)((function(e){var t=e.name,c=e.type,r=e.src,a=e.isDropped,o=Object(m.a)((function(){return{type:c,item:{name:t},collect:function(e){return{opacity:e.isDragging()?.4:1}}}}),[t,c]),i=Object(s.a)(o,2),l=i[0].opacity,d=i[1];return Object(p.jsxs)("div",{ref:d,role:"Box",style:Object(n.a)(Object(n.a)({},j),{},{opacity:l}),children:[a?Object(p.jsx)("s",{children:t}):t,Object(p.jsx)("img",{src:r})]})})),u="Vector1",O="Vector2",h="Vector3",f="Vector4",v="Vector5",g=c.p+"static/media/Vector1Pink.61febd5f.svg",x=c.p+"static/media/Vector-2.8958142c.svg",D=c.p+"static/media/Vector3Pink.b462d30f.svg",y=c.p+"static/media/Vector-4.96dd5262.svg",V=c.p+"static/media/Vector-5.fb7d39c9.svg",k=c.p+"static/media/Dark_2.7a12a72e.jpg",I=c(19),w=c.n(I),N=Object(o.memo)((function(){var e=Object(o.useState)([{accepts:[u],lastDroppedItem:null},{accepts:[O],lastDroppedItem:null},{accepts:[h],lastDroppedItem:null},{accepts:[f],lastDroppedItem:null},{accepts:[v],lastDroppedItem:null}]),t=Object(s.a)(e,2),c=t[0],r=t[1],n=Object(o.useState)([{name:"Vector 1",src:g,type:u},{name:"Vector-2",src:x,type:O},{name:"Vector-3",src:D,type:h},{name:"Vector-4",src:y,type:f},{name:"Vector-5",src:V,type:v}]),i=Object(s.a)(n,1)[0],l=Object(o.useState)([]),m=Object(s.a)(l,2),j=m[0],I=m[1];var N=Object(o.useCallback)((function(e,t){var s=t.name;I(w()(j,s?{$push:[s]}:{$push:[]})),r(w()(c,Object(a.a)({},e,{lastDroppedItem:{$set:t}})))}),[j,c]);return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"map-container",children:[Object(p.jsx)("img",{src:k,className:"map"}),Object(p.jsx)("div",{style:{overflow:"hidden",clear:"both"},children:c.map((function(e,t){var c=e.accepts,r=e.lastDroppedItem;return Object(p.jsx)(d,{accept:c,lastDroppedItem:r,onDrop:function(e){return N(t,e)}},t)}))}),Object(p.jsx)("div",{style:{overflow:"hidden",clear:"both",position:"absolute",top:0,left:0,width:300},children:i.map((function(e,t){var c,r=e.name,a=e.type,s=e.src;return Object(p.jsx)(b,{name:r,type:a,src:s,isDropped:(c=r,j.indexOf(c)>-1)},t)}))})]})})})),B=c(43),R=c(27),S=c(26),C=c(25);function $(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("h1",{children:["Like a L",Object(p.jsx)(C.a,{icon:S.a}),"cal"]}),Object(p.jsx)(B.a,{backend:R.a,children:Object(p.jsx)(N,{})})]})}var A=document.getElementById("root");Object(r.render)(Object(p.jsx)($,{}),A)}},[[38,1,2]]]);
//# sourceMappingURL=main.0c70915c.chunk.js.map