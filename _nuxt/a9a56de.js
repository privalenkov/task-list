(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{218:function(e,t,n){var content=n(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(117).default)("feac2fb6",content,!0,{sourceMap:!1})},231:function(e,t,n){"use strict";n(218)},232:function(e,t,n){var r=n(116)(!1);r.push([e.i,'.c-online-bar[data-v-46517c81]{position:relative;width:120px;display:flex;justify-content:center;align-items:center}.c-online-bar__l-container[data-v-46517c81]:not(:first-child){margin-left:-12px}.c-online-bar__profile-circle[data-v-46517c81]{cursor:pointer;border-radius:50%;width:28px;border:2px solid #fff;height:28px;color:#fff;background:#fe3090;display:flex;justify-content:center;align-items:center;overflow:hidden;font-family:"Roboto",sans-serif;font-weight:400;font-size:10px}.c-online-bar__profile-circle img[data-v-46517c81]{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.c-online-bar__profile-circle[data-v-46517c81]:not(:first-child){margin-left:-12px}',""]),e.exports=r},245:function(e,t,n){"use strict";n.r(t);n(37);var r={name:"OnlineBar",data:function(){return{profileData:[{id:0,imgUrl:"https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg",name:"Семен"},{id:1,imgUrl:"https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg",name:"Борис"},{id:2,imgUrl:"https://i.pinimg.com/736x/fa/df/91/fadf91edf75b7c91a080463fc5f59263--don-quixote-op-art.jpg",name:"Елисей"},{id:3,imgUrl:"https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg",name:"Барсик"},{id:4,imgUrl:"https://i.pinimg.com/736x/fa/df/91/fadf91edf75b7c91a080463fc5f59263--don-quixote-op-art.jpg",name:"Аркадий"},{id:5,imgUrl:"https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg",name:"Аркадий"}]}},computed:{getProfileLength:function(){return this.profileData.length-5>0?this.profileData.length-5:null}},methods:{getLim:function(e,t){return t?e.slice(0,t):e}}},o=(n(231),n(36)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-online-bar"},[e._l(e.getLim(e.profileData,5),(function(e){return n("div",{key:e.id,staticClass:"c-online-bar__l-container"},[n("div",{staticClass:"c-online-bar__profile-circle"},[n("img",{attrs:{src:e.imgUrl,alt:e.name}})])])})),e._v(" "),e.getProfileLength?n("div",{staticClass:"c-online-bar__profile-circle"},[e._v("\n    +"+e._s(e.getProfileLength)+"\n  ")]):e._e()],2)}),[],!1,null,"46517c81",null);t.default=component.exports}}]);