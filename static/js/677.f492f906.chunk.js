"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[677],{20889:function(t,e,r){var n=r(1413),a=r(29439),c=r(72791),i=r(83833),s=r(14598),u=r(91523),o=r(24215),p=r(86533),l=r(12757),d=r(76976),f=r(763),h=r.n(f),g=r(59434),b=r(80184),m=i.Z.Meta;e.Z=function(t){var e=t.product,r=(0,c.useState)("Click to add"),x=(0,a.Z)(r,2),Z=x[0],v=x[1],y=(0,g.v9)((function(t){return(0,n.Z)({},t)})),A=(y.user,y.cart,(0,g.I0)()),j=e.title,I=e.description,w=e.images,C=e.slug,O=e.price;return(0,b.jsxs)(b.Fragment,{children:[e&&e.ratings&&e.ratings.length>0?(0,b.jsx)(d.Z,{product:e}):(0,b.jsx)("div",{className:"text-center pt-1 pb-3r",children:"No rating yet"}),(0,b.jsx)(i.Z,{cover:(0,b.jsx)("img",{src:w&&w.length?w[0].url:l,style:{height:"150px",objectFit:"contain"},className:"p-1",alt:""}),actions:[(0,b.jsxs)(u.rU,{to:"/product/".concat(C),children:[(0,b.jsx)(o.Z,{className:"text-info"})," ",(0,b.jsx)("br",{})," View Product"]}),(0,b.jsxs)(s.Z,{title:Z,children:[(0,b.jsxs)("a",{onClick:function(){var t=[];if("undefined"!==typeof window){localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.push((0,n.Z)((0,n.Z)({},e),{},{count:1}));var r=(0,f.uniqWith)(t,h().isEqual);localStorage.setItem("cart",JSON.stringify(r)),v("Added"),A({type:"ADD_TO_CART",payload:r}),A({type:"SET_VISIBLE",payload:!0})}},disabled:e.quantity<1,children:[(0,b.jsx)(p.Z,{className:"text-danger"})," ",(0,b.jsx)("br",{})," ",e.quantity<1?"Out of stock":"Add to Cart"]}),","]})],children:(0,b.jsx)(m,{title:"".concat(j," - ").concat(O.toLocaleString("in-ID",{style:"currency",currency:"IDR"})),description:"".concat(I&&I.substring(0,60),"...")})})]})}},76976:function(t,e,r){r(72791);var n=r(45778),a=r(80184);e.Z=function(t){var e=t.product;if(e&&e.ratings){var r=e&&e.ratings,c=[],i=r.length;r.map((function(t){return c.push(t.star)}));var s=5*c.reduce((function(t,e){return t+e}),0)/(5*i);return(0,a.jsx)("div",{className:"text-center pt-1 pb-3",children:(0,a.jsxs)("span",{children:[(0,a.jsx)(n.Z,{starDimension:"20px",startSpacing:"2px",starRatedColor:"red",rating:s,editing:!1})," ","(",e.ratings.length,")"]})})}}},86729:function(t,e,r){r.d(e,{CP:function(){return s},Gu:function(){return d},k4:function(){return l},n3:function(){return u},sT:function(){return o},yr:function(){return p}});var n=r(74165),a=r(15861),c=r(74569),i=r.n(c),s=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat("https://rainy-tabbi-react-ecommerce.koyeb.app/api","/categories"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat("https://rainy-tabbi-react-ecommerce.koyeb.app/api","/category/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i().delete("".concat("https://rainy-tabbi-react-ecommerce.koyeb.app/api","/category/").concat(e),{headers:{authtoken:r}}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r,a){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i().put("".concat("https://rainy-tabbi-react-ecommerce.koyeb.app/api","/category/").concat(e),r,{headers:{authtoken:a}}));case 1:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().post("".concat("https://rainy-tabbi-react-ecommerce.koyeb.app/api","/category"),e,{headers:{authtoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),d=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat("https://rainy-tabbi-react-ecommerce.koyeb.app/api","/category/subs/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},71677:function(t,e,r){r.r(e);var n=r(29439),a=r(72791),c=r(86729),i=r(20889),s=r(80184);e.default=function(t){var e=t.match,r=(0,a.useState)({}),u=(0,n.Z)(r,2),o=u[0],p=u[1],l=(0,a.useState)([]),d=(0,n.Z)(l,2),f=d[0],h=d[1],g=(0,a.useState)(!1),b=(0,n.Z)(g,2),m=b[0],x=b[1],Z=e.params.slug;return(0,a.useEffect)((function(){x(!0),(0,c.n3)(Z).then((function(t){p(t.data.category),h(t.data.products),x(!1)}))}),[]),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col",children:m?(0,s.jsx)("h4",{className:"text-center p-3 mt-5 mb-5 display-4 jumbotron",children:"Loading..."}):(0,s.jsxs)("h4",{className:"text-center p-3 mt-5 mb-5 display-4 jumbotron",children:[f.length,' Products in "',o.name,'" category']})})}),(0,s.jsx)("div",{className:"row",children:f.map((function(t){return(0,s.jsx)("div",{className:"col-md-4",children:(0,s.jsx)(i.Z,{product:t})},t._id)}))})]})}},12757:function(t){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=677.f492f906.chunk.js.map