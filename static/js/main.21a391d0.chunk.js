(this["webpackJsonpsnumato-dbms"]=this["webpackJsonpsnumato-dbms"]||[]).push([[0],{195:function(e,t,a){e.exports=a(376)},200:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){},227:function(e,t,a){},228:function(e,t,a){},376:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),c=(a(200),a(14)),i=a(46),s=a(10),m=a(72),u=a.n(m),d=a(109),f=a(176),p=a(19),g=a.n(p),E={loggedName:null,token:"",isLogged:!1,cart:[],totalCost:0,finalCost:0,login:Object(s.b)((function(e,t){var a=t.user_data,n=t.token;e.isLogged=!0,console.log("log=",e.isLogged),console.log(n),e.loggedName=a.first_name,e.token=n})),logout:Object(s.b)((function(e){return e.isLogged=!1,e.loggedName=null,e.token="",r.a.createElement(i.a,{to:"/snuamto-dbms"})})),addtoCart:Object(s.b)((function(e,t){e.cart=[].concat(Object(f.a)(e.cart),[t]),g.a.post("http://localhost:8000/addtocart",{restaurant_id:t.restaurant_id,item_id:t.id,quantity:1},{headers:{Authorization:"Token ".concat(e.token)}}).then((function(e){return e.data})).then((function(e){return console.log(e)})).catch((function(e){return e.message})),console.log("cart of",e.loggedName,"has: "),console.log(e.cart)})),fillCart:Object(s.b)((function(e,t){e.cart=t.data,e.totalCost=t.total_cost,e.finalCost=t.final_cost})),fetchCart:Object(s.d)(function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("token=",a),e.next=3,g.a.get("http://127.0.0.1:8000/cart",{headers:{Authorization:"Token ".concat(a)}}).then((function(e){return e.data}));case 3:n=e.sent,t.fillCart(n);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),updateCart:Object(s.d)(function(){var e=Object(d.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.item.id,a.token),e.next=3,g.a.post("http://localhost:8000/updatecart",{item_id:a.id,quantity:a.item_quantity},{headers:{Authorization:"Token ".concat(a.token)}}).then((function(e){return console.log("update cart result =",e.data)}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())},b=(a(223),a(420)),h=a(378),y=function(){var e=Object(s.f)((function(e){return e.isLogged}));return r.a.createElement("div",null,r.a.createElement(b.a,{container:!0,justify:"space-evenly",alignItems:"stretch"},e?r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{className:"BT",to:"/snumato-dbms/Restaurant_page",color:"secondary",variant:"contained",component:c.b,justify:"center"},"BROWSE"),r.a.createElement(h.a,{to:"/snumato-dbms/account",color:"secondary",variant:"contained",component:c.b,className:"BT"},"ACCOUNT")):r.a.createElement(h.a,{className:"BT",to:"/snumato-dbms/Restaurant_page",color:"secondary",variant:"contained",component:c.b,justify:"center"},"BROWSE")))},v=a(12),x=a(425),O=a(448),w=a(427),j=a(452),k=a(423),S=a(179),N=a(449),C=a(64),F=a(424),I=a(455);function T(){return r.a.createElement(C.a,{variant:"body2",color:"secondary",align:"center"},"Copyright \xa9 ",r.a.createElement(k.a,{color:"inherit",href:"https://material-ui.com/"},"SNUMATO do")," ",(new Date).getFullYear(),".")}var M=Object(F.a)((function(e){return{spacing:[0,2,4,8],root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/user/foodess)",backgroundRepeat:"no-repeat",backgroundColor:e.palette.secondary.main,backgroundSize:"fill",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center",background:"black"},textfield:{"& .MuiInputBase-input":{color:"white"},"& label.Mui-focused":{color:"white"},"& .MuiInputLabel-root":{color:"rgb(255,0,85)"},"& .MuiInput-underline:after":{borderBottomColor:"green"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgb(255,0,85)"},"&:hover fieldset":{borderColor:"rgb(255,0,85)"},"&.Mui-focused fieldset":{borderColor:"white",color:"white"},"& .MuiInputBase-input":{color:"white"}}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1),background:"black"},submit:{margin:e.spacing(3,0,2)},checkbox:{"& .MuiFormControlLabel-label":{color:"rgb(255,0,85)"},"& .MuiCheckbox-root":{color:"rgb(255,0,85)"}}}}));function _(){var e=Object(s.e)((function(e){return e.login})),t=Object(s.f)((function(e){return{isLogged:e.isLogged}})).isLogged,a=M(),o=Object(n.useState)(null),l=Object(v.a)(o,2),c=l[0],m=l[1],u=Object(n.useState)(null),d=Object(v.a)(u,2),f=d[0],p=d[1];return t?r.a.createElement(i.a,{push:!0,to:"/snumato-dbms"}):r.a.createElement(b.a,{container:!0,component:"main",className:a.root},r.a.createElement(x.a,null),r.a.createElement(b.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(b.a,{style:{background:"black"},item:!0,xs:12,sm:8,md:5,component:S.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement(C.a,{component:"h1",variant:"h5",style:{color:"#EFF"}},"Sign in"),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:function(t){t.preventDefault(),console.log("email=",c,"pass=",f),g.a.post("http://127.0.0.1:8000/user/login",{email:c,password:f}).then((function(e){return e.data})).then((function(t){console.log(t.token),"success"==t.status&&e(t)})).catch((function(e){return console.log(e.message)}))}},r.a.createElement(O.a,{onInput:function(e){return m(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,color:"secondary",className:a.textfield}),r.a.createElement(O.a,{onInput:function(e){return p(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",color:"secondary",className:a.textfield}),r.a.createElement(w.a,{className:a.checkbox,control:r.a.createElement(j.a,{value:"remember",color:"secondary"}),label:"Remember me"}),r.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",style:{background:"#F05",opacity:"1"},className:a.submit},"Sign In"),r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(k.a,{href:"#",variant:"body2",color:"secondary",style:{textDecoration:"none"}},"Forgot password?")),r.a.createElement(b.a,{item:!0},r.a.createElement(k.a,{href:"/snumato-dbms/signup",variant:"body2",color:"secondary",style:{textDecoration:"none"}},"Don't have an account? Sign Up"))),r.a.createElement(N.a,{mt:5},r.a.createElement(T,null))),r.a.createElement(N.a,{mt:50},r.a.createElement(I.a,{label:"Image by Jennifer Pallian",component:"a",href:"https://unsplash.com/@foodess",clickable:!0,style:{position:"absolute",left:"20vh",background:"black",color:"#EFF"}})))))}var B=a(162),L=a(36),D=a(3),J=a(26),W=a(450),z=a(453),A=a(429),R=a(430),q=a(426),U=a(431),P=a(428),H=a(163),V=a.n(H),G=a(166),Q=a.n(G),Y=a(165),X=a.n(Y),$=a(432),K=a(433),Z=a(434),ee=a(114),te=a.n(ee),ae=a(115),ne=a.n(ae),re=a(164),oe=a.n(re),le=(a(224),{opacity:"0.8",alignItems:"justify",margin:"10px",padding:"5px",fontSize:"16px"}),ce=Object(F.a)((function(e){return{root:{display:"flex"},paperColor:{background:"black"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:270,width:"calc(100% - ".concat(270,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:270,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:270,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(L.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(B.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}}));function ie(e){var t,a,n=e.children,o=ce(),l=Object(J.a)(),i=r.a.useState(!1),m=Object(v.a)(i,2),u=m[0],d=m[1],f=Object(s.f)((function(e){return{loggedName:e.loggedName,isLogged:e.isLogged,token:e.token,cart:e.cart}})),p=f.loggedName,g=f.isLogged,E=f.token,y=(f.cart,function(){d(!0)}),O=function(){d(!1)},w=Object(s.e)((function(e){return e.fetchCart}));Object(s.e)((function(e){return e.logout}));return r.a.createElement(W.b,{injectFirst:!0},r.a.createElement("div",{className:o.root},r.a.createElement(x.a,null),r.a.createElement(A.a,{style:{background:"black"},position:"fixed",className:Object(D.a)(o.appBar,Object(L.a)({},o.appBarShift,u))},r.a.createElement(R.a,null,r.a.createElement(P.a,{color:"inherit","aria-label":"open drawer",onMouseOver:y,edge:"start",className:Object(D.a)(o.menuButton,Object(L.a)({},o.hide,u))},r.a.createElement(V.a,null)),r.a.createElement(C.a,{variant:"h5",to:"/snumato-dbms",component:c.b,className:"logo-main",style:{fontFamily:"Josefin Sans, sans-serif"}},"SNUMATO"),r.a.createElement(b.a,{container:!0,justify:"flex-end",direction:"row",alignItems:"flex-start"},g?r.a.createElement(h.a,{style:le,to:"/snumato-dbms/account",color:"secondary",variant:"text",disableRipple:!0,className:"BT logo-main"},"Hello, ",p):r.a.createElement(h.a,{style:le,to:"/snumato-dbms/login_page",color:"secondary",variant:"text",component:c.b,className:"BT logo-main"},"LOGIN/SIGN UP"),r.a.createElement(P.a,{"aria-label":"delete",style:le,to:"/snumato-dbms/cart",color:"secondary",variant:"text",component:c.b,className:"BT logo-main",onClick:function(){return w(E)}},r.a.createElement(oe.a,null))))),r.a.createElement(z.a,{onMouseOver:y,onMouseOut:O,variant:"permanent",className:Object(D.a)(o.drawer,(t={},Object(L.a)(t,o.drawerOpen,u),Object(L.a)(t,o.drawerClose,!u),t)),classes:{paper:Object(D.a)(o.paperColor,(a={},Object(L.a)(a,o.drawerOpen,u),Object(L.a)(a,o.drawerClose,!u),a))}},r.a.createElement("div",{className:o.toolbar},r.a.createElement(P.a,{onClick:O},"rtl"===l.direction?r.a.createElement(X.a,null):r.a.createElement(Q.a,{style:{color:"#F05"}}))),r.a.createElement(U.a,null),r.a.createElement(q.a,null,["Today's deals","Near Me","Browse"].map((function(e,t){return r.a.createElement(c.b,{to:"/snumato-dbms",style:{textDecoration:"none",color:"inherit"},key:t},r.a.createElement($.a,{button:!0,key:e,className:"listItem"},r.a.createElement(K.a,{style:{color:"white"}},t%2===0?r.a.createElement(te.a,null):r.a.createElement(ne.a,null)),r.a.createElement(Z.a,{primary:e,style:{color:"#F05"}})))}))),r.a.createElement(U.a,null),r.a.createElement(q.a,null,["Login","Support","About us"].map((function(e,t){return r.a.createElement(c.b,{to:"/snumato-dbms/login_page",style:{textDecoration:"none",color:"inherit"},key:t},r.a.createElement($.a,{button:!0,key:e,className:"listItem"},r.a.createElement(K.a,{style:{color:"white"}},t%2===0?r.a.createElement(te.a,null):r.a.createElement(ne.a,null)),r.a.createElement(Z.a,{primary:e,style:{color:"white"}})))})))),r.a.createElement("main",{className:o.content},r.a.createElement("div",{className:o.toolbar}),n)))}var se=a(167),me=a(168),ue=a(177),de=a(175),fe=a(435),pe=a(436),ge=a(439),Ee=a(437),be=a(438),he=Object(F.a)({root:{maxWidth:345,minWidth:345,marginTop:20,height:380},media:{height:220}});function ye(e){var t=he();return console.log(e.rest),r.a.createElement(c.b,{to:{pathname:"/snumato-dbms/restaurant",state:e.rest},style:{textDecoration:"none"}},r.a.createElement(b.a,{container:!0,item:!0,xs:6,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(fe.a,{className:t.root,style:{background:"black",opacity:"0.95"}},r.a.createElement(pe.a,null,r.a.createElement(Ee.a,null,r.a.createElement(be.a,{className:t.media,image:"https://source.unsplash.com/user/foodess",title:e.name}),r.a.createElement(C.a,{gutterBottom:!0,variant:"h5",component:"h2",style:{color:"#f05",marginTop:"10px"}},e.name),r.a.createElement(C.a,{variant:"body2",color:"textPrimary",component:"p",style:{color:"#eef"}},e.description))),r.a.createElement(ge.a,null,r.a.createElement(h.a,{size:"small",color:"secondary"},"Share"),r.a.createElement(h.a,{size:"small",color:"secondary"},"Learn More")))))}var ve=function(e){Object(ue.a)(a,e);var t=Object(de.a)(a);function a(){var e;Object(se.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={restaurants:0},e}return Object(me.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://127.0.0.1:8000/restaurants").then((function(e){return e.data})).then((function(t){return e.setState({restaurants:t.restaurants})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{container:!0,justify:"space-evenly",spacing:1,style:{marginLeft:"5%"}},this.state.restaurants&&this.state.restaurants.map((function(e){return r.a.createElement(b.a,{item:!0,key:e.restaurant_id},r.a.createElement(ye,{rest:e,name:e.name,description:e.location}))}))))}}]),a}(n.Component),xe=a(178),Oe=a(169),we=a.n(Oe),je=a(170),ke=a.n(je),Se=a(171),Ne=a.n(Se),Ce=a(172),Fe=a.n(Ce),Ie=a(173),Te=a.n(Ie),Me=a(4),_e=a(454),Be=a(440),Le=a(441),De=a(442),Je=a(443),We=a(444);var ze=function(e){var t=Object(n.useState)(null),a=Object(v.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)([]),i=Object(v.a)(c,2),m=(i[0],i[1],Object(s.e)((function(e){return e.addtoCart})));return Object(n.useEffect)((function(){g.a.get("http://127.0.0.1:8000/restaurants_menu?restaurant_id=".concat(e.id)).then((function(e){return e.data})).then((function(e){return l(e.restaurants)}))}),[]),r.a.createElement("div",null,r.a.createElement(C.a,{variant:"h5",color:"secondary",align:"left",style:{paddingLeft:10}},"Menu"),r.a.createElement(Be.a,null,r.a.createElement(Le.a,null,r.a.createElement(De.a,null,r.a.createElement(Je.a,{style:{color:"white",fontSize:"19px"}},"Item"),r.a.createElement(Je.a,{style:{color:"white",fontSize:"19px"},align:"center"},"Price"),r.a.createElement(Je.a,null,"."))),r.a.createElement(We.a,null,o&&o.map((function(e){return r.a.createElement(De.a,{key:e.id},r.a.createElement(Je.a,{style:{color:"white"}},e.item_name),r.a.createElement(Je.a,{style:{color:"white"},align:"center"}," ",e.item_cost),r.a.createElement(Je.a,{align:"right"},r.a.createElement(h.a,{color:"secondary",variant:"outlined",onClick:function(){m(e)}},"Add")))})))))},Ae=Object(F.a)({resHead:{marginTop:20,width:"100%"},media:{height:340},resName:{paddingTop:20}}),Re=(Object(Me.a)({iconFilled:{color:"#ff6d75"},iconHover:{color:"#ff3d47"}})(_e.a),{1:{icon:r.a.createElement(we.a,null),label:"Very Dissatisfied"},2:{icon:r.a.createElement(ke.a,null),label:"Dissatisfied"},3:{icon:r.a.createElement(Ne.a,null),label:"Neutral"},4:{icon:r.a.createElement(Fe.a,null),label:"Satisfied"},5:{icon:r.a.createElement(Te.a,null),label:"Very Satisfied"}});function qe(e){var t=e.value,a=Object(xe.a)(e,["value"]);return r.a.createElement("span",a,Re[t].icon)}var Ue=function(e){var t=Ae(),a=e.location.state,n=a.restaurant_id,o=a.name,l=a.location,c=a.working_hours,i=a.cost_for_two;return r.a.createElement(b.a,{container:!0},r.a.createElement(fe.a,{className:t.resHead,style:{background:"black",opacity:"0.90"}},r.a.createElement(pe.a,null,r.a.createElement(Ee.a,null,r.a.createElement(be.a,{className:t.media,image:"https://static01.nyt.com/images/2018/08/08/dining/08Seasons1/08Seasons1-videoSixteenByNineJumbo1600.jpg",title:"Food Food"}),r.a.createElement(C.a,{gutterBottom:!0,variant:"h5",component:"h2",className:t.resName,style:{color:"#F05"}},o),r.a.createElement(N.a,{component:"fieldset",mb:7,borderColor:"transparent",align:"right"},r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:6},r.a.createElement(C.a,{style:{color:"white"},align:"left"},l," ")),r.a.createElement(b.a,{item:!0,xs:6},r.a.createElement(_e.a,{name:"customized-icons",defaultValue:4,readOnly:!0,IconContainerComponent:qe,style:{color:"#F05"}})),r.a.createElement(b.a,{item:!0,xs:6,align:"left"},r.a.createElement(C.a,{style:{color:"white"},align:"left",variant:"inherit"},"Working Hours: ",c))),r.a.createElement(b.a,{item:!0,xs:12,align:"left",style:{paddingTop:"8px"}},r.a.createElement(C.a,{style:{color:"white"},align:"left",variant:"inherit"},"Cost for Two: ",i))))),r.a.createElement(ze,{id:n}),r.a.createElement(ge.a,null,r.a.createElement(b.a,{container:!0,alignItems:"flex-start"},r.a.createElement(C.a,{style:{paddingRight:10,paddingLeft:10,color:"#EFF"}},"Rate This Restaurant")),r.a.createElement(b.a,{container:!0,alignItems:"flex-start",justify:"flex-end",direction:"row"},r.a.createElement(h.a,{size:"small",color:"secondary"},"Learn More")))))},Pe=a(445),He=Object(F.a)((function(e){return{paper:{marginTop:e.spacing(15),display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"black",opacity:"0.9"},button:{"& .MuiButton-contained":{backgroundColor:"red"},"& .MuiButton-text":{textDecoration:"none"}}}})),Ve=function(){var e=He();return r.a.createElement(Pe.a,{style:{background:"black",opacity:"0.9"},component:"main",maxWidth:"xs"},r.a.createElement(x.a,null),r.a.createElement(S.a,{className:e.paper},r.a.createElement(C.a,{component:"h1",variant:"h5",style:{color:"#EFF",marginTop:"10px"}},"SUCCESSFUL!"),r.a.createElement(C.a,{variant:"h6",style:{color:"#EFF"}},"You can go back to login page and use SNUMATO using your credentials now"),r.a.createElement(c.b,{to:"/snumato-dbms/login_page"},r.a.createElement(h.a,{variant:"contained",color:"secondary",className:e.button},"login page"))))};function Ge(){return r.a.createElement(C.a,{variant:"body2",color:"secondary",align:"center"},"Copyright \xa9 ",r.a.createElement(k.a,{color:"inherit",href:"https://material-ui.com/"},"SNUMATO")," ",(new Date).getFullYear(),".")}var Qe=Object(F.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"black",opacity:"0.9"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},textfield:{"& label.Mui-focused":{color:"white"},"& .MuiInputBase-input":{color:"white"},"& .MuiInputLabel-root":{color:"rgb(255,0,85)"},"& .MuiInput-underline:after":{borderBottomColor:"green"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgb(255,0,85)"},"&:hover fieldset":{borderColor:"rgb(255,0,85)"},"&.Mui-focused fieldset":{borderColor:"white",color:"white"}}}}}));function Ye(){var e=Qe(),t=Object(n.useState)(!1),a=Object(v.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(null),i=Object(v.a)(c,2),s=i[0],m=i[1],u=Object(n.useState)(null),d=Object(v.a)(u,2),f=d[0],p=d[1],E=Object(n.useState)(null),y=Object(v.a)(E,2),w=y[0],j=y[1],S=Object(n.useState)(null),F=Object(v.a)(S,2),I=F[0],T=F[1],M=Object(n.useState)(null),_=Object(v.a)(M,2),B=_[0],L=_[1],D={email:w,password:I,first_name:s,last_name:f,mobile_num:B};return r.a.createElement(Pe.a,{style:{background:"black",opacity:"0.9"},component:"main",maxWidth:"xs"},r.a.createElement(x.a,null),o?r.a.createElement(Ve,null):r.a.createElement("div",{className:e.paper},r.a.createElement(C.a,{component:"h1",variant:"h5",style:{color:"#EFF"}},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),console.log(JSON.stringify(D)),g.a.post("http://127.0.0.1:8000/user/register",D).then((function(e){console.log(e.data),l(!0)})).catch((function(e){return console.log(e.message)}))}},r.a.createElement(b.a,{container:!0,spacing:2},r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(O.a,{onInput:function(e){return m(e.target.value)},autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",color:"secondary",autoFocus:!0,className:e.textfield})),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(O.a,{onInput:function(e){return p(e.target.value)},variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",color:"secondary",className:e.textfield})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(O.a,{onInput:function(e){return j(e.target.value)},variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",color:"secondary",className:e.textfield})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(O.a,{onInput:function(e){return T(e.target.value)},variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",color:"secondary",className:e.textfield})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(O.a,{onInput:function(e){return L(e.target.value)},variant:"outlined",required:!0,fullWidth:!0,name:"mob",label:"Mobile Number",id:"mob",autoComplete:"mobile no",color:"secondary",className:e.textfield}))),r.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit},"Sign Up"),r.a.createElement(b.a,{container:!0,justify:"flex-end"},r.a.createElement(b.a,{item:!0},r.a.createElement(k.a,{href:"/snumato-dbms/login_page",variant:"body2",color:"secondary",style:{textDecoration:"none"}},"Already have an account? Sign in"))))),r.a.createElement(N.a,{mt:5},r.a.createElement(Ge,null)))}var Xe=a(447),$e=a(446),Ke=function(e){var t=Object(n.useState)(1),a=Object(v.a)(t,2),o=a[0],l=a[1],c=e.item,i=Object(s.e)((function(e){return e.updateCart})),m=Object(s.f)((function(e){return e.token}));return r.a.createElement($e.a,{size:"large","aria-label":"quantity-selector",color:"secondary"},r.a.createElement(h.a,{onClick:function(){l(o-1)}},"-"),r.a.createElement(h.a,null,o),r.a.createElement(h.a,{onClick:function(){i({item:c,token:m})}},"+"))};a(226),a(227);var Ze=function(){var e=Object(s.f)((function(e){return{cart:e.cart,totalCost:e.totalCost,finalCost:e.finalCost}})),t=e.cart,a=e.totalCost,o=e.finalCost;return r.a.createElement(b.a,{container:!0,justify:"center"},r.a.createElement(b.a,{item:!0,xs:7},r.a.createElement(S.a,null,r.a.createElement(C.a,{variant:"h2",align:"center",color:"secondary",style:{fontFamily:"Josefin Sans, sans-serif",padding:"20px"}},"CART"),r.a.createElement(C.a,{variant:"h6",align:"left",style:{margin:"10px",fontFamily:"Josefin Sans, sans-serif"}},"We Dem Tourist Cafe"),r.a.createElement(Xe.a,{component:S.a},r.a.createElement(Be.a,{"aria-label":"cart-table"},r.a.createElement(Le.a,null,r.a.createElement(De.a,null,r.a.createElement(Je.a,null,"Food Item"),r.a.createElement(Je.a,{align:"center"},"Servings"),r.a.createElement(Je.a,{align:"center"},"Cost"))),r.a.createElement(We.a,null,t.map((function(e){return r.a.createElement(n.Fragment,{key:e.id},r.a.createElement(De.a,null,r.a.createElement(Je.a,null,e.item_name),r.a.createElement(Je.a,{align:"center"},r.a.createElement(Ke,{item:e})),r.a.createElement(Je.a,{align:"center"},e.item_cost)))})),r.a.createElement(De.a,null,r.a.createElement(Je.a,{align:"left",style:{fontSize:"19px",color:"#F05",fontFamily:"Josefin Sans, sans-serif"}},"Bill Details")),r.a.createElement(De.a,null,r.a.createElement(Je.a,{align:"left",fontSize:"10px",style:{fontSize:"13px",fontFamily:"Josefin Sans, sans-serif"}}," ","Net Charge: \u20b9",a," ",r.a.createElement("br",null)," Delivery Charge: \u20b910 ",r.a.createElement("br",null)," ","Total Amount: \u20b9",Math.ceil(o)),r.a.createElement(Je.a,null),r.a.createElement(Je.a,null,r.a.createElement(h.a,{align:"right",variant:"contained",color:"secondary",style:{fontFamily:"Josefin Sans, sans-serif"}},"Place Order")))))))))},et=a(456);a(228);var tt=function(e){var t=Object(s.f)((function(e){return e.loggedName})),a=Object(n.useState)(!1),o=Object(v.a)(a,2),l=o[0],c=o[1];return r.a.createElement(b.a,{container:!0,justify:"center"},r.a.createElement(b.a,{item:!0,xs:7},r.a.createElement(S.a,{style:{background:"black",opacity:"95"}},r.a.createElement(b.a,{item:!0,xs:6,align:"center",alignItems:"center",style:{paddingTop:"3%",marginLeft:"25%",paddingBottom:"5%"}},r.a.createElement(et.a,{style:{background:"#F05",height:"70px",width:"70px",marginBottom:"3%",fontSize:"40px"}},t.toUpperCase().charAt(0)),r.a.createElement(C.a,{align:"center",variant:"h3",color:"secondary",style:{fontFamily:"Josefin Sans, sans-serif"}},t)),r.a.createElement(b.a,{item:!0,xs:8},r.a.createElement(Be.a,null,r.a.createElement(De.a,null,r.a.createElement(Je.a,null,r.a.createElement(C.a,{variant:"h6",color:"secondary"},"Email ID:"," ")),r.a.createElement(Je.a,null,r.a.createElement(C.a,{style:{color:"white",fontFamily:"Josefin Sans, sans-serif"}},"pbhasin400@gmail.com"))),r.a.createElement(De.a,null,r.a.createElement(Je.a,null,r.a.createElement(C.a,{variant:"h6",color:"secondary"},"Phone Number:"," ")),r.a.createElement(Je.a,null,r.a.createElement(C.a,{style:{color:"white",fontFamily:"Josefin Sans, sans-serif"}},"9899169906"," ")))),r.a.createElement(b.a,{item:!0,xs:4,style:{marginTop:"10%"}},r.a.createElement(C.a,{color:"secondary",variant:"h4",style:{fontFamily:"Josefin Sans, sans-serif",marginLeft:"10px"}},"ORDERS"))),r.a.createElement(b.a,{item:!0,xs:12,style:{paddingTop:"3%"}},r.a.createElement(Be.a,{align:"center"},r.a.createElement(Le.a,null,r.a.createElement(De.a,{align:"center"},r.a.createElement(Je.a,{style:{color:"white",fontFamily:"Josefin Sans, sans-serif"}},"Restaurant"),r.a.createElement(Je.a,{style:{color:"white",fontFamily:"Josefin Sans, sans-serif"}},"Date"),r.a.createElement(Je.a,{style:{color:"white",fontFamily:"Josefin Sans, sans-serif"}},"Delivery Time"))),r.a.createElement(We.a,null,r.a.createElement(De.a,null,r.a.createElement(Je.a,{onMouseOver:function(e){c(!0),console.log(l)},onMouseOut:function(e){c(!1),console.log(l)},style:{color:"white",fontFamily:"Josefin Sans, sans-serif"}},"Naveen Tea Stall",l?r.a.createElement("div",null,r.a.createElement(C.a,{style:{color:"#555"}},"Item 1: Quantity"),r.a.createElement(C.a,{style:{color:"#555"}},"Item 2: Quantity"),r.a.createElement(C.a,{style:{color:"#555"}},"Item 3: Quantity")):r.a.createElement("div",null)),r.a.createElement(Je.a,{style:{color:"white",fontFamily:"Josefin Sans, sans-serif"}},"25/01/2020"),r.a.createElement(Je.a,{style:{color:"white",fontFamily:"Josefin Sans, sans-serif"}},"15 minutes")),r.a.createElement(De.a,null,r.a.createElement(Je.a,{style:{color:"white",fontFamily:"Josefin Sans, sans-serif"}},"Surya Tuck Shop"),r.a.createElement(Je.a,{style:{color:"white",fontFamily:"Josefin Sans, sans-serif"}},"25/01/2020"),r.a.createElement(Je.a,{style:{color:"white",fontFamily:"Josefin Sans, sans-serif"}},"15 minutes"))))))))},at=(a(174),Object(s.c)(E));var nt=function(){return r.a.createElement(s.a,{store:at},r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(ie,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/snumato-dbms/",exact:!0,component:y}),r.a.createElement(i.b,{path:"/snumato-dbms/login_page",exact:!0,component:_}),r.a.createElement(i.b,{path:"/snumato-dbms/Restaurant_page",exact:!0,component:ve}),r.a.createElement(i.b,{path:"/snumato-dbms/Restaurant",exact:!0,component:Ue}),r.a.createElement(i.b,{path:"/snumato-dbms/signup",exact:!0,component:Ye}),r.a.createElement(i.b,{path:"/snumato-dbms/cart",exact:!0,component:Ze}),r.a.createElement(i.b,{path:"/snumato-dbms/account",exact:!0,component:tt}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(nt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[195,1,2]]]);
//# sourceMappingURL=main.21a391d0.chunk.js.map