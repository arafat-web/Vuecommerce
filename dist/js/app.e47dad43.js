(function(){"use strict";var e={2843:function(e,t,a){var o=a(9242),r=a(3396);function s(e,t,a,o,s,c){const n=(0,r.up)("NavPage"),i=(0,r.up)("router-view"),l=(0,r.up)("FooterPage");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(n),(0,r.Wm)(i),(0,r.Wm)(l)],64)}var c=a(7139);const n=e=>((0,r.dD)("data-v-73cb5f99"),e=e(),(0,r.Cn)(),e),i={class:"navbar navbar-expand-lg sticky-top navbar-light bg-white shadow-sm"},l={class:"container p-2"},d=n((()=>(0,r._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1))),u={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},m={class:"navbar-nav ms-auto"},p={class:"nav-item dropdown"},v=n((()=>(0,r._)("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Categories ",-1))),h={class:"dropdown-menu",id:"categoryDropdown"};function g(e,t,a,o,s,n){const g=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",i,[(0,r._)("div",l,[(0,r.Wm)(g,{class:"navbar-brand",to:"/Vuecommerce"},{default:(0,r.w5)((()=>[(0,r.Uk)("VueCommerce")])),_:1}),d,(0,r._)("div",u,[(0,r._)("div",m,[(0,r.Wm)(g,{class:"nav-link",to:"/Vuecommerce"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r._)("div",p,[v,(0,r._)("ul",h,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.categories,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{key:t},[(0,r.Wm)(g,{class:"dropdown-item text-capitalize",to:"/Vuecommerce/category/"+e},{default:(0,r.w5)((()=>[(0,r.Uk)((0,c.zw)(e),1)])),_:2},1032,["to"])])))),128))])]),(0,r.Wm)(g,{class:"nav-link",to:"/Vuecommerce/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About Us")])),_:1}),(0,r.Wm)(g,{class:"nav-link",to:"/Vuecommerce/contact"},{default:(0,r.w5)((()=>[(0,r.Uk)("Contact Us")])),_:1})])])])])}var f={data(){return{categories:[]}},mounted(){this.fetchCategories()},methods:{fetchCategories(){fetch("https://fakestoreapi.com/products/categories").then((e=>e.json())).then((e=>{this.categories=e})).catch((e=>{console.error("Error fetching categories:",e)}))}}},b=a(89);const y=(0,b.Z)(f,[["render",g],["__scopeId","data-v-73cb5f99"]]);var w=y;const _=e=>((0,r.dD)("data-v-07e3036d"),e=e(),(0,r.Cn)(),e),x={class:"bg-white bottom text-center mt-5"},D=_((()=>(0,r._)("div",{class:"container"},[(0,r._)("p",{class:"p-5 text-black"},[(0,r.Uk)("Made with ❤️ by "),(0,r._)("strong",null,[(0,r._)("a",{target:"_blank",href:"https://arafatdev.com"},"Arafat Hossain Ar")])])],-1))),k=[D];function C(e,t){return(0,r.wg)(),(0,r.iD)("div",x,k)}const P={},H=(0,b.Z)(P,[["render",C],["__scopeId","data-v-07e3036d"]]);var W=H,V={name:"App",components:{NavPage:w,FooterPage:W}};const z=(0,b.Z)(V,[["render",s]]);var M=z,E=a(2483);function S(e,t,a,o,s,c){const n=(0,r.up)("HomeCarosual"),i=(0,r.up)("HomeFeatures"),l=(0,r.up)("HomeFeaturedProducts"),d=(0,r.up)("HomeLatestProducts"),u=(0,r.up)("HomeSwiper"),m=(0,r.up)("HomeTestimonials");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(n),(0,r.Wm)(i),(0,r.Wm)(l),(0,r.Wm)(d),(0,r.Wm)(u),(0,r.Wm)(m)],64)}const I={class:"container"},j=(0,r.uE)('<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active" data-bs-interval="2000"><img src="https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2082&amp;q=80" class="d-block w-100" style="height:80vh;object-fit:cover;" alt=""><div class="carousel-caption"><h5>Men&#39;s Collection</h5><p>Discover the Latest Trends: Explore Our Stylish Men&#39;s Collection Today!</p></div></div><div class="carousel-item" data-bs-interval="2000"><img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80" class="d-block w-100" style="height:80vh;object-fit:cover;" alt=""><div class="carousel-caption"><h5>Women&#39;s Collection</h5><p>Elevate Your Style: Explore Our Exclusive Women&#39;s Collection Now!</p></div></div><div class="carousel-item" data-bs-interval="2000"><img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2101&amp;q=80" class="d-block w-100" style="height:80vh;object-fit:cover;" alt=""><div class="carousel-caption"><h5>Electronics</h5><p>Smart Electronics: Explore Tech Marvels for Every Lifestyle!</p></div></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div>',1),U=[j];function $(e,t,a,o,s,c){return(0,r.wg)(),(0,r.iD)("div",I,U)}var A={name:"HomeCarosual"};const q=(0,b.Z)(A,[["render",$]]);var O=q;const F={class:"container"},Y=(0,r.uE)('<div class="row mt-4 text-center"><div class="col-md-3 mb-4"><div class="card py-4 border-0 shadow-sm"><div class="card-body"> Fastest Delivery </div></div></div><div class="col-md-3 mb-4"><div class="card py-4 border-0 shadow-sm"><div class="card-body"> Easy Returns </div></div></div><div class="col-md-3 mb-4"><div class="card py-4 border-0 shadow-sm"><div class="card-body"> Secure Payments </div></div></div><div class="col-md-3 mb-4"><div class="card py-4 border-0 shadow-sm"><div class="card-body"> 24/7 Support </div></div></div></div>',1),T=[Y];function Z(e,t){return(0,r.wg)(),(0,r.iD)("div",F,T)}const R={},G=(0,b.Z)(R,[["render",Z]]);var N=G;const B=e=>((0,r.dD)("data-v-505f0632"),e=e(),(0,r.Cn)(),e),K={class:"container mt-5 pt-3"},L=B((()=>(0,r._)("h3",{class:"text-center mb-4"},"Featured Products",-1))),J=B((()=>(0,r._)("div",{class:"border-bottom mb-5"},null,-1))),Q={class:"row"},X={class:"card p-3 h-100 border-0 shadow-sm"},ee={class:"card-img"},te=["src"],ae={class:"card-body align-self-bottom"},oe={class:"card-title"},re={class:"card-text p-0 mb-0 mt-3"},se={class:"star-rating p-0 m-0"};function ce(e,t,a,o,s,n){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",K,[L,J,(0,r._)("div",Q,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.featuredProducts,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"col-md-3 mb-4"},[(0,r._)("div",X,[(0,r._)("div",ee,[(0,r._)("img",{src:e.image,alt:"Product Image"},null,8,te)]),(0,r._)("div",ae,[(0,r._)("h6",oe,[(0,r.Wm)(i,{to:"/Vuecommerce/product/"+e.id},{default:(0,r.w5)((()=>[(0,r.Uk)((0,c.zw)(e.title),1)])),_:2},1032,["to"])]),(0,r._)("p",re,[(0,r._)("strong",null,"Price: $"+(0,c.zw)(e.price),1)]),(0,r._)("div",se,(0,c.zw)(n.generateStarRating(e.rating.rate))+" ("+(0,c.zw)(e.rating.count)+") ",1)])])])))),128))])])}var ne={data(){return{featuredProducts:[]}},mounted(){fetch("https://fakestoreapi.com/products").then((e=>e.json())).then((e=>{this.featuredProducts=e.slice(0,4)})).catch((e=>{console.error("Error fetching featured products:",e)}))},methods:{generateStarRating(e){const t=Math.round(2*e)/2,a=Math.floor(t),o=t%1===.5,r="⭐".repeat(a),s=o?"⭐":"";return`${r}${s}`}}};const ie=(0,b.Z)(ne,[["render",ce],["__scopeId","data-v-505f0632"]]);var le=ie;const de=e=>((0,r.dD)("data-v-5edde422"),e=e(),(0,r.Cn)(),e),ue={class:"container mt-5 pt-3"},me=de((()=>(0,r._)("h3",{class:"text-center mb-4"},"Latest Products",-1))),pe=de((()=>(0,r._)("div",{class:"border-bottom mb-5"},null,-1))),ve={class:"row"},he={class:"card p-3 h-100 border-0 shadow-sm"},ge={class:"card-img"},fe=["src"],be={class:"card-body align-self-bottom"},ye={class:"card-title"},we={class:"card-text p-0 mb-0 mt-3"},_e={class:"star-rating p-0 m-0"};function xe(e,t,a,o,s,n){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",ue,[me,pe,(0,r._)("div",ve,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.lastestProducts,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"col-md-3 mb-4"},[(0,r._)("div",he,[(0,r._)("div",ge,[(0,r._)("img",{src:e.image,alt:"Product Image"},null,8,fe)]),(0,r._)("div",be,[(0,r._)("h6",ye,[(0,r.Wm)(i,{to:"/Vuecommerce/product/"+e.id},{default:(0,r.w5)((()=>[(0,r.Uk)((0,c.zw)(e.title),1)])),_:2},1032,["to"])]),(0,r._)("p",we,[(0,r._)("strong",null,"Price: $"+(0,c.zw)(e.price),1)]),(0,r._)("div",_e,(0,c.zw)(n.generateStarRating(e.rating.rate))+" ("+(0,c.zw)(e.rating.count)+") ",1)])])])))),128))])])}var De={data(){return{lastestProducts:[]}},mounted(){fetch("https://fakestoreapi.com/products").then((e=>e.json())).then((e=>{this.lastestProducts=e})).catch((e=>{console.error("Error fetching featured products:",e)}))},methods:{generateStarRating(e){const t=Math.round(2*e)/2,a=Math.floor(t),o=t%1===.5,r="⭐".repeat(a),s=o?"⭐":"";return`${r}${s}`}}};const ke=(0,b.Z)(De,[["render",xe],["__scopeId","data-v-5edde422"]]);var Ce=ke;const Pe=e=>((0,r.dD)("data-v-13dc2803"),e=e(),(0,r.Cn)(),e),He={class:"home-section py-5"},We={class:"container"},Ve=Pe((()=>(0,r._)("h2",{class:"text-center mb-4"},"What Our Customers Say",-1))),ze=Pe((()=>(0,r._)("div",{class:"border-bottom mb-5"},null,-1))),Me={class:"row"},Ee={class:"card p-4 mb-4 h-100 border-0 shadow-sm"},Se={class:"card-text mb-3"},Ie={class:"card-author"},je=Pe((()=>(0,r._)("br",null,null,-1)));function Ue(e,t,a,o,s,n){return(0,r.wg)(),(0,r.iD)("div",He,[(0,r._)("div",We,[Ve,ze,(0,r._)("div",Me,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.testimonials,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"col-md-4 mb-4",key:t},[(0,r._)("div",Ee,[(0,r._)("div",Se,' "'+(0,c.zw)(e.quote)+'" ',1),(0,r._)("div",Ie,[(0,r._)("strong",null,(0,c.zw)(e.name),1),je,(0,r.Uk)(" "+(0,c.zw)(e.location),1)])])])))),128))])])])}var $e={data(){return{testimonials:[{quote:"VueCommerce is a game-changer! Their products are of exceptional quality, and their delivery is lightning-fast. I'm a loyal customer!",name:"Emily Davis",location:"Chicago, IL"},{quote:"The user-friendly interface of VueCommerce made my shopping experience effortless. I found everything I needed, and the checkout process was a breeze.",name:"Michael Anderson",location:"Houston, TX"},{quote:"I highly recommend VueCommerce to anyone looking for top-quality products and outstanding service. Their team truly cares about customer satisfaction.",name:"Sophia White",location:"Miami, FL"}]}}};const Ae=(0,b.Z)($e,[["render",Ue],["__scopeId","data-v-13dc2803"]]);var qe=Ae;const Oe={class:"container mt-5"},Fe={class:"row"},Ye={class:"card border-0 shadow-sm"};function Te(e,t,a,o,s,n){return(0,r.wg)(),(0,r.iD)("div",Oe,[(0,r._)("div",Fe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.items,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"col-md-2 mb-4",key:t},[(0,r._)("div",Ye,(0,c.zw)(e),1)])))),128))])])}var Ze={data(){return{items:["Google","Apple","Walton","Unilever","H&M","Gucci"]}}};const Re=(0,b.Z)(Ze,[["render",Te],["__scopeId","data-v-2733a2ac"]]);var Ge=Re,Ne={name:"HomePage",components:{HomeCarosual:O,HomeFeatures:N,HomeFeaturedProducts:le,HomeLatestProducts:Ce,HomeTestimonials:qe,HomeSwiper:Ge}};const Be=(0,b.Z)(Ne,[["render",S]]);var Ke=Be;const Le={id:"about",class:"py-5"},Je=(0,r.uE)('<div class="container"><div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading text-uppercase mb-4 text-primary">Welcome to VueCommerce</h2><p class="text-muted">Where Innovation Meets Style</p></div></div><div class="row mt-5"><div class="col-lg-6"><h3 class="text-uppercase mb-4 text-primary">Our Story</h3><p class="text-muted"> At VueCommerce, we believe in transforming ordinary shopping experiences into extraordinary adventures. Founded with a passion for innovation and an eye for elegance, VueCommerce is your go-to online destination for all things trendy and timeless. Our journey began with a simple idea: to create a platform where technology, fashion, and lifestyle converge harmoniously. </p><p class="text-muted"> In the bustling world of e-commerce, VueCommerce stands out as a beacon of creativity and convenience. We curate a handpicked selection of products, each telling a unique story of craftsmanship and quality. From the latest tech gadgets to chic fashion statements, our collection is a testament to our commitment to offering the best to our customers. </p></div><div class="col-lg-6"><h3 class="text-uppercase mb-4 text-primary">Our Philosophy</h3><p class="text-muted"> At the heart of VueCommerce lies a deep-rooted philosophy that guides every interaction, every purchase, and every moment you spend with us. We believe in the power of choice, the joy of discovery, and the thrill of finding something that resonates with your style and personality. </p><p class="text-muted"> VueCommerce is more than just an online store; it&#39;s a lifestyle curator, a trendsetter, and a community that celebrates individuality. We invite you to explore our diverse catalog, where every product is a manifestation of our dedication to quality, authenticity, and customer satisfaction. </p></div></div><div class="row mt-5"><div class="col-lg-12"><h3 class="text-uppercase mb-4 text-primary text-center">Why Choose VueCommerce?</h3><p class="text-muted"> We understand that the online shopping landscape is vast and varied. So, why should you choose VueCommerce as your preferred destination? The answer lies in our unwavering commitment to redefining your shopping experience. </p><p class="text-muted"><strong>Exceptional Quality:</strong> Every product in our collection undergoes rigorous quality checks to ensure that you receive nothing but the best. We partner with renowned brands and artisans who share our passion for excellence. </p><p class="text-muted"><strong>Trendsetting Style:</strong> VueCommerce is your window to the latest fashion trends, tech innovations, and lifestyle inspirations. We stay ahead of the curve, bringing you products that are as stylish as they are functional. </p><p class="text-muted"><strong>Personalized Service:</strong> Our customer service team is always ready to assist you. Whether you need product recommendations, size guides, or assistance with your order, we&#39;re here to make your shopping journey seamless. </p><p class="text-muted"><strong>Secure Transactions:</strong> Your security is our priority. VueCommerce employs cutting-edge encryption technologies to safeguard your personal information and payment details. Shop with confidence, knowing that your data is protected. </p><p class="text-muted"><strong>Community Spirit:</strong> VueCommerce isn&#39;t just a platform; it&#39;s a community of like-minded individuals who appreciate quality and style. Join our community forums, participate in discussions, and become a part of the VueCommerce family. </p></div></div></div>',1),Qe=[Je];function Xe(e,t,a,o,s,c){return(0,r.wg)(),(0,r.iD)("section",Le,Qe)}var et={name:"AboutPage"};const tt=(0,b.Z)(et,[["render",Xe]]);var at=tt;const ot=e=>((0,r.dD)("data-v-ec62d122"),e=e(),(0,r.Cn)(),e),rt={class:"container mt-5"},st={class:"card shadow-sm border-0"},ct={class:"card-body"},nt={key:0,class:"row"},it={class:"col-md-6"},lt=["src"],dt={class:"col-md-6"},ut=ot((()=>(0,r._)("strong",null,"Price:",-1))),mt={class:"text-capitalize"},pt=ot((()=>(0,r._)("strong",null,"Category:",-1))),vt=ot((()=>(0,r._)("strong",null,"Description:",-1))),ht={class:"star-rating"},gt=ot((()=>(0,r._)("div",{class:"mt-4"},[(0,r._)("button",{class:"btn btn-primary me-2"},"Buy Now"),(0,r._)("button",{class:"btn btn-outline-primary"},"Add to Cart")],-1))),ft=ot((()=>(0,r._)("h3",{class:"mt-5 mb-4 text-center"},"Related Products",-1))),bt=ot((()=>(0,r._)("div",{class:"border-bottom mb-5"},null,-1))),yt={class:"row"},wt={class:"card p-3 h-100 shadow-sm border-0"},_t={class:"card-img"},xt=["src"],Dt={class:"card-body"},kt={class:"card-title"},Ct={class:"card-text"},Pt={class:"star-rating"};function Ht(e,t,a,o,s,n){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",rt,[(0,r._)("div",st,[(0,r._)("div",ct,[s.product?((0,r.wg)(),(0,r.iD)("div",nt,[(0,r._)("div",it,[(0,r._)("img",{src:s.product.image,class:"img-fluid",alt:"Product Image"},null,8,lt)]),(0,r._)("div",dt,[(0,r._)("h2",null,(0,c.zw)(s.product.title),1),(0,r._)("p",null,[ut,(0,r.Uk)(" $"+(0,c.zw)(s.product.price),1)]),(0,r._)("p",mt,[pt,(0,r.Uk)(" "+(0,c.zw)(s.product.category),1)]),(0,r._)("p",null,[vt,(0,r.Uk)(" "+(0,c.zw)(s.product.description),1)]),(0,r._)("div",ht,(0,c.zw)(n.generateStarRating(s.product.rating.rate))+" ("+(0,c.zw)(s.product.rating.count)+") ",1),gt])])):(0,r.kq)("",!0)])]),ft,bt,(0,r._)("div",yt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.relatedProducts,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"col-md-3"},[(0,r._)("div",wt,[(0,r._)("div",_t,[(0,r._)("img",{src:e.image,class:"img",alt:"Related Product Image"},null,8,xt)]),(0,r._)("div",Dt,[(0,r._)("h5",kt,[(0,r.Wm)(i,{to:"/Vuecommerce/product/"+e.id},{default:(0,r.w5)((()=>[(0,r.Uk)((0,c.zw)(e.title),1)])),_:2},1032,["to"])]),(0,r._)("p",Ct,[(0,r._)("strong",null,"Price: $"+(0,c.zw)(e.price),1)]),(0,r._)("div",Pt,(0,c.zw)(n.generateStarRating(e.rating.rate))+" ("+(0,c.zw)(e.rating.count)+") ",1)])])])))),128))])])}var Wt={data(){return{product:null,relatedProducts:[]}},watch:{"$route.params.id":"fetchData"},methods:{async fetchData(){const e=this.$route.params.id;try{let[t,a]=await Promise.all([fetch(`https://fakestoreapi.com/products/${e}`),fetch("https://fakestoreapi.com/products")]);if(t.ok?this.product=await t.json():console.error("Error fetching product details:",t.status),a.ok){let t=await a.json();this.relatedProducts=t.filter((t=>t.id!==parseInt(e))).slice(0,4)}else console.error("Error fetching related products:",a.status)}catch(t){console.error("Error:",t)}},generateStarRating(e){const t=Math.round(2*e)/2,a="⭐".repeat(Math.floor(t)),o=t%1!==0?"⭐":"";return`${a}${o}`}},async created(){await this.fetchData()}};const Vt=(0,b.Z)(Wt,[["render",Ht],["__scopeId","data-v-ec62d122"]]);var zt=Vt;const Mt=e=>((0,r.dD)("data-v-0296e639"),e=e(),(0,r.Cn)(),e),Et={class:"contact-us-container py-5"},St={class:"container"},It={class:"row"},jt={class:"col-lg-6"},Ut=Mt((()=>(0,r._)("h2",{class:"mb-4"},"Get In Touch",-1))),$t=Mt((()=>(0,r._)("p",{class:"text-muted mb-4"}," Have questions, suggestions, or just want to say hello? We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible. ",-1))),At={class:"mb-3"},qt=Mt((()=>(0,r._)("label",{for:"name",class:"form-label"},"Your Name",-1))),Ot={class:"mb-3"},Ft=Mt((()=>(0,r._)("label",{for:"email",class:"form-label"},"Your Email",-1))),Yt={class:"mb-3"},Tt=Mt((()=>(0,r._)("label",{for:"message",class:"form-label"},"Your Message",-1))),Zt=Mt((()=>(0,r._)("button",{type:"submit",class:"btn btn-primary"},"Submit",-1))),Rt=Mt((()=>(0,r._)("div",{class:"col-lg-6"},[(0,r._)("img",{src:"https://static.vecteezy.com/system/resources/previews/006/859/994/non_2x/black-letter-telephone-location-and-address-icons-print-screen-on-wooden-cube-block-for-customer-service-contact-concept-free-photo.jpg",alt:"Contact Us Image",class:"rounded"})],-1)));function Gt(e,t,a,s,c,n){return(0,r.wg)(),(0,r.iD)("div",Et,[(0,r._)("div",St,[(0,r._)("div",It,[(0,r._)("div",jt,[Ut,$t,(0,r._)("form",{onSubmit:t[3]||(t[3]=(0,o.iM)(((...e)=>n.submitForm&&n.submitForm(...e)),["prevent"]))},[(0,r._)("div",At,[qt,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>c.formData.name=e),required:""},null,512),[[o.nr,c.formData.name]])]),(0,r._)("div",Ot,[Ft,(0,r.wy)((0,r._)("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>c.formData.email=e),required:""},null,512),[[o.nr,c.formData.email]])]),(0,r._)("div",Yt,[Tt,(0,r.wy)((0,r._)("textarea",{class:"form-control",id:"message",rows:"5","onUpdate:modelValue":t[2]||(t[2]=e=>c.formData.message=e),required:""},null,512),[[o.nr,c.formData.message]])]),Zt],32)]),Rt])])])}var Nt={data(){return{formData:{name:"",email:"",message:""}}},methods:{submitForm(){console.log("Form submitted:",this.formData)}}};const Bt=(0,b.Z)(Nt,[["render",Gt],["__scopeId","data-v-0296e639"]]);var Kt=Bt;const Lt=e=>((0,r.dD)("data-v-127360e6"),e=e(),(0,r.Cn)(),e),Jt={class:"product-category-container py-5"},Qt={class:"container"},Xt={class:"text-center mb-4 text-capitalize"},ea=Lt((()=>(0,r._)("div",{class:"border-bottom mb-5"},null,-1))),ta={class:"row"},aa={class:"card p-3 h-100 border-0 shadow-sm"},oa={class:"card-img"},ra=["src"],sa={class:"card-body align-self-bottom"},ca={class:"card-title"},na={class:"card-text p-0 mb-0 mt-3"},ia={class:"star-rating p-0 m-0"};function la(e,t,a,o,s,n){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",Jt,[(0,r._)("div",Qt,[(0,r._)("h2",Xt,"Products in "+(0,c.zw)(s.category),1),ea,(0,r._)("div",ta,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.products,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"col-md-3 mb-5"},[(0,r._)("div",aa,[(0,r._)("div",oa,[(0,r._)("img",{src:e.image,alt:"Product Image"},null,8,ra)]),(0,r._)("div",sa,[(0,r._)("h6",ca,[(0,r.Wm)(i,{to:"/Vuecommerce/product/"+e.id},{default:(0,r.w5)((()=>[(0,r.Uk)((0,c.zw)(e.title),1)])),_:2},1032,["to"])]),(0,r._)("p",na,[(0,r._)("strong",null,"Price: $"+(0,c.zw)(e.price),1)]),(0,r._)("div",ia,(0,c.zw)(n.generateStarRating(e.rating.rate))+" ("+(0,c.zw)(e.rating.count)+") ",1)])])])))),128))])])])}var da={data(){return{category:"",products:[]}},async created(){this.category=this.$route.params.category,await this.fetchData()},watch:{"$route.params.category":"fetchData"},methods:{async fetchData(){try{this.category=this.$route.params.category;let e=await fetch(`https://fakestoreapi.com/products/category/${this.$route.params.category}`);if(e.ok){let t=await e.json();this.products=t}else console.error("Error fetching products:",e.status)}catch(e){console.error("Error fetching products:",e)}},generateStarRating(e){const t=Math.round(2*e)/2,a=Math.floor(t),o=t%1===.5,r="⭐".repeat(a),s=o?"⭐":"";return`${r}${s}`}}};const ua=(0,b.Z)(da,[["render",la],["__scopeId","data-v-127360e6"]]);var ma=ua;const pa=[{path:"/Vuecommerce",name:"home",component:Ke},{path:"/Vuecommerce/about",name:"AboutPage",component:at},{path:"/Vuecommerce/product/:id",name:"productDetails",component:zt},{path:"/Vuecommerce/contact",name:"ContactPage",component:Kt},{path:"/Vuecommerce/category/:category",name:"ProductCategory",component:ma}],va=(0,E.p7)({history:(0,E.PO)(),routes:pa});var ha=va;(0,o.ri)(M).use(ha).mount("#app")}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,o,r,s){if(!o){var c=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],s=e[d][2];for(var n=!0,i=0;i<o.length;i++)(!1&s||c>=s)&&Object.keys(a.O).every((function(e){return a.O[e](o[i])}))?o.splice(i--,1):(n=!1,s<c&&(c=s));if(n){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,r,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,s,c=o[0],n=o[1],i=o[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(i)var d=i(a)}for(t&&t(o);l<c.length;l++)s=c[l],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},o=self["webpackChunksimple_ecommerce"]=self["webpackChunksimple_ecommerce"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(2843)}));o=a.O(o)})();
//# sourceMappingURL=app.e47dad43.js.map