(this["webpackJsonpreact-afa-app"]=this["webpackJsonpreact-afa-app"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},51:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(37),i=c.n(s),r=(c(45),c(9)),l=(c(46),c(15)),o=c(17),j=(c(51),c(5)),d=c(11),b=c(40),m=c(1),h=Object(a.createContext)(),u=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(r.a)(c,2),s=n[0],i=n[1];return Object(m.jsx)(h.Provider,{value:{cart:s,addItem:function(e,t){var c;(c=e.id,s.some((function(e){return e.id===c})))?(s.find((function(t){return t.id===e.id})).quantity+=t,i(s)):i([].concat(Object(b.a)(s),[Object(d.a)(Object(d.a)({},e),{},{quantity:t})]))},removeItem:function(e){i(s.filter((function(t){return t.id!==e})))},clear:function(){i([])},totalPrice:function(e){var t=0;return e.forEach((function(e){t+=e.price*e.quantity})),t.toFixed(2)}},children:t})},O=function(){var e=Object(a.useContext)(h).cart;return Object(m.jsx)("div",{children:e.length>0?Object(m.jsxs)(j.b,{className:"link",to:"/cart",children:[Object(m.jsx)(l.a,{icon:o.c,className:"Carrito"}),Object(m.jsx)("div",{className:"noti-cont",children:Object(m.jsx)("span",{children:function(e){var t=0;return e.forEach((function(e){return t+=e.quantity})),t}(e).toString()})})]}):Object(m.jsx)(l.a,{icon:o.c,className:"Carrito-off"})})},x=(c(55),c.p+"static/media/logo.d3fbe433.jpg"),p=function(e){var t=e.data;return Object(m.jsx)("nav",{className:"navbar fixed-top navbar-expand-lg navbar-light bg-light py-4",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(j.b,{className:"link",to:"/",children:Object(m.jsx)("img",{src:x,alt:"logo"})}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(m.jsx)("div",{className:"mx-auto"}),Object(m.jsxs)("ul",{className:"navbar-nav",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(j.b,{className:"link",to:"/",children:Object(m.jsx)("span",{className:"nav-link text-black",children:"inicio"})})}),t.map((function(e){return Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(j.b,{className:"link",to:"/category/".concat(e),children:Object(m.jsx)("span",{className:"nav-link text-black",children:e})})},e)})),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("span",{className:"nav-link",children:Object(m.jsx)(O,{})})})]})]})]})})},f=(c(56),c(57),c(58),function(e){var t=e.data;return Object(m.jsxs)("div",{className:"card text-center bg-dark",children:[Object(m.jsx)("div",{className:"overflow",children:Object(m.jsx)("img",{src:t.img,alt:"imagen",className:"card-img-top"})}),Object(m.jsxs)("div",{className:"card-body text-light",children:[Object(m.jsx)("h4",{className:"card-title",children:t.title}),Object(m.jsxs)("p",{className:"card-text text-white",children:["$ ",t.price]})]})]})}),v=function(e){var t=e.data;return Object(m.jsx)("div",{className:"container d-flex justify-content-center align-items-center h-100",children:Object(m.jsx)("div",{className:"row",children:t.map((function(e){return Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsx)(j.b,{className:"link",to:"/item/".concat(e.id),children:Object(m.jsx)(f,{data:e})})},e.id)}))})})},N=c(6),g=(c(59),function(){return Object(m.jsx)("div",{id:"Spinner",className:"d-flex justify-content-center",children:Object(m.jsx)("div",{className:"spinner-border text-white",role:"status",children:Object(m.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}),y=c(24),k=(c(36),y.a.initializeApp({apiKey:"AIzaSyAyJpgDJhhVXuviXwkUcvki7RnoIKx3z3E",authDomain:"fir-test-db-a07a2.firebaseapp.com",projectId:"fir-test-db-a07a2",storageBucket:"fir-test-db-a07a2.appspot.com",messagingSenderId:"990371477053",appId:"1:990371477053:web:5e96ea2de364c5c02c9c54"}).firestore()),w=function(e){var t=e.greeting,c=Object(a.useState)([]),n=Object(r.a)(c,2),s=n[0],i=n[1],l=Object(a.useState)(!0),o=Object(r.a)(l,2),j=o[0],b=o[1],h=Object(N.f)().id;return Object(a.useEffect)((function(){k.collection("products").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id}))})),i(void 0===h?t:t.filter((function(e){return e.category===h})))})),setTimeout((function(){b(!1)}),1500)}),[h]),Object(m.jsxs)("div",{className:"ItemListContainer-container",children:[Object(m.jsx)("h1",{children:t}),Object(m.jsx)("div",{children:j?Object(m.jsx)(g,{}):Object(m.jsx)(v,{data:s})})]})},C=(c(60),c(61),c(62),function(e){var t=e.stock,c=e.initial,n=void 0===c?1:c,s=e.onAdd,i=Object(a.useState)(n),j=Object(r.a)(i,2),d=j[0],b=j[1];return Object(m.jsx)("div",{className:"container mt-5",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-sm-4"}),Object(m.jsxs)("div",{className:"col-sm-4 col-sm-offset-4",children:[Object(m.jsxs)("div",{className:"input-group mb-3",children:[Object(m.jsx)("div",{className:"input-group-prepend",children:Object(m.jsx)("button",{className:"btn btn-dark btn-sm",onClick:function(){d>n&&b(d-1)},children:Object(m.jsx)(l.a,{icon:o.a})})}),Object(m.jsx)("input",{id:"inputNumber",type:"text",className:"form-control form-control-sm",value:d,onChange:function(){return d}}),Object(m.jsx)("div",{className:"input-group-prepend",children:Object(m.jsx)("button",{className:"btn btn-dark btn-sm",onClick:function(){d<t&&b(d+1)},children:Object(m.jsx)(l.a,{icon:o.b})})})]}),Object(m.jsx)("div",{className:"btnAdd",children:Object(m.jsx)("button",{className:"btn btn-secondary",id:"btnAgregarCount",onClick:function(){return s(d)},children:"Agregar al carrito"})})]}),Object(m.jsx)("div",{className:"col-sm-4"})]})})}),I=function(e){var t=e.item,c=Object(a.useState)(""),n=Object(r.a)(c,2),s=n[0],i=n[1],l=Object(a.useContext)(h).addItem;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"ItemDetail",children:[Object(m.jsx)("div",{className:"ItemDetail-image",children:Object(m.jsx)("img",{src:t.img,alt:"Imagen de Producto"})}),Object(m.jsxs)("div",{className:"ItemDetail-content",children:[Object(m.jsx)("h2",{children:t.title}),Object(m.jsxs)("h3",{children:["$ ",t.price]}),Object(m.jsx)("p",{children:t.description}),s?Object(m.jsx)(j.b,{to:"/cart",children:Object(m.jsx)("button",{className:"btn btn-primary",id:"btnGoToCart",onClick:function(){l(t,s)},children:"Ir al Carrito"})}):Object(m.jsx)(C,{stock:10,initial:1,onAdd:function(e){i(e)}})]})]})})},S=function(e){var t=e.match.params.id,c=Object(a.useState)([]),n=Object(r.a)(c,2),s=n[0],i=n[1],l=Object(a.useState)(!0),o=Object(r.a)(l,2),b=o[0],h=o[1];return Object(a.useEffect)((function(){k.collection("products").onSnapshot((function(e){var c=[];e.forEach((function(e){c.push(Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id}))})),i(c.filter((function(e){return e.id===t})))})),window.scrollTo(0,0),setTimeout((function(){h(!1)}),1500)}),[t]),Object(m.jsxs)("div",{className:"ItemDetailContainer-container",children:[Object(m.jsx)("h1",{children:"Detalle de producto"}),b?Object(m.jsx)(g,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"bread-container",children:Object(m.jsx)("nav",{"aria-label":"breadcrumb",children:Object(m.jsxs)("ol",{className:"breadcrumb",children:[Object(m.jsx)("li",{className:"breadcrumb-item",children:Object(m.jsx)(j.b,{className:"text-white",to:"/",children:Object(m.jsx)("span",{className:"text-white",children:"inicio"})})}),Object(m.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:s[0].category})]})})}),Object(m.jsx)(I,{item:s[0]})]})]})},E=(c(63),c(22)),_=function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsxs)("div",{className:"footer__container",children:[Object(m.jsx)("div",{className:"footer__espacio"}),Object(m.jsx)("h4",{className:"footer__logo",children:Object(m.jsx)("img",{src:x,alt:"logo"})}),Object(m.jsx)("p",{className:"footer__parrafo",children:"Copyright \xa9 2021 - Leandro Berne"}),Object(m.jsxs)("div",{className:"footer__social",children:[Object(m.jsx)(j.b,{to:{pathname:"https://www.facebook.com/"},target:"_blank",children:Object(m.jsx)(l.a,{icon:E.a,className:"fab fa-facebook"})}),Object(m.jsx)(j.b,{to:{pathname:"https://www.instagram.com/"},target:"_blank",children:Object(m.jsx)(l.a,{icon:E.b,className:"fab fa-instagram"})}),Object(m.jsx)(j.b,{to:{pathname:"https://www.twitter.com"},target:"_blank",children:Object(m.jsx)(l.a,{icon:E.c,className:"fab fa-twitter"})})]})]})})},q=(c(64),function(){var e=Object(a.useContext)(h),t=e.cart,c=e.removeItem,n=e.clear,s=e.totalPrice;return Object(m.jsxs)("div",{className:"Carrito-container",children:[void window.scrollTo(0,0),Object(m.jsxs)("h1",{children:["Mi carrito(",t.length,")"]}),t.length>0?Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Cantidad"}),Object(m.jsx)("th",{scope:"col",children:"Nombre"}),Object(m.jsx)("th",{scope:"col",children:"Costo unidad"}),Object(m.jsx)("th",{scope:"col",children:"Costo parcial"}),Object(m.jsx)("th",{scope:"col",children:"Quitar"})]})}),Object(m.jsx)("tbody",{children:t.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:e.quantity}),Object(m.jsx)("td",{children:e.title}),Object(m.jsxs)("td",{children:["$ ",e.price]}),Object(m.jsxs)("td",{children:["$ ",e.price*e.quantity]}),Object(m.jsx)("td",{children:Object(m.jsx)(l.a,{icon:o.d,className:"Tachito",onClick:function(){c(e.id)}})})]},e.id)}))})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"No hay productos"}),Object(m.jsx)(j.b,{to:"/",children:Object(m.jsx)("button",{className:"btn btn-primary",children:"Volver a la tienda"})})]}),t.length>0&&Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{className:"totalPrice",children:["Total: $ ",s(t).toString()]}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:n,children:"Borrar todo el carrito"}),Object(m.jsx)(j.b,{to:"/payment",children:Object(m.jsx)("button",{className:"btn btn-success",children:"Finalizar compra"})})]})]})}),A=c(33),D=c.n(A),T=c(39),F=c(27),P=(c(66),function(){var e=Object(a.useContext)(h),t=e.cart,c=e.clear,n=e.totalPrice,s=Object(a.useState)({name:"",lastName:"",phone:"",email:""}),i=Object(r.a)(s,2),l=i[0],o=i[1],b=Object(a.useState)(""),u=Object(r.a)(b,2),O=u[0],x=u[1],p=function(e){e.preventDefault(),o(Object(d.a)(Object(d.a)({},l),{},Object(F.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(T.a)(D.a.mark((function e(a){var s,i,r,o,j,b;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),s=k.collection("purchases"),i={buyer:{name:l.name,lastName:l.lastName,phone:l.phone,email:l.email},items:t,date:y.a.firestore.Timestamp.fromDate(new Date),total:n(t)},r=k.collection("products").where(y.a.firestore.FieldPath.documentId(),"in",t.map((function(e){return e.id}))),e.next=6,r.get();case 6:return o=e.sent,j=k.batch(),b=[],o.docs.forEach((function(e,c){e.data().stock>=t[c].quantity?j.update(e.ref,{stock:e.data().stock-t[c].quantity}):b.push(Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id}))})),0===b.length&&j.commit(),e.next=13,s.add(i).then((function(e){x(e.id)})).catch((function(e){console.error("Error adding document: ",e)}));case 13:c(),a.target.reset();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[void window.scrollTo(0,0),Object(m.jsx)("h1",{children:"Finalizar compra"}),Object(m.jsxs)("h3",{className:"totalEnc",children:["Total a abonar: $ ",n(t)]}),Object(m.jsx)("h4",{className:"subtCompra",children:"Completa el siguiente formulario para terminar tu compra"}),Object(m.jsx)("div",{className:"form-container",children:Object(m.jsx)("div",{className:"inner-container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-2"}),Object(m.jsxs)("form",{className:"col-8",onSubmit:f,children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"name",className:"form-label text-black",children:"Nombre"}),Object(m.jsx)("input",{type:"text",className:"form-control",name:"name",id:"name",placeholder:"Ingres\xe1 tu nombre",onChange:p,required:!0,pattern:"[A-Za-z ]{3,30}",title:"Solo letras y espacios. Minimo 3 y maximo 30"})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"lastName",className:"form-label text-black",children:"Apellido"}),Object(m.jsx)("input",{type:"text",className:"form-control",name:"lastName",id:"lastName",placeholder:"Ingres\xe1 tu apellido",onChange:p,required:!0,pattern:"[A-Za-z ]{3,30}",title:"Solo letras y espacios. Minimo 3 y maximo 30"})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"phone",className:"form-label text-black",children:"Telefono"}),Object(m.jsx)("input",{type:"text",className:"form-control",name:"phone",id:"phone",placeholder:"Ingres\xe1 tu telefono",onChange:p,maxLength:"10",required:!0,pattern:"[0-9]{10}",title:"Solo numeros. 10 digitos."})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"email",className:"form-label text-black",children:"Correo electr\xf3nico"}),Object(m.jsx)("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Ingres\xe1 tu e-mail",onChange:p,required:!0})]}),O?Object(m.jsxs)("div",{className:"divPurchaseId",children:[Object(m.jsxs)("h3",{children:["Su numero ID de compra es: ",Object(m.jsx)("strong",{children:O})]}),Object(m.jsx)("p",{children:"El mismo ser\xe1 enviado a su casilla de correo."}),Object(m.jsx)(j.b,{to:"/",children:Object(m.jsx)("button",{id:"btn-volver",className:"btn btn-primary",children:"Volver a la tienda"})})]}):Object(m.jsx)("button",{id:"btn-finalizar",className:"btn btn-danger col-12",type:"submit",children:"Pagar"})]}),Object(m.jsx)("div",{className:"col-2"})]})})})]})}),z=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){k.collection("categories").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data().title)})),n(t)}))}),[]),Object(m.jsx)(u,{children:Object(m.jsx)(j.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(p,{data:c}),Object(m.jsx)("div",{className:"main-dummy"}),Object(m.jsxs)(N.c,{children:[Object(m.jsx)(N.a,{exact:!0,path:"/",children:Object(m.jsx)(w,{greeting:"Bienvenidos a nuestra tienda online"})}),Object(m.jsx)(N.a,{path:"/category/:id",children:Object(m.jsx)(w,{greeting:"Bienvenidos a nuestra tienda online"})}),Object(m.jsx)(N.a,{path:"/item/:id",component:S}),Object(m.jsx)(N.a,{path:"/cart",component:q}),Object(m.jsx)(N.a,{path:"/payment",component:P})]}),Object(m.jsx)(_,{})]})})})};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.f784ae61.chunk.js.map