(this["webpackJsonprahim-store"]=this["webpackJsonprahim-store"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},39:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(1),a=c.n(n),i=c(13),o=c.n(i),s=(c(33),c(8)),l=(c(34),c(9)),d=c(4),u=c(11);c(39);var b=function(){return Object(r.jsx)("nav",{className:"bg-gray-300 mb-20",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{className:"text-3xl text-blue-600",children:"\u211dahim Store"}),Object(r.jsx)("li",{className:"text-lg",children:Object(r.jsx)(u.b,{to:"/",exact:!0,children:"Home"})}),Object(r.jsx)("li",{className:"text-lg",children:Object(r.jsx)(u.b,{to:"/add-product",children:"Add product"})})]})})};var j=function(e){var t=e.children;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b,{}),Object(r.jsx)("main",{className:"bg-gradient-to-br from-teal-400 to-cyan-500 h-screen",children:t})]})},p=c(26),m=c.n(p),h="INIT",f="FETCH_PRODUCT_COMPLETE",x="DELETE_PRODUCT",O="EDIT_PRODUCT_INIT",g="EDIT_PRODUCT",y="SUBMIT_EDIT_PRODUCT",v="ADD_PRODUCT",N="ADD_PRODUCT_FINISH",P="ADD_PRODUCT_INIT",D="FETCH_SORTED_PRODUCT_COMPLETE",E="INITIAL_LOAD_TIME_EXCEED",T="//localhost:8080",w=function(){return function(e){e({type:h}),fetch("".concat(T,"/shop/products")).then((function(e){return e.json()})).then((function(t){e(function(e){return{type:f,payload:e}}(t.products))}))}},R=function(e){var t=new FormData;return t.append("name",e.name),t.append("price",e.price),t.append("expiryDate",e.expiryDate),t.append("image",e.image),function(e){e({type:P}),fetch("".concat(T,"/shop/product"),{method:"POST",body:t}).then((function(t){return e({type:N}),t.json()})).then((function(t){e(function(e){return{type:v,payload:e}}(t.product))}))}};c(42);var C=Object(l.b)(null,(function(e){return{deleteProduct:function(t){return e(function(e){return function(t){fetch("".concat(T,"/shop/product/").concat(e),{method:"DELETE"}).then((function(c){t({type:x,payload:e})}))}}(t))},getEditProduct:function(t){return e(function(e){return function(t){t({type:O}),fetch("".concat(T,"/shop/product/").concat(e)).then((function(e){return e.json()})).then((function(e){t({type:g,payload:e.product})}))}}(t))}}}))(Object(d.f)((function(e){var t=m()(e.expiryDate).format("DD, MMM, YYYY");return Object(r.jsxs)("li",{className:"flex mb-12 bg-white shadow-lg rounded-t-lg rounded-l-lg product-width",children:[Object(r.jsxs)("div",{className:"relative flex-shrink-0 w-64 h-full bg-gray-200 ",children:[Object(r.jsx)("svg",{className:"text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})}),"images"===e.imageUrl.split("/")[1]&&Object(r.jsx)("img",{src:"//rahim-store-api.herokuapp.com".concat(e.imageUrl),alt:e.name,className:"absolute inset-0 w-full h-full object-cover rounded-l-lg"})]}),Object(r.jsxs)("div",{className:"p-8 flex-auto flex-shrink bg-gray-50 rounded-r-lg",children:[Object(r.jsxs)("div",{className:"product-info",children:[Object(r.jsxs)("div",{className:"flex justify-between mb-4",children:[Object(r.jsx)("div",{className:"w-10/12",children:Object(r.jsx)("h1",{className:"capitalize text-2xl font-semibold mb-3",children:e.name})}),Object(r.jsxs)("div",{className:"flex item-center font-semibold text-gray-500 mr-2 text-3xl",children:[Object(r.jsx)("strong",{className:"text-lg",children:"\u09f3"}),Object(r.jsx)("p",{children:e.price})]})]}),Object(r.jsxs)("div",{className:"font-medium mb-4",children:["Expiry Date:",Object(r.jsx)("span",{className:"pl-2",children:t})]})]}),Object(r.jsxs)("div",{className:"flex mt-8 xl:w-full",children:[Object(r.jsx)("button",{className:"btn-edit w-20 p-2 mr-4 border rounded-lg bg-blue-600 ring ring-transparent focus:ring-blue-300 text-white",type:"button",onClick:function(){return e.history.push({pathname:"/edit-product"}),e.getEditProduct(e.id)},children:"Edit"}),Object(r.jsx)("button",{className:"btn-dlt w-20 p-2 border rounded-md text-white ring ring-transparent bg-red-600 focus:ring-red-300",type:"button",onClick:function(){return e.deleteProduct(e.id)},children:"Delete"})]})]})]})})));var k=Object(l.b)((function(e){return{productsArr:e.productsRTR.products,loading:e.productsRTR.loading}}))((function(e){var t;return 0===e.productsArr.length&&(t=Object(r.jsx)("p",{style:{textAlign:"center",fontSize:"4rem"},children:"Product list is empty"})),e.loading?Object(r.jsx)("p",{style:{textAlign:"center",fontSize:"4rem"},children:"loading..."}):(e.productsArr||(t=Object(r.jsx)("p",{style:{textAlign:"center",fontSize:"4rem"},children:"Refresh browser \u2639 "})),e.productsArr.length>0&&(t=Object(r.jsx)("ul",{className:"flex flex-col justify-center items-center p-4",children:e.productsArr.map((function(e){return Object(r.jsx)(C,{name:e.name,price:e.price,imageUrl:e.imageUrl,expiryDate:e.expiryDate,id:e._id},e._id)}))})),t)})),S=c(17);c(43);var F=Object(l.b)((function(e){return{finishAddProduct:e.productsRTR.isProductAdded}}),(function(e){return{addProductInit:function(t){return e(R(t))}}}))(Object(d.f)((function(e){var t=Object(n.useState)(""),c=Object(s.a)(t,2),a=c[0],i=c[1],o=Object(n.useState)(0),l=Object(s.a)(o,2),d=l[0],u=l[1],b=Object(n.useState)(""),j=Object(s.a)(b,2),p=j[0],m=j[1],h=Object(n.useState)(null),f=Object(s.a)(h,2),x=f[0],O=f[1];return Object(r.jsx)("div",{className:"flex justify-center",children:Object(r.jsxs)("form",{className:"w-2/6",onSubmit:function(t){var c;if(t.preventDefault(),x){var r,n=Object(S.a)(x);try{for(n.s();!(r=n.n()).done;){c=r.value}}catch(o){n.e(o)}finally{n.f()}}else console.log("from add product else block >>>>"),c="";var i={name:a,price:+d,expiryDate:p,image:c};e.addProductInit(i),e.history.push({pathname:"/"})},children:[Object(r.jsxs)("div",{className:"mb-8",children:[Object(r.jsx)("label",{className:"block pb-2",htmlFor:"name",children:"Name"}),Object(r.jsx)("input",{className:"w-full py-2 px-4 border-b-2 border-transparent rounded bg-gray-100 focus:border-blue-600 ",type:"text",name:"name",placeholder:"Product Name",onChange:function(e){return i(e.target.value)},required:!0})]}),Object(r.jsxs)("div",{className:"mb-8",children:[Object(r.jsx)("label",{className:"block pb-2",htmlFor:"price",children:"Price"}),Object(r.jsx)("input",{className:"w-full py-2 px-4 border-b-2 rounded bg-gray-100 focus:border-blue-600 border-transparent",type:"text",name:"price",placeholder:"Product Price",onChange:function(e){return u(e.target.value)},required:!0})]}),Object(r.jsxs)("div",{className:"mb-8",children:[Object(r.jsx)("label",{className:"block pb-2",htmlFor:"expiry-date",children:"Expiry Date"}),Object(r.jsx)("input",{className:"w-full py-2 px-4 rounded bg-gray-100",type:"date",name:"expiry-date",onChange:function(e){return m(e.target.value)},required:!0})]}),Object(r.jsxs)("div",{className:"mb-8",children:[Object(r.jsx)("label",{className:"block pb-2",htmlFor:"image",children:"Image"}),Object(r.jsx)("input",{className:"w-full py-2 px-4 border-b-2 rounded bg-gray-100 border-gray-200",type:"file",accept:".jpg, .jpeg, .png",name:"image",onChange:function(e){return O(e.target.files)}})]}),Object(r.jsx)("button",{className:"bg-blue-600 py-1 px-6 ring focus:ring-4 rounded text-white",type:"submit",children:"submit"})]})})})));var I=Object(l.b)((function(e){return{editProduct:e.productsRTR.editProduct,loading:e.productsRTR.loading}}),(function(e){return{submitEditProduct:function(t,c){return e(function(e,t){var c=new FormData;return c.append("name",e.name),c.append("price",e.price),c.append("expiryDate",e.expiryDate),c.append("image",e.image),function(e){fetch("".concat(T,"/shop/product/").concat(t),{method:"PUT",body:c}).then((function(e){return e.json()})).then((function(t){e({type:y,payload:t.product})}))}}(t,c))}}}))(Object(d.f)((function(e){var t=Object(n.useState)(""),c=Object(s.a)(t,2),a=c[0],i=c[1],o=Object(n.useState)(0),l=Object(s.a)(o,2),d=l[0],u=l[1],b=Object(n.useState)(""),j=Object(s.a)(b,2),p=j[0],m=j[1],h=Object(n.useState)(null),f=Object(s.a)(h,2),x=f[0],O=f[1],g=e.editProduct[0];return Object(n.useEffect)((function(){g&&(u(g.price),m(g.expiryDate),i(g.name))}),[g]),e.loading?Object(r.jsx)("p",{style:{textAlign:"center",fontSize:"4rem"},children:"loading..."}):Object(r.jsx)("div",{className:"flex justify-center",children:Object(r.jsxs)("form",{className:"w-2/6",onSubmit:function(t){var c;if(t.preventDefault(),x){var r,n=Object(S.a)(x);try{for(n.s();!(r=n.n()).done;)c=r.value}catch(o){n.e(o)}finally{n.f()}}else console.log("from eddit image else block>>>"),c=g.imageUrl;var i={name:a,price:+d,expiryDate:p,image:c};e.submitEditProduct(i,g._id),e.history.push({pathname:"/"})},children:[Object(r.jsxs)("div",{className:"mb-8",children:[Object(r.jsx)("label",{className:"block pb-2",htmlFor:"name",children:"Name"}),Object(r.jsx)("input",{className:"w-full py-2 px-4 border-b-2 rounded bg-gray-100 focus:border-blue-600 border-transparent",type:"text",value:a,name:"name",placeholder:"Product Name",onChange:function(e){return i(e.target.value)},required:!0})]}),Object(r.jsxs)("div",{className:"mb-8",children:[Object(r.jsx)("label",{className:"block pb-2",htmlFor:"price",children:"Price"}),Object(r.jsx)("input",{className:"w-full py-2 px-4 border-b-2 rounded bg-gray-100 focus:border-blue-600 border-transparent",type:"text",value:d,name:"price",placeholder:"Product Price",onChange:function(e){return u(e.target.value)},required:!0})]}),Object(r.jsxs)("div",{className:"mb-8",children:[Object(r.jsx)("label",{className:"block pb-2",htmlFor:"expiry-date",children:"Expiry Date"}),Object(r.jsx)("input",{className:"w-full py-2 px-4 rounded bg-gray-100",type:"date",value:p,name:"expiry-date",onChange:function(e){return m(e.target.value)},required:!0})]}),Object(r.jsxs)("div",{className:"mb-8",children:[Object(r.jsx)("label",{className:"block pb-2",htmlFor:"image",children:"Image"}),Object(r.jsx)("input",{className:"w-full py-2 px-4 border-b-2 rounded bg-gray-100 focus:border-blue-600 border-transparent",type:"file",accept:".jpg, .jpeg, .png",name:"image",onChange:function(e){return O(e.target.files)}})]}),Object(r.jsx)("button",{className:"bg-blue-600 py-1 px-6 ring focus:ring-4 rounded text-white",type:"submit",children:"submit"})]})})}))),_=(c(44),document.getElementById("modal-root"));var A=function(e){var t=Object(r.jsxs)("div",{className:"modal-wrapper",children:[Object(r.jsx)("div",{onClick:function(){return e.closeModal()},className:"modal-backdrop"}),Object(r.jsx)("div",{className:"modal-box p-8 rounded-md bg-gray-100",children:Object(r.jsxs)("div",{className:"flex flex-col items-center",children:[e.children,Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"bg-blue-600 py-1 px-6 ring focus:ring-4 rounded text-white",onClick:function(){return e.closeModal()},children:"Okay"})})]})})]});return o.a.createPortal(t,_)};var L=Object(l.b)((function(e){return{initialLoadTimeExceed:e.productsRTR.initialLoadTimeExceed,loading:e.productsRTR.loading,callProductsForFetch:e.productsRTR.callProductsForFetch}}),(function(e){return{fetchProducts:function(){return e(w())},fetchSortedProducts:function(){return e((function(e){e({type:h}),fetch("".concat(T,"/shop/sorted-products")).then((function(e){return e.json()})).then((function(t){e({type:D,payload:t.products})}))}))},initialLoadTimeExceedDispatch:function(){return e({type:E})}}}))((function(e){var t=Object(n.useState)(!1),c=Object(s.a)(t,2),a=c[0],i=c[1],o=Object(n.useState)(""),l=Object(s.a)(o,2),u=l[0],b=l[1],p=e.initialLoadTimeExceed,m=Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{path:"/",exact:!0,children:Object(r.jsx)(k,{})}),Object(r.jsx)(d.a,{path:"/add-product",children:Object(r.jsx)(F,{})}),Object(r.jsx)(d.a,{path:"/edit-product",children:Object(r.jsx)(I,{})})]});Object(n.useEffect)((function(){console.log("from useEffect >>>"),e.callProductsForFetch||(e.fetchProducts(),setTimeout((function(){e.initialLoadTimeExceedDispatch()}),7e3)),e.loading&&p&&i(!0)}),[p]);var h=Object(r.jsx)("div",{});return a&&(h=Object(r.jsxs)(A,{closeModal:function(){i(!a)},children:[Object(r.jsx)("h1",{className:"text-4xl mb-8",children:"Slow?"}),Object(r.jsx)("p",{className:"mb-16 text-lg",children:"It may take a few sec to load for the first time. Cause I used Heroku for API deployment. So that after 30 minutes of inactivity Heroku dynos goes to the idle state at the free tier."})]})),Object(r.jsxs)(r.Fragment,{children:[h,Object(r.jsxs)(j,{children:[Object(r.jsxs)("div",{className:"flex flex-col items-end mr-16",children:[Object(r.jsx)("p",{children:"Filter Products"}),Object(r.jsxs)("select",{value:u,onChange:function(t){return function(t){t.preventDefault(),"byExpiryDate"===t.target.value&&e.fetchSortedProducts(),b(t.target.value),console.log(t.target.value)}(t)},children:[Object(r.jsx)("option",{value:"byPrice",children:"byPrice"}),Object(r.jsx)("option",{value:"byExpiryDate",children:"By expiry date"})]})]}),m]})]})})),U=c(12),M=c(27),H=c(3),q={products:[],editProduct:[],callProductsForFetch:!1,isProductAdded:!1,inEditPage:!1,loading:!1,initialLoadTimeExceed:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(H.a)(Object(H.a)({},e),{},{callProductsForFetch:!0,loading:!0});case E:return Object(H.a)(Object(H.a)({},e),{},{initialLoadTimeExceed:!0});case f:case D:return Object(H.a)(Object(H.a)({},e),{},{loading:!1,initialLoadTimeExceed:!1,products:t.payload});case x:return Object(H.a)(Object(H.a)({},e),{},{products:e.products.filter((function(e){return e._id!==t.payload}))});case P:return Object(H.a)(Object(H.a)({},e),{},{loading:!0});case N:return Object(H.a)(Object(H.a)({},e),{},{loading:!1,isProductAdded:!0,inEditPage:!1,editProduct:[]});case v:return Object(H.a)(Object(H.a)({},e),{},{isProductAdded:!1,products:e.products.concat(t.payload)});case O:return Object(H.a)(Object(H.a)({},e),{},{loading:!0});case g:return Object(H.a)(Object(H.a)({},e),{},{loading:!1,editProduct:[t.payload]});case y:var c=e.products.filter((function(e){return e._id!==t.payload._id})),r=c.concat(t.payload);return Object(H.a)(Object(H.a)({},e),{},{loading:!1,products:r});default:return e}},B=Object(U.c)({productsRTR:z}),Y=U.d,J=Object(U.e)(B,Y(Object(U.a)(M.a)));o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(l.a,{store:J,children:Object(r.jsx)(u.a,{basename:"/Rahim-Store",children:Object(r.jsx)(L,{})})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.987d9096.chunk.js.map