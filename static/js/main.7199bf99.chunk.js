(this["webpackJsonplike-a-local"]=this["webpackJsonplike-a-local"]||[]).push([[0],{38:function(e,t,c){"use strict";c.r(t);var a=c(23),r=c(13),n=c(6),s=c(1),o=c(7),i=c(44),l=c(2),p={borderRadius:"50%",height:"100px",width:"100px",marginRight:"1.5rem",marginBottom:"1.5rem",color:"white",padding:"1rem",textAlign:"center",fontSize:"1rem",lineHeight:"normal",float:"left"},d=Object(s.memo)((function(e){var t=e.accept,c=e.lastDroppedItem,a=e.onDrop,r=Object(i.a)({accept:t,drop:a,collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),s=Object(n.a)(r,2),d=s[0],m=d.isOver,j=d.canDrop,b=s[1],u=m&&j,O="";return u?O="#ff000055":j&&(O="#00000055"),Object(l.jsxs)("div",{ref:b,role:"Dustbin",style:Object(o.a)(Object(o.a)({},p),{},{backgroundColor:O}),className:t.join(", "),children:[u?"Release to drop":"",c&&Object(l.jsx)("div",{className:"dropped"})]})})),m=c(45),j={border:"1px dashed gray",backgroundColor:"white",padding:"0.5rem 1rem",marginRight:"1.5rem",marginBottom:"1.5rem",cursor:"move",float:"left"},b=Object(s.memo)((function(e){var t=e.name,c=e.type,a=e.src,r=e.isDropped,s=Object(m.a)((function(){return{type:c,item:{name:t},collect:function(e){return{opacity:e.isDragging()?.4:1}}}}),[t,c]),i=Object(n.a)(s,2),p=i[0].opacity,d=i[1];return Object(l.jsxs)("div",{ref:d,role:"Box",style:Object(o.a)(Object(o.a)({},j),{},{opacity:p}),children:[r?Object(l.jsx)("s",{children:t}):t,Object(l.jsx)("img",{src:a})]})})),u="Vector1",O="Vector2",h="Vector3",f="Vector4",v="Vector5",g=c.p+"static/media/Vector-1-blue.a9c85cff.svg",x=c.p+"static/media/Vector-2-blue.f24785b6.svg",D=c.p+"static/media/Vector-3-blue.413adbaf.svg",y=c.p+"static/media/Vector-4-blue.ff7d07e9.svg",k=c.p+"static/media/Vector-5-blue.2189dac4.svg",I=c.p+"static/media/Dark_2.7a12a72e.jpg",V=c(19),w=c.n(V),M=Object(s.memo)((function(){var e=Object(s.useState)([{accepts:[u],lastDroppedItem:null},{accepts:[O],lastDroppedItem:null},{accepts:[h],lastDroppedItem:null},{accepts:[f],lastDroppedItem:null},{accepts:[v],lastDroppedItem:null}]),t=Object(n.a)(e,2),c=t[0],a=t[1],o=Object(s.useState)([{name:"Lake Pleasant",src:g,type:u},{name:"White Tank Mountain",src:x,type:O},{name:"McDowell Mountains",src:D,type:h},{name:"South Mountain",src:y,type:f},{name:"Phoenix Mountains",src:k,type:v}]),i=Object(n.a)(o,1)[0],p=Object(s.useState)([]),m=Object(n.a)(p,2),j=m[0],V=m[1];var M=Object(s.useCallback)((function(e,t){var n=t.name;V(w()(j,n?{$push:[n]}:{$push:[]})),a(w()(c,Object(r.a)({},e,{lastDroppedItem:{$set:t}})))}),[j,c]);return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"map-container",children:[Object(l.jsx)("img",{src:I,className:"map"}),Object(l.jsx)("div",{style:{overflow:"hidden",clear:"both"},children:c.map((function(e,t){var c=e.accepts,a=e.lastDroppedItem;return Object(l.jsx)(d,{accept:c,lastDroppedItem:a,onDrop:function(e){return M(t,e)}},t)}))}),Object(l.jsx)("div",{style:{overflow:"hidden",clear:"both",position:"absolute",top:0,left:0,width:300},children:i.map((function(e,t){var c,a=e.name,r=e.type,n=e.src;return Object(l.jsx)(b,{name:a,type:r,src:n,isDropped:(c=a,j.indexOf(c)>-1)},t)}))})]})})})),N=c(43),S=c(27),B=c(26),R=c(25);function C(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("h1",{children:["Like a L",Object(l.jsx)(R.a,{icon:B.a}),"cal"]}),Object(l.jsx)(N.a,{backend:S.a,children:Object(l.jsx)(M,{})})]})}var L=document.getElementById("root");Object(a.render)(Object(l.jsx)(C,{}),L)}},[[38,1,2]]]);
//# sourceMappingURL=main.7199bf99.chunk.js.map